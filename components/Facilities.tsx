'use client';

import Image from 'next/image';
import { Icon } from './Icon';

const facilities = [
  '24 x 7 Electricity',
  'Many near By Mess',
  'Kitchen available for Breakfast',
  '24 X 7 CCTV',
  'Washing Machine Available',
  'Refrigerator Available',
  'Terrace for amazing Views',
  '24 X 7 Hot Water Available',
  'Air Coolers are Available in Summers',
];

export function Facilities() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Facilities</span>
        <h2 className="heading-secondary">
          We Provide The best Facilities for Everyone.
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="welcome-img">
          <Image
            src="/img/welcome1.jpg"
            alt="cozy images for heart warm welcoming"
            width={400}
            height={300}
            layout="responsive"
          />
        </div>

        <div className="welcome-img">
          <Image
            src="/img/welcome2.jpg"
            alt="cozy images for heart warm welcoming"
            width={400}
            height={300}
            layout="responsive"
          />
        </div>

        <div className="diets">
          <h3 className="heading-tertiary">Feels Like a Home</h3>
          <ul className="list">
            {facilities.map((facility, index) => (
              <li key={index} className="list-item">
                <Icon className="list-icon" name="checkmark-outline" />
                <span>{facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}