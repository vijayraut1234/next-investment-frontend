// import React, { useState } from "react";
// import './Contact.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", issue: "", message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Complaint submitted:", formData);
//     alert("Your request has been submitted. We will contact you shortly.");
//     setFormData({ name: "", email: "", phone: "", issue: "", message: "" });
//   };

//   return (
//     <div className="contact-container">
//       <h2>Report an Issue</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Your Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />

//         <select
//           name="issue"
//           value={formData.issue}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Issue Type</option>
//           <option value="investment">Investment Problem</option>
//           <option value="deposit">Deposit Not Reflected</option>
//           <option value="withdrawal">Withdrawal Issue</option>
//           <option value="others">Other Problem</option>
//         </select>

//         <textarea
//           name="message"
//           placeholder="Explain your issue here..."
//           value={formData.message}
//           onChange={handleChange}
//           rows="5"
//           required
//         ></textarea>

//         <button type="submit">Submit Request</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;




import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email address" required />

        <div className="form-row">
          <select>
            <option>Age</option>
            <option>18-25</option>
            <option>26-35</option>
            <option>36+</option>
          </select>
          <div className="mobile-input">
            <span className="flag">🇮🇳 +91</span>
            <input type="text" placeholder="Mobile No." required />
            <span className="whatsapp-icon">🟢</span>
          </div>
        </div>

        <select>
          <option>Nature of enquiry</option>
          <option>General</option>
          <option>Support</option>
          <option>Investment</option>
        </select>

        <textarea placeholder="Your message here" rows={4} required></textarea>

        <div className="captcha-row">
          <label>
            <input type="checkbox" /> I am an existing bond investor
          </label>
        </div>

        <div className="captcha-box">
          <img src="https://dummyimage.com/120x40/ccc/000&text=XTUE" alt="captcha" />
          <button className="refresh-btn">
            <MdRefresh size={20} />
          </button>
        </div>

        <input type="text" placeholder="Enter Captcha" required />

        <button className="submit-btn">
          Send Request <FaArrowRight />
        </button>
      </div>

      <div className="contact-info">
        <h2>Get in touch</h2>

        <div className="info-box">
          <p><FaPhoneAlt /> 080-6919 9888</p>
          <p><FaEnvelope /> contactus@indiabonds.com</p>
        </div>

        <div className="info-box">
  <h4>Social Media</h4>
  <div className="social-icons">
    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    <a href="https://www.instagram.com/im.vijay_raut2905" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
  </div>
</div>


        <div className="info-box">
          <h4>Address</h4>
          <p>
            605, 6th Floor, Windsor,<br />
            off CST Road, Kalina,<br />
            Santacruz - (East),<br />
            Mumbai - 400 098
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
