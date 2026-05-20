import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import '../styles/newsevents.css';



function NewsEvents() {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const toggleEnlarge = (id) => {
    setEnlargedIndex(enlargedIndex === id ? null : id);
  };

  const events = [
    {
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
        '/Images/IMG 61.png',
        '/Images/IMG 62.png',
        '/Images/IMG 63.png',
        '/Images/IMG 64.png',
        '/Images/IMG 65.png',
        '/Images/IMG 66.png',
        '/Images/IMG 67.png',
        '/Images/IMG 68.png',
      ]
    },

    {
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
        '/Images/IMG 49.png',
        '/Images/IMG 50.png',
        '/Images/IMG 51.png',
        '/Images/IMG 52.png',
        '/Images/IMG 53.png',
        '/Images/IMG 54.png',
        '/Images/IMG 55.png',
        '/Images/IMG 56.png',
      ]
    },

    {
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
        '/Images/IMG 46.png',
      ]
    },

    {
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
        '/Images/IMG 29.png',
        '/Images/IMG 30.png',
        '/Images/IMG 31.png',
        '/Images/IMG 32.png',
        '/Images/IMG 33.png',
        '/Images/IMG 34.png',
        '/Images/IMG 35.png',
        '/Images/IMG 36.png',
        '/Images/IMG 37.png',
        '/Images/IMG 38.png',
        '/Images/IMG 39.png',
        '/Images/IMG 40.png',
      ]
    },

    {
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

        <meta
          name="description"
          content="News and events organized by WE4HIM CBO to empower boys and men in Migori County."
        />
      </Helmet>

      <div className="news">
        <h2>News & Events</h2>

        {events.map((event, eventIndex) => (
          <div className="event-section" key={eventIndex}>

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