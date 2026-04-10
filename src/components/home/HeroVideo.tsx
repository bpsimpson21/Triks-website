import Button from '@/components/ui/Button';

export default function HeroVideo() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          T.R.I.K.S.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
          Trinity River International Kayak School
        </p>
        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto">
          Professional whitewater instruction on Northern California&apos;s stunning Trinity River
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/trips" variant="primary" size="lg">
            View Trips
          </Button>
          <Button href="/trips" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-900">
            Book Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
