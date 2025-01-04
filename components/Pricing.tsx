import Link from 'next/link';
import { Icon } from './Icon';

const features = [
  'Washing Machine',
  'Refrigerator',
  'Electricity 24/7',
  'Kitchen Available for Breakfast!',
  'Secure Living With CCTV'
];

export function Pricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          The Most Affordable Prices you have Ever Seen.
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Monthly</p>
            <p className="plan-price"><span>₹</span>3,500</p>
            <p className="plan-text">per month. That's just ₹117 per day!</p>
          </header>
          <ul className="list">
            {features.map((feature, index) => (
              <li key={index} className="list-item">
                <Icon className="list-icon" name="checkmark-outline" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="plan-sing-up">
            <Link href="#cta" className="btn btn--full">Register Now</Link>
          </div>
        </div>

        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Annual</p>
            <p className="plan-price"><span>₹</span>41,000</p>
            <p className="plan-text">per year. That's just ₹3416 per Month!</p>
          </header>
          <ul className="list">
            {features.map((feature, index) => (
              <li key={index} className="list-item">
                <Icon className="list-icon" name="checkmark-outline" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="plan-sing-up">
            <Link href="#cta" className="btn btn--full">Register Now !</Link>
          </div>
        </div>
      </div>
    </section>
  );
}