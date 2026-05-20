import { Helmet } from "react-helmet";
import '../styles/programmes.css';

function Programmes() {
  return (
    <>
      <Helmet>
        <title>Programmes | WE4HIM CBO</title>
        <meta
          name="description"
          content="Programmes rolled out by We4Him CBO to help empower Bous and Men in Migori County."
        />
      </Helmet>

      <div className="programmes">
        <h2>Our Programs</h2>

        <section>
          <h3>1. Health and Wellness Promotion</h3>
          <p>
            This Programme aims for male involvement in achieving the targets of SDG 3 and 
            contributing to its targets in Primary Health Care by creating awareness and 
            educating boys and men on their roles and responsibilities in the society.
            Focus Areas:
          </p>
          <ul>
            <li>Triple Threat</li>
            <li>Mental Health</li>
            <li>Teen Fathers</li>
            <li>Alcohol and Drug Abuse</li>
            <li>Primary Health Care</li>
            <li>Teen Fathers</li>
          </ul>
        </section>

        <section>
          <h3>2. Education, Training and Research</h3>
          <p>
            Advocates for male involvement in achieving SDG 4. Focus areas:
          </p>
          <ul>
            <li>Vocational Training</li>
            <li>Skill and Talent Support development</li>
            <li>School Commodity Support</li>
            <li>Research and Learning</li>
          </ul>
        </section>

        <section>
          <h3>3. Governance and Leadership</h3>
          <p>
            This programme will advocate for male involvement in achieving SDG 16.
          </p>
          <ul>
            <li>Leadership Promotion and Development</li>
            <li>Civic Education, Transparency and Accountability</li>
          </ul>
        </section>

        <section>
          <h3>4. Environmental Conservation and Climate Change Adaptation</h3>
          <p>
            This programme aims to achieve the objectives of SDG 13.
          </p>
          <ul>
            <li>
              Environmental Conservation and Climate Change Adaptation Education, 
              Awareness, and Capacity Building
            </li>
          </ul>
        </section>

        <section>
          <h3>5. Economic Strengthening</h3>
          <p>
            This programme aims to achieve the objectives and targets of SDG 8.
          </p>
          <ul>
            <li>Innovation and Technological Advancement</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Programmes;