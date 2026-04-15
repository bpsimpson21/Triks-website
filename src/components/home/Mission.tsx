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
              To foster relationships with the river, through high-quality, safe, and educational
              whitewater kayak instruction. To nurture confidence and positive mental health for
              our paddlers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-sky-700 uppercase tracking-wide mb-3">
              Vision
            </h3>
            <p className="text-stone-700 leading-relaxed text-lg">
              T.R.I.K.S. cultivates river guardians and aids communities in harnessing the power
              of connection with the river.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
