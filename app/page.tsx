import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Rooms } from '@/components/Rooms';
import { Facilities } from '@/components/Facilities';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Facilities />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}