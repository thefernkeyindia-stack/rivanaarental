import Hero from '@/components/Hero';
import VillaModel3D from '@/components/VillaModel3D';
import AboutVilla from '@/components/AboutVilla';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import Experience from '@/components/Experience';
import BookingSection from '@/components/BookingSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <VillaModel3D />
      <AboutVilla />
      <Gallery />
      <Amenities />
      <Experience />
      <BookingSection />
      <Testimonials />
      <FAQ />
    </>
  );
}
