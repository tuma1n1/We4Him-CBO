import { useState } from 'react';
import { Helmet } from "react-helmet";
import '../styles/getinvolved.css';

function Collaborators() {
  return (
    <div className="collaborators-container">
      <h1>Our Collaborators</h1>
      <ul>
        <li>Government of Kenya</li>
        <li>Migori County Government</li>
        <li>Boy Child Empowerment Kenya (BEKO) – Trans Nzoia County</li>
      </ul>
    </div>
  );
}

function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    option: 'Volunteer',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formspree.io/f/xykvkrlr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Thank you for reaching out! We'll contact you soon.");

        setFormData({
          name: '',
          email: '',
          option: 'Volunteer',
          message: ''
        });

      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us | WE4HIM CBO</title>
        <link
          rel="canonical"
          href="https://we4him-cbo.vercel.app/get-involved"
        />
        <meta
          name="description"
          content="Get involved with We4Him CBO. Help us in our mission to Empower Bous and Men in Migori County by joining, volunteering or partering with us."
        />
      </Helmet>

      <div className="involved">
        <h2>Get Involved</h2>
        <p>Support our mission by volunteering, partnering, or donating to WE4HIM.</p>
        
        {/* Form Section */}
        <div className="form-container">
          <h3>Join Us</h3>
          <form onSubmit={handleSubmit} className="involved-form">
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </label>

            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </label>

            <label>
              I want to:
              <select 
                name="option" 
                value={formData.option} 
                onChange={handleChange}
              >
                <option value="Volunteer">Volunteer</option>
                <option value="Donate">Donate</option>
                <option value="Partner">Partner</option>
              </select>
            </label>

            <label>
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4"
              />
            </label>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <Collaborators />
      </div>
    </>
  );
}

export default GetInvolved;