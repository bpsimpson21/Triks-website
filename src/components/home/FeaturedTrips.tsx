import SectionHeading from '@/components/ui/SectionHeading';
import TripCard from '@/components/trips/TripCard';
import { fallbackTrips } from '@/lib/fallback-data';
import type { Trip } from '@/types';

interface FeaturedTripsProps {
  trips?: Trip[];
}

export default function FeaturedTrips({ trips }: FeaturedTripsProps) {
  const displayTrips = trips && trips.length > 0 ? trips : fallbackTrips;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Programs"
          subtitle="Choose from youth camps, day clinics, and adult programs — all on the beautiful Trinity River."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
