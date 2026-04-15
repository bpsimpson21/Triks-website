import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about T.R.I.K.S., founder Gabriella Emerick, and our mission to connect Northern California communities with the Trinity River.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <Image
          src="/images/about-banner.jpg"
          alt="Kayaker paddling whitewater on the Trinity River"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About T.R.I.K.S.</h1>
          <p className="text-white/80 mt-2 text-lg max-w-2xl">
            Trinity River International Kayak School — connecting communities with the river since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Story" centered={false} />
          <div className="mt-8 space-y-5 text-stone-700 leading-relaxed text-lg">
            <p>
              T.R.I.K.S. was born from a simple belief: everyone deserves access to the
              transformative power of rivers. The Trinity River, flowing through the heart of
              Northern California, is one of the most beautiful and accessible whitewater
              destinations in the West — yet many local communities have never experienced it from
              the water.
            </p>
            <p>
              We set out to change that. Through youth camps, day clinics, and adult programs,
              T.R.I.K.S. brings professional whitewater instruction to paddlers of all ages and
              skill levels. Our programs are designed not just to teach kayaking, but to build
              confidence, foster community, and cultivate a deep respect for the natural world.
            </p>
            <p>
              Based in Willow Creek, CA, we operate on the Trinity River between Hayden Flat and
              Cedar Flat — a stretch of Class I–II+ water surrounded by towering forests, clear
              swimming holes, and National Forest Service campgrounds that feel a world away from
              everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder.jpg"
                alt="Gabriella Emerick"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-emerald-700 font-semibold uppercase tracking-wide mb-2">
                Founder & Lead Instructor
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Gabriella Emerick
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed text-lg">
                <p>
                  Gabriella brings over 13 years of experience as a trip leader, guide, and outdoor
                  educator. She has led paddlers on rivers across the American West — from
                  California&apos;s Sierra Nevada to the desert canyons of Utah — and in Chile&apos;s
                  Patagonia region.
                </p>
                <p>
                  A local classroom teacher in Willow Creek, Gabriella is deeply rooted in the
                  communities along the Trinity River. She understands firsthand the power of outdoor
                  education to build confidence, foster connection, and inspire stewardship in young
                  people and adults alike.
                </p>
                <p>
                  Her teaching style is warm, patient, and safety-focused. Whether you&apos;re 10 or
                  60, a first-timer or returning paddler, Gabriella meets you where you are and helps
                  you grow on the water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Mission & Vision" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wide mb-3">
                Mission
              </h3>
              <p className="text-stone-700 leading-relaxed">
                To foster relationships with the river, through high-quality, safe, and educational
                whitewater kayak instruction. To nurture confidence and positive mental health for
                our paddlers.
              </p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-sky-700 uppercase tracking-wide mb-3">
                Vision
              </h3>
              <p className="text-stone-700 leading-relaxed">
                T.R.I.K.S. cultivates river guardians and aids communities in harnessing the power
                of connection with the river.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get on the Water?</h2>
          <p className="text-emerald-200 mb-8 text-lg">
            Browse our programs and find the perfect Trinity River experience.
          </p>
          <Button href="/trips" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-900">
            View Trips
          </Button>
        </div>
      </section>
    </div>
  );
}
