import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} WE4HIM CBO. All rights reserved.</p>
      <p>
        Email: 
        <a href="mailto:we4himcbo@gmail.com">
          we4himcbo@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://wa.me/254786115629"
          target="_blank"
          rel="noopener noreferrer"
        >
          +254 786 115 629
        </a>
      </p>

      <p>
        <a
          href="https://wa.me/254723142167"
          target="_blank"
          rel="noopener noreferrer"
        >
          +254 723 142 167
        </a>
      </p>
      <p>Migori County, Kenya</p>
    </footer>
  );
};

export default Footer;