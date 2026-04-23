import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TripCard from '@/components/trips/TripCard';
import { createServerClient } from '@/lib/supabase/server';
import type { Trip } from '@/types';

export const metadata: Metadata = {
  title: 'Trips & Programs',
  description:
    'Browse youth camps, day clinics, and adult paddle programs on the Trinity River. All skill levels welcome.',
};

export const dynamic = 'force-dynamic';

export default async function TripsPage() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trips')
    .select('*, trip_dates(*), itinerary_days(*)')
    .order('price', { ascending: true });

  if (error) {
    console.error('[trips page] Supabase error:', error);
  }
  console.log('[trips page] fetched trips:', data?.length ?? 0);

  const trips: Trip[] = data ?? [];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Trips & Programs"
          subtitle="From youth camps to adult clinics — find the perfect Trinity River experience."
        />
        {trips.length === 0 ? (
          <p className="mt-16 text-center text-lg text-stone-600">
            No trips available — please check back soon.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
