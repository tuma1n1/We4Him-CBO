import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Empowering Boys and Men in Migori County</h1>
        <p>
          Promoting inclusion, health, education, environment, leadership, sustainable development 
          and economic development programs.
        </p>

        <Link to="/get-involved" className="cta-button">
          Get Involved
        </Link>
      </header>

      <section className="sustainability">
        <h2>Our Sustainability Measures</h2>
        <p>
          WE4HIM CBO is dedicated to creating lasting impact by equipping boys and men with essential skills, 
          resources and opportunities for self-reliance and community transformation. Our sustainability strategy 
          focuses on capacity building, strategic partnerships and economic empowerment through vocational training, 
          mentorship and research.
        </p>
        <p>
          By 2028, we aim to empower boys and men across various fields via workshops, on-the-job training, 
          mentorship opportunities and job placements. This initiative will foster their economic independence, 
          enable informed decisions regarding their health and wellness, adaptation to environment and climate changes, 
          responsible citizenship and develop into effective leaders, ultimately contributing to a resilient and 
          thriving society.
        </p>
      </section>
    </div>
  );
}

export default Home;