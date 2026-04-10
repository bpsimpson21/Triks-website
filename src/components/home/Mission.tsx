import SectionHeading from '@/components/ui/SectionHeading';

export default function Mission() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Mission & Vision" />
        <div className="mt-10 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wide mb-3">
              Mission
            </h3>
            <p className="text-stone-700 leading-relaxed text-lg">
              To provide high-quality, safe, and educational whitewater kayaking instruction for
              beginner to intermediate paddlers, fostering confidence, river stewardship, and
              community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-sky-700 uppercase tracking-wide mb-3">
              Vision
            </h3>
            <p className="text-stone-700 leading-relaxed text-lg">
              T.R.I.K.S. connects local communities from Redding to Eureka with the precious
              resource that is the Trinity River. We aim to nurture future stewards of the river and
              the outdoors through on- and off-water experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
