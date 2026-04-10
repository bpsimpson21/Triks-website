'use client';

import { cn } from '@/lib/utils';
import { formatDateRange, spotsRemaining } from '@/lib/utils';
import type { TripDate } from '@/types';

interface DateSelectorProps {
  dates: TripDate[];
  selectedDateId: string | null;
  onSelect: (dateId: string) => void;
}

export default function DateSelector({ dates, selectedDateId, onSelect }: DateSelectorProps) {
  const available = dates.filter((d) => d.is_available);

  if (available.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-stone-600">No dates available at this time. Please check back soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-stone-900 mb-4">Select a Date</h3>
      {available.map((date) => {
        const spots = spotsRemaining(date.max_participants, date.current_participants);
        const isSelected = selectedDateId === date.id;

        return (
          <button
            key={date.id}
            type="button"
            onClick={() => onSelect(date.id)}
            className={cn(
              'w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left',
              isSelected
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-stone-200 hover:border-stone-300 bg-white'
            )}
          >
            <div>
              <p className="font-semibold text-stone-900">
                {formatDateRange(date.start_date, date.end_date)}
              </p>
              <p className="text-sm text-stone-500 mt-1">{spots} spots remaining</p>
            </div>
            <div
              className={cn(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                isSelected ? 'border-emerald-600' : 'border-stone-300'
              )}
            >
              {isSelected && <div className="w-3 h-3 rounded-full bg-emerald-600" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
