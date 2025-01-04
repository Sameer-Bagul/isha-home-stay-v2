export function Testimonials() {
  const testimonials = [
    {
      text: "Staying at ISHA Home stay has been an incredible experience. The facilities are top-notch and the community is very welcoming.",
      name: "Ananya Patel"
    },
    {
      text: "The location is perfect and the staff are extremely helpful. I feel safe and at home here.",
      name: "Riya Sharma"
    },
    {
      text: "ISHA Home stay offers the best amenities and a very comfortable living environment. It's the perfect place for students and professionals alike.",
      name: "Meera Joshi"
    },
    {
      text: "I love the sense of community here. Everyone is so friendly and supportive, it really feels like a second home.",
      name: "Priya Singh"
    }
  ];

  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you stay, you won't want to leave</h2>
        
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="testimonial">
              <blockquote className="testimonial-text">
                {testimonial.text}
              </blockquote>
              <p className="testimonial-name">&mdash; {testimonial.name}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}