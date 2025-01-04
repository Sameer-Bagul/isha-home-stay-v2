'use client';

export function ContactForm() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Experience The Best Living Now!</h2>
            <p className="cta-text">
              We promise the best Living with family like atmosphere, with Lots of love.
            </p>

            <form 
              className="cta-form" 
              name="sign-up" 
              action="https://api.web3forms.com/submit" 
              method="POST"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="e0924bc1-1367-40c8-8f8c-6b78603cafb2" 
              />
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }} 
              />

              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">Where did you hear from us?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form" type="submit">
                Sign up now
              </button>
            </form>
          </div>
          <div 
            className="cta-img-box" 
            role="img" 
            aria-label="Woman enjoying food"
          />
        </div>
      </div>
    </section>
  );
}