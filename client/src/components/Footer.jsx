import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} WE4HIM CBO. All rights reserved.</p>
      <p>Contact: we4himcbo@gmail.com | +254 786 115 629</p>
      <p>Migori County, Kenya</p>
    </footer>
  );
};

export default Footer;