import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../styles/home.css';

function Home() {
  return (
    <>
      <Helmet>
        <title>WE4HIM CBO | Home</title>
        <link
          rel="canonical"
          href="https://we4him-cbo.vercel.app/"
        />
        <meta
          name="description"
          content="Empowering boys and men in Migori County through sustainable development programs."
        />
      </Helmet>
      
      <div className="home">
        <header className="hero">

          {/* Background Image */}
          <img
            src="/Images/IMG 77.png"
            alt="WE4HIM Community Programmes"
            className="hero-bg"
            fetchPriority="high"
          />

          {/* Overlay */}
          <div className="hero-overlay"></div>

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="hero-title-box">
              <h1>
                EMPOWERING
                <br />
                BOYS & MEN
              </h1>

              <h2>IN MIGORI COUNTY</h2>
            </div>

            

          </div>

          {/* RIGHT SIDE TAGS */}
          <div className="hero-tags">

            <Link
              to="/news#world-aids-day-2024"
              className="tag tag-1"
            >
              Health & Wellness
            </Link>

            <Link
              to="/news#substance-use-prevention-2026"
              className="tag tag-2"
            >
              Education
            </Link>

            <Link
              to="/news#boy-child-2025"
              className="tag tag-3"
            >
              Leadership
            </Link>

            <Link
              to="/news#world-environment-day-2025"
              className="tag tag-4"
            >
              Environment
            </Link>

            <Link
              to="/news#international-mens-day-2025"
              className="tag tag-5"
            >
              Economic Empowerment
            </Link>

          </div>

        </header>

        <section className="sustainability">
          <h2>Building Stronger Boys. Stronger Communities.</h2>

          <p>
            WE4HIM CBO empowers boys and men in Migori County to become healthy,
            responsible, productive and active contributors to their communities.
            Through mentorship, education and community engagement, we create
            opportunities that help individuals reach their full potential.
          </p>

          <div className="impact-areas">

            <h3>Our Focus Areas</h3>

            <ul>
              <li>✓ Health and Wellness Education</li>
              <li>✓ Leadership Development</li>
              <li>✓ Skills Training and Economic Empowerment</li>
              <li>✓ Environmental Conservation and Climate Action</li>
              <li>✓ Mentorship and Positive Role Modelling</li>
              <li>✓ Community Participation and Responsible Citizenship</li>
            </ul>

          </div>

          <div className="vision-2028">

            <h3>Our Vision for 2028</h3>

            <p>
              By 2028, WE4HIM aims to equip hundreds of boys and men across
              Migori County with practical skills, mentorship opportunities,
              leadership experience and pathways to employment and
              entrepreneurship.
            </p>

            <ul>
              <li>✓ Increased economic independence</li>
              <li>✓ Better health and wellbeing outcomes</li>
              <li>✓ Stronger environmental stewardship</li>
              <li>✓ Responsible and engaged community leaders</li>
              <li>✓ Safer and more resilient communities</li>
            </ul>

          </div>

          <div className="home-cta-message">
            <p>
              Together, we can create a future where every boy and man has the
              opportunity to thrive and positively impact society.
            </p>

            <div className="cta-buttons">
              <Link to="/get-involved" className="cta-button">
                Get Involved
              </Link>

              <Link to="/about#support-we4him" className="cta-button support-button">
                Support Us
              </Link>
            </div>
          </div>
        </section>

        {/* PHOTO COLLAGE SECTION */}
        <section className="photo-collage">

          <div className="section-header">
            <h2>Moments of Impact</h2>

            <p>
              A glimpse into the programmes, community engagements,
              mentorship sessions, environmental activities and
              advocacy initiatives carried out by WE4HIM CBO.
            </p>
          </div>

          <div className="collage-wrapper">
            <div className="collage-grid">

              <img src="/Images/IMG 70.png" alt="International Day of the Boy Child" />
              <img src="/Images/IMG 48.png" alt="Substance Use Prevention Week" />
              <img src="/Images/IMG 41.png" alt="World Environment Day" />
              <img src="/Images/IMG 30.png" alt="International Day of the Boy Child 2025" />
              <img src="/Images/IMG 23.png" alt="World AIDS Day" />
              <img src="/Images/IMG 2.jpg" alt="International Day of the Boy Child 2024" />
              <img src="/Images/IMG 65.png" alt="Community Activity" />
              <img src="/Images/IMG 35.png" alt="Mentorship Programme" />
              <img src="/Images/IMG 61.png" alt="Community Programme" />
              <img src="/Images/IMG 76.png" alt="Community Engagement" />

            </div>
          </div>

          <div className="collage-footer">
            <Link to="/news" className="cta-button">
              View More Events
            </Link>
          </div>

        </section>
      </div>
    </>
  );
}

export default Home;