'use client';

import Image from 'next/image';

const roomImages = [
  { src: '/img/roomImages/1.png', alt: 'room for the Isha Home stay secure living' },
  { src: '/img/roomImages/2.png', alt: 'room for the Isha Home stay secure living' },
  { src: '/img/roomImages/3.png', alt: 'room for the Isha Home stay secure living' },
  { src: '/img/roomImages/4.png', alt: 'room for the Isha Home stay secure living' },
  { src: '/img/roomImages/5.png', alt: 'room for the Isha Home stay secure living' },
  { src: '/img/roomImages/6.png', alt: 'room for the Isha Home stay secure living' },
];

export function Rooms() {
  return (
    <section className="section-room" id="Rooms">
      <div className="container">
        <span className="subheading">Our Rooms</span>
        <h2 className="heading-secondary">
          Discover the Comfort and Luxury.
        </h2>
      </div>
      <div className="room-img-gallery">
        {roomImages.map((image, index) => (
          <div key={index} className="room-img">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </section>
  );
}