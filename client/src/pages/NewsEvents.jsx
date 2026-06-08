import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import '../styles/newsevents.css';



function NewsEvents() {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

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
      } else {
        window.scrollTo(0, 0);
      }
    }, []);
    
  const toggleEnlarge = (id) => {
    setEnlargedIndex(enlargedIndex === id ? null : id);
  };

  const events = [
    {
      id: "dimba-futa-kijijini-2026",
      date: "31 May 2026",
      title: "Dimba FUTA Kijijini Pilot Project",
      description: `
        The Dimba FUTA Kijijini Pilot Project uses football as an entry point to create
        safe spaces for boys within communities while teaching life skills and positive values.

        During a visit to Migori Primary School Grounds, boys from different villages
        gathered to participate in football activities and discussions.

        Team Captain Hillary encouraged fellow participants to practice discipline at
        home, in school and on the football pitch.

        Migori Youth Football Club Chairman Mr. Aziz emphasized the importance of
        responsibility, respect for parents and balancing sports with education.

        The key theme was DISCIPLINE.

        112 Boys. 8 Villages. 1 Field.
        This is why safe spaces matter.
      `,
      images: [
        '/Images/IMG 73.png',
        '/Images/IMG 74.png',
        '/Images/IMG 75.png',
        '/Images/IMG 76.png',
        '/Images/IMG 77.png',
        '/Images/IMG 78.png',
      ]
    },
    {
      id: "boy-child-2026",
      date: "16 May 2026",
      title: "International Day of the Boy Child 2026",
      description: `
        On Saturday May 16th, we marked The International Day of the Boy Child at 
        Good Samaritan Children's Home in Suna Central Ward Nyamware Village, Migori County.

        The theme was: "THE MASK WE WEAR: HELPING LITTLE BOYS FEEL SAFE TO TALK."

        Activities included storytelling, singing, games, Lego block building, 
        discussions with caregivers, and child engagement activities.

        WE4HIM CBO and Funguo CBO appreciate the Good Samaritan Children's Home 
        management for allowing the celebration with the children.
      `,
      images: [
        '/Images/IMG 57.png',
        '/Images/IMG 58.png',
        '/Images/IMG 59.png',
        '/Images/IMG 60.png',
        '/Images/IMG 64.png',
        '/Images/IMG 65.png',
        '/Images/IMG 66.png',
        '/Images/IMG 67.png',
        '/Images/IMG 68.png',
      ]
    },

    {
      id: "substance-use-prevention-2026",
      date: "14 Feb 2026",
      title: "National Substance Use Prevention Week",
      description: `
        Activities were held at Marindi Village, KMTC Migori Campus and Migori Boys High School.

        Discussions focused on causes, effects and reduction of substance abuse.
        WE4HIM CBO appreciates NACADA Kenya and all institutions involved.

        Migori Boys proposed formation of a Substance Use Prevention Club.
      `,
      images: [
        '/Images/IMG 47.png',
        '/Images/IMG 48.png',
        '/Images/IMG 50.png',
        '/Images/IMG 51.png',
        '/Images/IMG 52.png',
        '/Images/IMG 55.png',
        '/Images/IMG 56.png',
      ]
    },

    {
      id: "international-mens-day-2025",
      date: "19 Nov 2025",
      title: "International Men's Day 2025",
      description: `
        International Men’s Day was commemorated on 19 Nov 2025 through a public engagement and civic education focusing on men’s mental health and Gender-Based Violence (GBV) awareness in Migori County.

        The event created a platform for open discussions on the importance of mental wellness among boys and men, responsible masculinity, peaceful coexistence and the collective role of communities in ending Gender-Based Violence.

        Participants were encouraged to speak up about mental health challenges, support one another and actively contribute towards building safer and healthier communities for everyone.

        The engagement also emphasized community responsibility in preventing violence, promoting respect, accountability and positive behaviour among men and boys.

        The event supported the ongoing advocacy campaign:
        #MigoriAct2EndGBV
      `,
      images: [
        '/Images/IMG 69.png',
        '/Images/IMG 70.png',
        '/Images/IMG 71.png',
        '/Images/IMG 72.png',
      ]
    },

    {
      id: "world-environment-day-2025",
      date: "5 Jun 2025",
      title: "World Environment Day 2025",
      description: `
        World Environment Day was marked at Siruti Technical Institute in Awendo Sub County.

        More than 2000 trees were planted through collaboration between government,
        CSOs, students, parents and community members.
      `,
      images: [
        '/Images/IMG 41.png',
        '/Images/IMG 43.png',
        '/Images/IMG 44.png',
        '/Images/IMG 45.png',
      ]
    },

    {
      id: "boy-child-2025",
      date: "16 May 2025",
      title: "International Day of the Boy Child 2025",
      description: `
        WE4HIM CBO encouraged boys to Adopt a Legacy Tree at Oruba Boys Secondary School
        in Suna West Sub County.

        The organization emphasized supporting boys daily and recognizing their
        aspirations, challenges and dreams.
      `,
      images: [
        '/Images/IMG 28.png',
        '/Images/IMG 30.png',
        '/Images/IMG 31.png',
        '/Images/IMG 32.png',
        '/Images/IMG 33.png',
        '/Images/IMG 35.png',
        '/Images/IMG 37.png',
        '/Images/IMG 39.png',
        '/Images/IMG 40.png',
      ]
    },

    {
      id: "world-aids-day-2024",
      date: "1 Dec 2024",
      title: "World AIDS Day 2024",
      description: `
        World AIDS Day was marked in Rongo Sub County, Migori County.

        Boys and men were encouraged to be on the forefront in reducing new HIV infections
        to help communities thrive.
      `,
      images: [
        '/Images/IMG 23.png',
        '/Images/IMG 24.png',
        '/Images/IMG 25.png',
        '/Images/IMG 26.png',
        '/Images/IMG 27.png',
      ]
    },

    {
      id: "boy-child-2024",
      date: "16 May 2024",
      title: "International Day of the Boy Child 2024",
      description: `
        WE4HIM participated in the first International Day of the Boy Child,
        held at Nyikendo Secondary School in Kakrao Ward, Suna East Sub County.

        Activities included health talks, academic encouragement, performances,
        counseling sessions and tree planting.
      `,
      images: [
        '/Images/IMG 1.jpg',
        '/Images/IMG 2.jpg',
        '/Images/IMG 3.jpg',
        '/Images/IMG 6.jpg',
        '/Images/IMG 9.jpg',
        '/Images/IMG 11.jpg',
        '/Images/IMG 13.jpg',
        '/Images/IMG 14.jpg',
        '/Images/IMG 15.jpg',
        '/Images/IMG 18.jpg',
        '/Images/IMG 20.jpg',
        '/Images/IMG 21.jpg',
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>News and Events | WE4HIM CBO</title>
        <link
          rel="canonical"
          href="https://we4him-cbo.vercel.app/news"
        />
        <meta
          name="description"
          content="News and events organized by WE4HIM CBO to empower boys and men in Migori County."
        />
      </Helmet>

      <div className="news">
        <h1>News & Events</h1>
        {/* Upcoming Programmes */}
        <div className="programme-section">

          <h2>Upcoming Programmes</h2>

          <div className="programme-card ongoing-empty">
            <p>Upcoming programmes and Events will be displayed here.</p>
          </div>

        </div>

        {/* Ongoing Programmes */}
        <div className="programme-section">

          <h2>Ongoing Programmes</h2>

          <div className="programme-card ongoing-empty">
            <p>Updates on ongoing programmes and Events will appear here.</p>
          </div>

        </div>

        {/* Past Events */}
        <div className="programe-section-lone">
          <h2>Past Programmes & Events</h2>
        </div>
        
        {events.map((event, eventIndex) => (
          <div 
            className="event-section" 
            id={event.id}
            key={eventIndex}>
            <div className="event-header">
              <h3>{event.title}</h3>
              <span>{event.date}</span>
            </div>

            <div className="news-gallery">
              {event.images.map((src, imageIndex) => {
                const uniqueId = `${eventIndex}-${imageIndex}`;

                return (
                  <img
                    key={uniqueId}
                    loading="lazy"
                    src={src}
                    alt={event.title}
                    className={`news-image ${
                      enlargedIndex === uniqueId ? 'enlarged' : ''
                    }`}
                    onClick={() => toggleEnlarge(uniqueId)}
                  />
                );
              })}
            </div>

            <div className="news-explanation">
              <p>{event.description}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default NewsEvents;