import { Helmet } from "react-helmet";
import '../styles/programmes.css';

function Programmes() {
  return (
    <>
      <Helmet>
        <title>Programmes | WE4HIM CBO</title>
        <link
          rel="canonical"
          href="https://we4him-cbo.vercel.app/programmes"
        />
        <meta
          name="description"
          content="Programmes rolled out by We4Him CBO to help empower Bous and Men in Migori County."
        />
      </Helmet>

      <div className="programmes">
        <h2>Our Programs</h2>

        <p className="programmes-intro">
          WE4HIM CBO implements community-based programmes that empower boys and men
          to become healthy, responsible, productive and active contributors to their
          families and communities. Our work focuses on five key areas that support
          personal growth, community development and sustainable change.
        </p>

        <section>
          <h3>1. Health and Wellness Promotion</h3>
          <p>
            We promote healthy lifestyles and encourage boys and men to take an
            active role in improving their physical, mental and social wellbeing.
            Through awareness campaigns, community discussions and mentorship, we
            address health challenges that affect individuals, families and
            communities.
          </p>
          <ul>
            <li>Triple Threat (HIV, STIs and Teenage Pregnancy Prevention)</li>
            <li>Mental Health Awareness and Support</li>
            <li>Teen Fathers Engagement</li>
            <li>Alcohol and Drug Abuse Prevention</li>
            <li>Primary Health Care Awareness</li>
          </ul>
        </section>

        <section>
          <h3>2. Education, Training and Research</h3>
          <p>
            We support access to education, skills development and lifelong learning
            opportunities that help boys and men achieve their full potential.
            Through training, mentorship and research, we promote personal growth,
            employability and innovation.
          </p>
          <ul>
            <li>Vocational Training Opportunities</li>
            <li>Skills and Talent Development</li>
            <li>School Commodity and Educational Support</li>
            <li>Research, Learning and Knowledge Sharing</li>
          </ul>
        </section>

        <section>
          <h3>3. Leadership and Governance</h3>
          <p>
            We nurture responsible leadership and encourage active citizenship among
            boys and men. Through civic education and mentorship, we promote values
            such as integrity, accountability, participation and community service.
          </p>
          <ul>
            <li>Leadership Development and Mentorship</li>
            <li>Civic Education</li>
            <li>Transparency and Accountability Awareness</li>
            <li>Community Participation and Responsible Citizenship</li>
          </ul>
        </section>

        <section>
          <h3>4. Environmental Conservation and Climate Change Adaptation</h3>
          <p>
            We empower communities to protect the environment and respond to the
            challenges of climate change through education, awareness campaigns and
            practical conservation initiatives.
          </p>
          <ul>
            <li>Tree Planting and Environmental Restoration</li>
            <li>Climate Change Awareness</li>
            <li>Environmental Conservation Education</li>
            <li>Community Capacity Building for Climate Action</li>
          </ul>
        </section>

        <section>
          <h3>5. Economic Strengthening</h3>
          <p>
            We promote economic empowerment by supporting innovation, entrepreneurship,
            skills development and access to opportunities that improve livelihoods
            and create pathways to sustainable income generation.
          </p>
          <ul>
            <li>Entrepreneurship and Innovation</li>
            <li>Technology and Digital Skills</li>
            <li>Financial Literacy Awareness</li>
            <li>Economic Empowerment Initiatives</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Programmes;