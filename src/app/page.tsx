import HeroVideo from '@/components/home/HeroVideo';
import Mission from '@/components/home/Mission';
import FeaturedTrips from '@/components/home/FeaturedTrips';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedTrips />
      <Mission />
      <WhyChooseUs />
    </>
  );
}
