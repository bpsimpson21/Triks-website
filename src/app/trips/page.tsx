import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TripCard from '@/components/trips/TripCard';
import type { Trip } from '@/types';

export const metadata: Metadata = {
  title: 'Trips & Programs',
  description:
    'Browse youth camps, day clinics, and adult paddle programs on the Trinity River. All skill levels welcome.',
};

// Fallback data for when Supabase is not connected
const fallbackTrips: Trip[] = [
  {
    id: '1',
    title: 'Youth Camp',
    slug: 'youth-camp',
    duration: '4.5 days',
    difficulty: 'Beginner (Class I–II+)',
    age_range: '10–16',
    price: null,
    description: '',
    short_description:
      'Camp and paddle for four and a half days on the beautiful Trinity River! Build whitewater skills on Class I–II+ rapids while camping under the stars.',
    includes: [],
    location: 'Hayden Flat Campground, Trinity River',
    image_url: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800&h=600&fit=crop',
    gallery_urls: [],
    video_url: null,
    is_featured: true,
    created_at: '',
  },
  {
    id: '2',
    title: 'Youth Clinic (Day Program)',
    slug: 'youth-clinic',
    duration: '4 days',
    difficulty: 'Beginner (Class I–II+)',
    age_range: '10–16',
    price: null,
    description: '',
    short_description:
      'A 4-day clinic for local youth. Same on-water curriculum as Youth Camp, without camping — perfect for families in Humboldt and Trinity counties.',
    includes: [],
    location: 'Hayden Flat Campground area, Trinity River',
    image_url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
    gallery_urls: [],
    video_url: null,
    is_featured: true,
    created_at: '',
  },
  {
    id: '3',
    title: 'Adult Paddle Clinic',
    slug: 'adult-paddle-clinic',
    duration: '3 days',
    difficulty: 'Beginner (Class I–II+)',
    age_range: null,
    price: null,
    description: '',
    short_description:
      'Three days of paddling on the Trinity River for adults. Build whitewater skills while finding stillness through intimate connections with nature.',
    includes: [],
    location: 'Hayden Flat Campground, Trinity River',
    image_url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&h=600&fit=crop',
    gallery_urls: [],
    video_url: null,
    is_featured: true,
    created_at: '',
  },
];

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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}
