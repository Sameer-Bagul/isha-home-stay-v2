import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            We promise the Best Living Experience with secure Environment.
          </h1>
          <p className="hero-description">
            Experience premium living with ISHA Home Stay, where comfort meets safety. 
            Enjoy a vibrant community, modern amenities, and a nurturing environment 
            tailored to meet your lifestyle needs. Join us for a holistic living 
            experience that feels like home.
          </p>
          <Link href="#cta" className="btn btn--full margin-right-sm">
            Register Now !
          </Link>
          <Link href="#Rooms" className="btn btn--outline">
            Learn more &darr;
          </Link>
        </div>
        <div className="hero-img-box">
          <Image
            src="/img/save.png"
            alt="surroundings of Hostel PG and other pics grid image"
            width={600}
            height={400}
            className="hero-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}