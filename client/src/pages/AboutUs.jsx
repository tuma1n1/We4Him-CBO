import { useEffect } from "react";
import { Helmet } from "react-helmet";
import '../styles/aboutus.css';

function AboutUs() {
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 200);
      }
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Us | WE4HIM CBO</title>
        <link
          rel="canonical"
          href="https://we4him-cbo.vercel.app/about"
        />
        <meta
          name="description"
          content="Learn about WE4HIM CBO, our mission, vision, history, and commitment to empowering boys and men."
        />
      </Helmet>
      
      <div className="about">
        <h2>About WE4HIM</h2>
        <section>
          <h2>Why WE4HIM CBO?</h2>
          <p>
            WE4HIM CBO was founded from a growing realization that many boys and men face challenges that 
            often receive little attention despite their significant impact on families, communities and 
            society as a whole. While important efforts have been made to address gender inequalities affecting 
            girls and women, there remains a need to ensure that boys and men are also supported, guided and 
            empowered to reach their full potential.
          </p>
          <p>
            The idea behind WE4HIM was first conceived in 2012 by the founder, driven by a desire to create 
            opportunities for positive growth, mentorship and community engagement among boys and men. Over time, 
            personal experiences and community observations reinforced the urgent need for an organization dedicated 
            to addressing the social, economic, environmental and developmental challenges affecting this 
            often-overlooked population.
          </p>
          <p>
            The 2015 Status of the Boy Child Report by the National Gender and Equality Commission highlighted concerns 
            about the marginalization of boys within broader gender equality discussions. These findings further 
            strengthened the vision behind WE4HIM and inspired its establishment as a platform for advocacy, mentorship 
            and empowerment.
          </p>
          <p>
            Today, WE4HIM CBO works to ensure that boys and men in Migori County are not left behind in development efforts. 
            Through education, mentorship, leadership development, health promotion and community engagement, we are helping 
            build responsible, productive and empowered individuals who can positively contribute to their families, 
            communities and the future of our society.
          </p>
        </section>

        <section>
          <h2>Vision</h2>
          <p>
            A Migori County where empowered boys and men lead equitable, thriving Communities.
          </p>
        </section>

        <section>
          <h2>Mission</h2>
          <p>
            To equip boys and men in Migori County with skills and opportunities to drive social, political, environmental, and economic transformation.
          </p>
        </section>

        <section>
          <h2>Core Values</h2>
          <ul>
            <li>Transparency</li>
            <li>Accountability</li>
            <li>Teamwork</li>
            <li>Time Management</li>
          </ul>
        </section>

        <section>
          <h2>Journey and History</h2>
          <p>
            WE4HIM Community Based Organization was officially registered on 6 March 2024 with the 
            Department of Social Development in Suna East Sub County, Migori County. The organization 
            operates from the Kakrao Ward Administrator’s Building in Paw Nyuka, Kakrao Ward, where 
            it serves as a hub for community engagement, programme coordination and partnership development.
          </p>
          <p>
            Founded to address the social, economic, environmental and leadership challenges affecting boys 
            and men, WE4HIM was established with a commitment to creating opportunities for empowerment, 
            mentorship and positive community participation. The organization recognizes that when boys and 
            men are equipped with knowledge, skills and support, they are better positioned to contribute 
            meaningfully to their families, communities and society.
          </p>
          <p>
            WE4HIM is guided by a Board of Management comprising a Chairperson, Treasurer and Secretary, 
            who provide strategic leadership and oversight. For programme implementation, specialized project 
            management teams are formed to ensure effective planning, accountability and delivery of activities 
            that respond to community needs.
          </p>
          <p>
            Since its establishment, WE4HIM has adopted a community-centred approach that promotes positive values, 
            responsible citizenship and behavioural change. Through collaboration with local leaders, institutions, 
            government agencies and community members, the organization continues to strengthen its impact and expand 
            opportunities for boys and men across Migori County.
          </p>
          <p>
            At the heart of our work is a simple belief: empowered boys and men play a vital role in building stronger 
            families, more resilient communities and a more inclusive future for all.
          </p>
        </section>

        <section>
          <h2>Our Working Model</h2>

          <div className="working-model-card">

            <p className="working-model-intro">
              To ensure effective planning, implementation and accountability,
              WE4HIM CBO follows a structured weekly working model that balances
              programme coordination, community engagement and reporting.
            </p>

            <div className="working-day">
              <h3>Monday</h3>
              <p>
                Office planning day dedicated to weekly coordination,
                programme preparation, stakeholder communication and
                activity scheduling.
              </p>
            </div>

            <div className="working-day">
              <h3>Tuesday – Thursday</h3>
              <p>
                Field implementation days focused on community engagement,
                mentorship activities, awareness campaigns, school visits,
                environmental initiatives and programme delivery.
              </p>
            </div>

            <div className="working-day">
              <h3>Friday</h3>
              <p>
                Reporting, monitoring and verification day dedicated to
                documenting activities, evaluating progress, reviewing
                outcomes and planning improvements for future interventions.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2>Recent Achievements</h2>

          <div className="achievements-grid">

            <div className="achievement-card">
              <h3>National Substance Use Prevention Week (2026)</h3>

              <p>
                Conducted awareness activities in Marindi Village, KMTC Migori Campus
                and Migori Boys High School, reaching young people with information on
                the causes, effects and prevention of substance abuse.
              </p>

              <p>
                The engagements encouraged community-led solutions, including a proposal
                by students at Migori Boys High School to establish a Substance Use
                Prevention Club.
              </p>
            </div>

            <div className="achievement-card">
              <h3>World Environment Day (2025)</h3>

              <p>
                Partnered with government agencies, civil society organizations,
                students, parents and community members to commemorate World Environment
                Day at Siruti Technical Institute in Awendo Sub County.
              </p>

              <p>
                The initiative resulted in the planting of more than 2,000 trees,
                contributing to environmental conservation and climate action efforts
                within Migori County.
              </p>
            </div>

            <div className="achievement-card">
              <h3>Dimba FUTA Kijijini Pilot Project (2026)</h3>

              <p>
                Launched an innovative sports-for-development initiative that uses
                football as a platform to create safe spaces for boys while promoting
                discipline, responsibility, teamwork and other life skills.
              </p>

              <p>
                The programme brought together 112 boys from 8 villages, demonstrating
                the power of sport as a tool for mentorship, positive behaviour change
                and community engagement.
              </p>
            </div>

          </div>
        </section>

        <section className="funding">
          <h3>Sources of Funds</h3>

          <p>
            WE4HIM CBO is currently supported through contributions from members, well-wishers, 
            volunteers and individuals who share our commitment to empowering boys and men in 
            Migori County. We also pursue partnerships, grants, community fundraising initiatives 
            and other sustainable opportunities that help us expand our programmes and increase our 
            impact.
          </p>

          <p>
            Every contribution helps support mentorship programmes, life skills development, environmental 
            conservation activities, health awareness initiatives, sports-for-development projects and 
            other community-based interventions that create positive change for boys, young men and 
            their communities.
          </p>

          <p>
            To promote transparency, accountability and responsible stewardship of resources, all financial 
            contributions are received through the organization's official payment channels and are managed 
            in accordance with our governance and financial management procedures.
          </p>

          <div 
            className="donation-card"
            id="support-we4him"
          >
            <h3>Support WE4HIM CBO</h3>

            <p>
              Your contribution helps us implement programmes that promote mentorship,
              leadership, education, health awareness, environmental conservation and
              economic empowerment among boys and men in Migori County.
            </p>

            <p>
              <strong>Bank:</strong> KCB Bank – Migori Branch
            </p>

            <div className="donation-method">
              <h4>M-PESA Paybill</h4>

              <p><strong>Paybill Number:</strong> 522533</p>
              <p><strong>Account Number:</strong> 8041838</p>
              <p><strong>Business Name:</strong> WE4HIM</p>
            </div>

            <div className="donation-method">
              <h4>Airtel Money Paybill</h4>

              <p><strong>Paybill Number:</strong> 522533</p>
              <p><strong>Account Number:</strong> 8041838</p>
              <p><strong>Business Name:</strong> WE4HIM</p>
            </div>

            <p className="donation-note">
              Thank you for supporting our mission. All contributions received through
              the payment channels above are directed towards programme implementation
              and organizational activities that benefit the communities we serve.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;