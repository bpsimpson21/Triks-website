import Button from '@/components/ui/Button';

interface ConfirmationProps {
  tripTitle: string;
  participantName: string;
  email: string;
  dateRange: string;
}

export default function Confirmation({ tripTitle, participantName, email, dateRange }: ConfirmationProps) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-2">Booking Submitted!</h3>
      <p className="text-stone-600 mb-8 max-w-md mx-auto">
        Your reservation for <strong>{tripTitle}</strong> has been received. We&apos;ll be in touch
        at <strong>{email}</strong> with next steps.
      </p>

      <div className="bg-stone-50 rounded-xl p-6 max-w-md mx-auto mb-8 text-left">
        <h4 className="font-semibold text-stone-900 mb-3">Booking Summary</h4>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-stone-500">Trip</dt>
            <dd className="font-medium text-stone-900">{tripTitle}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-stone-500">Participant</dt>
            <dd className="font-medium text-stone-900">{participantName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-stone-500">Dates</dt>
            <dd className="font-medium text-stone-900">{dateRange}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-stone-500">Payment</dt>
            <dd className="font-medium text-amber-600">Coming soon</dd>
          </div>
        </dl>
      </div>

      <Button href="/trips" variant="outline">
        Browse More Trips
      </Button>
    </div>
  );
}
