import React, { useState } from 'react';
import '../styles/newsevents.css';



function NewsEvents() {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const images =[
    '/Images/IMG 1.jpg',
    '/Images/IMG 2.jpg',
    '/Images/IMG 3.jpg',
    //'/Images/IMG 4.jpg',
    //'/Images/IMG 5.jpg',
    '/Images/IMG 6.jpg',
    //'/Images/IMG 7.jpg',
    //'/Images/IMG 8.jpg',
    '/Images/IMG 9.jpg',
    //'/Images/IMG 10.jpg',
    '/Images/IMG 11.jpg',
    //'/Images/IMG 12.jpg',
    '/Images/IMG 13.jpg',
    '/Images/IMG 14.jpg',
    '/Images/IMG 15.jpg',
    //'/Images/IMG 16.jpg',
    //'/Images/IMG 17.jpg',
    '/Images/IMG 18.jpg',
    //'/Images/IMG 19.jpg',
    '/Images/IMG 20.jpg',
    '/Images/IMG 21.jpg',
    //'/Images/IMG 22.jpg',
  ];

  const toggleEnlarge = (index) => {
    setEnlargedIndex(enlargedIndex === index ? null : index);
  };

  return (
    <div className="news">
      <h2>News & Events</h2>
      <p>
        WE4HIM participated in the first ever International Day of the Boy Child, 
        held at Nyikendo Secondary School on May 6, 2024.
      </p>

      <div className="news-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Event ${index + 1}`}
            className={`news-image ${enlargedIndex === index ? 'enlarged' : ''}`}
            onClick={() => toggleEnlarge(index)}
          />
        ))}
      </div>

      <div className="news-explanation">
        <p>
          So this was the second celebration of the boy child in Migori County ever after 
          the 1st was held on May 6, 2024 at Nyikendo Secondary School in Kakrao Ward, 
          Suna East Sub County. This second one was held at Oruba Boys Secondary School in 
          Oruba Ragana Ward, Suna West Sub County, Migori County.
        </p>
        <p>
          <strong>Theme 2025:</strong> Building Self Esteem: Stand up, Be Heard, Be Seen.
        </p>
        <p>
          The stakeholders involved included the County Government of Migori, National Government, 
          Oruba Boys Secondary School, the surrounding community members, parents, WE4HIM CBO, 
          Kerira CBO, Funguo CBO, Goma College, Tunaweza Empowerment, CMMB, Lwala Community Alliance, 
          Migori County Youth Forum and many others.
        </p>
        <p>
          The reason for choosing the venue was to encourage the students not to give up in their 
          studies and the support they received from the community, parents, and teachers was not to 
          be taken for granted.
        </p>
        <p>
          During the event, there were health talks and clinics conducted by professional health providers 
          and counselors, academic encouragement, songs, dances, poems and skits were performed. During the 
          event, trees were planted to signify the fresh start of planting the seeds of good self esteem.
        </p>
      </div>
    </div>
  );
}

export default NewsEvents; 