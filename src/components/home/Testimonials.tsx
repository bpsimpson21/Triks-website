import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote: 'An incredible experience for my kids. They came home confident, excited, and already asking when they can go back!',
    name: 'Parent — Youth Camp 2025',
  },
  {
    quote: 'Gabriella is an amazing instructor. Patient, knowledgeable, and genuinely passionate about sharing the river with others.',
    name: 'Adult Clinic Participant',
  },
  {
    quote: 'The Trinity River is breathtaking, and T.R.I.K.S. made it accessible for a total beginner like me. Highly recommend!',
    name: 'First-time Paddler',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Paddlers Say"
          subtitle="Reviews from our community of adventurers."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-stone-50 rounded-2xl p-8 relative"
            >
              <svg
                className="w-10 h-10 text-emerald-200 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-stone-700 leading-relaxed mb-6 pt-8 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-stone-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
