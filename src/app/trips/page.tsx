import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TripCard from '@/components/trips/TripCard';
import { fallbackTrips } from '@/lib/fallback-data';
import type { Trip } from '@/types';

export const metadata: Metadata = {
  title: 'Trips & Programs',
  description:
    'Browse youth camps, day clinics, and adult paddle programs on the Trinity River. All skill levels welcome.',
};

async function getTrips(): Promise<Trip[]> {
  try {
    const { getTrips: fetchTrips } = await import('@/lib/supabase/queries');
    const trips = await fetchTrips();
    return trips.length > 0 ? trips : fallbackTrips;
  } catch {
    return fallbackTrips;
  }
}

export default async function TripsPage() {
  const trips = await getTrips();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Trips & Programs"
          subtitle="From youth camps to adult clinics — find the perfect Trinity River experience."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}
