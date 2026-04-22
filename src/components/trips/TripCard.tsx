import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import type { Trip } from '@/types';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Card>
      <Link href={`/trips/${trip.slug}`} className="block group">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={trip.image_url}
            alt={trip.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {trip.age_range && (
            <span className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Ages {trip.age_range}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
            {trip.title}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-sm text-stone-500">
            <span>{trip.duration}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{trip.difficulty}</span>
          </div>
          <p className="mt-3 text-stone-600 leading-relaxed line-clamp-3">
            {trip.short_description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            {trip.price ? (
              <span className="text-lg font-bold text-emerald-700">
                ${(trip.price / 100).toFixed(0)}
              </span>
            ) : (
              <span className="text-sm font-medium text-emerald-700">Contact for quote</span>
            )}
            <span className="text-emerald-700 font-semibold text-sm group-hover:underline">
              View Details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
