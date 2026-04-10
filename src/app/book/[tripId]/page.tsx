'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BookingSteps from '@/components/booking/BookingSteps';
import DateSelector from '@/components/booking/DateSelector';
import ParticipantForm, { type ParticipantData } from '@/components/booking/ParticipantForm';
import WaiverForm, { type WaiverData } from '@/components/booking/WaiverForm';
import Confirmation from '@/components/booking/Confirmation';
import Button from '@/components/ui/Button';
import { formatDateRange } from '@/lib/utils';
import { getFallbackTripById } from '@/lib/fallback-data';
import type { TripWithDetails } from '@/types';

const STEPS = ['Select Date', 'Participant Info', 'Waiver', 'Confirmation'];

export default function BookingPage() {
  const params = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<TripWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDateId, setSelectedDateId] = useState<string | null>(null);

  const [participant, setParticipant] = useState<ParticipantData>({
    participant_name: '',
    email: '',
    phone: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    medical_notes: '',
    age: '',
    parent_guardian_name: '',
    parent_guardian_email: '',
  });

  const [waiver, setWaiver] = useState<WaiverData>({ signature: '', agreed: false });
  const [participantErrors, setParticipantErrors] = useState<Partial<Record<keyof ParticipantData, string>>>({});
  const [waiverErrors, setWaiverErrors] = useState<{ signature?: string; agreed?: string }>({});

  useEffect(() => {
    async function loadTrip() {
      try {
        const { getTripById } = await import('@/lib/supabase/queries');
        const data = await getTripById(params.tripId);
        setTrip(data ?? getFallbackTripById(params.tripId));
      } catch {
        setTrip(getFallbackTripById(params.tripId));
      }
      setLoading(false);
    }
    loadTrip();
  }, [params.tripId]);

  const isYouthProgram = trip?.age_range !== null && trip?.age_range !== undefined;
  const selectedDate = trip?.trip_dates?.find((d) => d.id === selectedDateId);

  function validateParticipant(): boolean {
    const errs: Partial<Record<keyof ParticipantData, string>> = {};
    if (!participant.participant_name.trim()) errs.participant_name = 'Required';
    if (!participant.email.trim() || !participant.email.includes('@')) errs.email = 'Valid email required';
    if (!participant.phone.trim()) errs.phone = 'Required';
    if (!participant.emergency_contact_name.trim()) errs.emergency_contact_name = 'Required';
    if (!participant.emergency_contact_phone.trim()) errs.emergency_contact_phone = 'Required';
    if (isYouthProgram) {
      if (!participant.age) errs.age = 'Required';
      if (!participant.parent_guardian_name.trim()) errs.parent_guardian_name = 'Required';
      if (!participant.parent_guardian_email.trim()) errs.parent_guardian_email = 'Required';
    }
    setParticipantErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateWaiver(): boolean {
    const errs: { signature?: string; agreed?: string } = {};
    if (!waiver.signature.trim()) errs.signature = 'You must type your full legal name';
    if (!waiver.agreed) errs.agreed = 'You must agree to the waiver terms';
    setWaiverErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleNext() {
    if (currentStep === 0 && !selectedDateId) return;
    if (currentStep === 1 && !validateParticipant()) return;
    if (currentStep === 2) {
      if (!validateWaiver()) return;
      await submitBooking();
      return;
    }
    setCurrentStep((s) => s + 1);
  }

  async function submitBooking() {
    setSubmitting(true);
    try {
      const { supabase } = await import('@/lib/supabase/client');

      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          trip_date_id: selectedDateId,
          participant_name: participant.participant_name,
          email: participant.email,
          phone: participant.phone,
          emergency_contact_name: participant.emergency_contact_name,
          emergency_contact_phone: participant.emergency_contact_phone,
          medical_notes: participant.medical_notes || null,
          age: participant.age ? parseInt(participant.age) : null,
          parent_guardian_name: participant.parent_guardian_name || null,
          parent_guardian_email: participant.parent_guardian_email || null,
          waiver_signed: true,
          waiver_signed_at: new Date().toISOString(),
          status: 'pending',
        })
        .select()
        .single();

      if (bookingError) throw bookingError;

      await supabase.from('waivers').insert({
        booking_id: booking.id,
        full_name: waiver.signature,
        signature: waiver.signature,
        agreed_to_terms: true,
        signed_at: new Date().toISOString(),
      });
    } catch {
      // If Supabase is not connected, still show confirmation
    }
    setSubmitting(false);
    setCurrentStep(3);
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-pulse space-y-4 max-w-2xl mx-auto px-4">
          <div className="h-8 bg-stone-200 rounded w-1/3 mx-auto" />
          <div className="h-4 bg-stone-200 rounded w-2/3 mx-auto" />
          <div className="h-64 bg-stone-100 rounded-2xl mt-8" />
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-stone-900">Trip Not Found</h1>
        <Button href="/trips" className="mt-8">
          View All Trips
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Book: {trip.title}</h1>
        <p className="text-stone-600 mb-8">{trip.location} &middot; {trip.duration}</p>

        <BookingSteps currentStep={currentStep} steps={STEPS} />

        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
          {currentStep === 0 && (
            <DateSelector
              dates={trip.trip_dates}
              selectedDateId={selectedDateId}
              onSelect={setSelectedDateId}
            />
          )}

          {currentStep === 1 && (
            <ParticipantForm
              data={participant}
              onChange={setParticipant}
              errors={participantErrors}
              isYouthProgram={isYouthProgram}
            />
          )}

          {currentStep === 2 && (
            <WaiverForm data={waiver} onChange={setWaiver} errors={waiverErrors} />
          )}

          {currentStep === 3 && selectedDate && (
            <Confirmation
              tripTitle={trip.title}
              participantName={participant.participant_name}
              email={participant.email}
              dateRange={formatDateRange(selectedDate.start_date, selectedDate.end_date)}
            />
          )}

          {/* Navigation */}
          {currentStep < 3 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-stone-200">
              {currentStep > 0 ? (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep((s) => s - 1)}
                >
                  Back
                </Button>
              ) : (
                <div />
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={
                  (currentStep === 0 && !selectedDateId) ||
                  submitting
                }
              >
                {submitting
                  ? 'Submitting...'
                  : currentStep === 2
                  ? 'Submit Booking'
                  : 'Continue'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
