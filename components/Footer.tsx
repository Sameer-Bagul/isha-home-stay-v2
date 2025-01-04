import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link href="/" className="footer-logo">
            <Image
              src="/img/black-logo-t.png"
              alt="ISHA Home stay logo"
              width={200}
              height={100}
              className="logo"
            />
          </Link>
          <p className="address">
            70, Arunkumar Vidya Naga, Sakri Rd, Vidhya Vihar Colony, Dhule, 
            Mahindale, Maharashtra 424001
          </p>
        </div>

        <div className="info-col">
          <p className="footer-heading">Information</p>
          <ul className="footer-list">
            <li><Link href="#" className="footer-link">About Us</Link></li>
            <li><Link href="#Rooms" className="footer-link">Rooms</Link></li>
            <li><Link href="#meals" className="footer-link">Facilities</Link></li>
            <li><Link href="#pricing" className="footer-link">Pricing</Link></li>
            <li><Link href="#cta" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="map-col">
          <p className="footer-heading" id="location">Our Location</p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.646905123456!2d74.7748913153168!3d20.90410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9d9f9a3b9e0b!2sIsha%20Girls%20PG!5e0!3m2!1sen!2sin!4v1633078471234!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}