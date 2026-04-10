import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TripGallery from '@/components/trips/TripGallery';
import ItineraryTimeline from '@/components/trips/ItineraryTimeline';
import { formatDateRange, spotsRemaining } from '@/lib/utils';
import { fallbackTrips, getFallbackTripBySlug } from '@/lib/fallback-data';
import type { TripWithDetails } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getTrip(slug: string): Promise<TripWithDetails | null> {
  try {
    const { getTripBySlug } = await import('@/lib/supabase/queries');
    const trip = await getTripBySlug(slug);
    return trip ?? getFallbackTripBySlug(slug);
  } catch {
    return getFallbackTripBySlug(slug);
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = await getTrip(slug);
  if (!trip) return { title: 'Trip Not Found' };
  return {
    title: trip.title,
    description: trip.short_description,
    openGraph: {
      title: `${trip.title} | T.R.I.K.S.`,
      description: trip.short_description,
      images: [trip.image_url],
    },
  };
}

export async function generateStaticParams() {
  return fallbackTrips.map((trip) => ({ slug: trip.slug }));
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = await getTrip(slug);

  if (!trip) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-stone-900">Trip Not Found</h1>
        <p className="mt-4 text-stone-600">The trip you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/trips" className="mt-8">
          View All Trips
        </Button>
      </div>
    );
  }

  const availableDates = trip.trip_dates?.filter((d) => d.is_available) ?? [];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12">
          <Image
            src={trip.image_url}
            alt={trip.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                {trip.difficulty}
              </span>
              <span className="bg-white/90 text-stone-800 text-sm font-bold px-3 py-1 rounded-full">
                {trip.duration}
              </span>
              {trip.age_range && (
                <span className="bg-sky-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Ages {trip.age_range}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{trip.title}</h1>
            <p className="text-white/80 mt-2 text-lg">{trip.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">About This Trip</h2>
              <p className="text-stone-700 leading-relaxed text-lg">{trip.description}</p>
            </section>

            {/* What's included */}
            {trip.includes.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">What&apos;s Included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trip.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary */}
            {trip.itinerary_days.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Day-by-Day Itinerary</h2>
                <ItineraryTimeline days={trip.itinerary_days} />
              </section>
            )}

            {/* Gallery */}
            {trip.gallery_urls.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Gallery</h2>
                <TripGallery images={trip.gallery_urls} title={trip.title} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Booking card */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 sticky top-24">
              <h3 className="text-xl font-bold text-stone-900 mb-1">{trip.title}</h3>
              {trip.price ? (
                <p className="text-3xl font-bold text-emerald-700 mb-4">
                  ${(trip.price / 100).toFixed(0)}
                  <span className="text-base font-normal text-stone-500"> / person</span>
                </p>
              ) : (
                <p className="text-lg text-stone-500 mb-4">Pricing coming soon</p>
              )}

              {/* Available dates */}
              {availableDates.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stone-700 mb-3">Available Dates</h4>
                  <div className="space-y-2">
                    {availableDates.map((date) => (
                      <div
                        key={date.id}
                        className="flex items-center justify-between bg-white rounded-lg p-3 border border-stone-200"
                      >
                        <span className="text-sm font-medium text-stone-800">
                          {formatDateRange(date.start_date, date.end_date)}
                        </span>
                        <span className="text-xs text-stone-500">
                          {spotsRemaining(date.max_participants, date.current_participants)} spots
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button href={`/book/${trip.id}`} variant="primary" size="lg" className="w-full">
                Book This Trip
              </Button>

              <p className="text-xs text-stone-500 mt-3 text-center">
                No payment required yet — reserve your spot today.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
