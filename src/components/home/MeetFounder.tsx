import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function MeetFounder() {
  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/founder.jpg"
              alt="Gabriella Emerick — founder of T.R.I.K.S."
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-emerald-300 font-semibold uppercase tracking-wide mb-2">
              Meet the Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gabriella Emerick</h2>
            <div className="space-y-4 text-emerald-100 leading-relaxed text-lg">
              <p>
                With over 13 years of experience as a trip leader, guide, and outdoor educator,
                Gabriella has led paddlers on rivers across the American West and Chile&apos;s
                Patagonia region.
              </p>
              <p>
                A local classroom teacher in Willow Creek, CA, Gabriella is deeply committed to her
                community and the Trinity River. She founded T.R.I.K.S. to share the joy of
                whitewater kayaking with paddlers of all ages and skill levels.
              </p>
              <p>
                Her approach combines professional instruction with genuine warmth, creating
                experiences that build confidence on the water and a lasting connection to nature.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
