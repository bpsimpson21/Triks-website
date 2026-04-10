import type { ItineraryDay } from '@/types';

interface ItineraryTimelineProps {
  days: ItineraryDay[];
}

export default function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  const sorted = [...days].sort((a, b) => a.day_number - b.day_number);

  return (
    <div className="space-y-6">
      {sorted.map((day, index) => (
        <div key={day.id} className="relative pl-8 pb-6 last:pb-0">
          {/* Timeline line */}
          {index < sorted.length - 1 && (
            <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-emerald-200" />
          )}
          {/* Timeline dot */}
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">
            {day.day_number % 1 === 0 ? day.day_number : day.day_number.toFixed(1)}
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
              <h3 className="text-lg font-bold text-stone-900">
                Day {day.day_number % 1 === 0 ? day.day_number : day.day_number.toFixed(1)}: {day.title}
              </h3>
              {day.river_section && (
                <span className="text-sm text-sky-700 bg-sky-50 px-3 py-0.5 rounded-full font-medium w-fit">
                  {day.river_section}
                  {day.miles ? ` (${day.miles} mi)` : ''}
                </span>
              )}
            </div>
            <p className="text-stone-600 mb-4">{day.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {day.activities_am && (
                <div>
                  <span className="font-semibold text-stone-700">Morning: </span>
                  <span className="text-stone-600">{day.activities_am}</span>
                </div>
              )}
              {day.activities_pm && (
                <div>
                  <span className="font-semibold text-stone-700">Afternoon: </span>
                  <span className="text-stone-600">{day.activities_pm}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
