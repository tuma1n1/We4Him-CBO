import { Helmet } from "react-helmet";
import '../styles/contactus.css';

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | WE4HIM CBO</title>
        <meta
          name="description"
          content="Contact Us, help our misson to empower boys and men."
        />
      </Helmet>

      <div className="contact">
        <h2>Contact Us</h2>

        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="https://wa.me/254786115629"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            +254 786 115 629
          </a>

          {" | "}

          <a
            href="https://wa.me/254723142167"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            +254 723 142 167
          </a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:we4himcbo@gmail.com"
            className="contact-link"
          >
            we4himcbo@gmail.com
          </a>
        </p>

        <p>
          <strong>X:</strong>{" "}
          <a
            href="https://x.com/We4himcbo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            @We4himcbo
          </a>
        </p>

        <p>
          <strong>Facebook:</strong>{" "}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            @Cbo Weforhim
          </a>
        </p>
      </div>

      <div className="contact-person-card">
        <img
          src="/Images/Emily.png"
          alt="Emily Moraa Moturi"
          className="contact-person-photo"
        />

        <h3>Emilly Moraa Moturi</h3>

        <span>Director and Team Leader</span>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:moraa009@gmail.com"
            className="contact-link"
          >
            moraa009@gmail.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="https://wa.me/254723142167"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            +254 723 142 167
          </a>
        </p>
      </div>
    </>
  );
}

export default ContactUs;