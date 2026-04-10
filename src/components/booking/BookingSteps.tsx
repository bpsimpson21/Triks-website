'use client';

import { cn } from '@/lib/utils';

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

export default function BookingSteps({ currentStep, steps }: BookingStepsProps) {
  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center flex-1 last:flex-initial">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors',
                index < currentStep
                  ? 'bg-emerald-600 text-white'
                  : index === currentStep
                  ? 'bg-emerald-700 text-white ring-4 ring-emerald-100'
                  : 'bg-stone-200 text-stone-500'
              )}
            >
              {index < currentStep ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span
              className={cn(
                'hidden sm:block text-sm font-medium',
                index <= currentStep ? 'text-stone-900' : 'text-stone-400'
              )}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                'flex-1 h-0.5 mx-3',
                index < currentStep ? 'bg-emerald-600' : 'bg-stone-200'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
