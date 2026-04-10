import HeroVideo from '@/components/home/HeroVideo';
import Mission from '@/components/home/Mission';
import FeaturedTrips from '@/components/home/FeaturedTrips';
import MeetFounder from '@/components/home/MeetFounder';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedTrips />
      <Mission />
      <MeetFounder />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
