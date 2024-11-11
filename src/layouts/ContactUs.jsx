import React from 'react';
import { Outlet } from 'react-router-dom';
import Line from './line';


const ContactUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      {/* Header */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '25px' }}>CONTACT US</h1>

      {/* Google Map Embed */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?width=2000&amp;height=500&amp;hl=en&amp;q=Ahmedabad&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="2000"
          height="500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>


      <Line />

      {/* Drop Us a Line Form */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', padding: '20px' }}>
        {/* Form */}
        <div style={{ width: '1000px' }}>
          <h3 style={{ fontSize: '30px' }}>Get In Touch</h3>
          <p style={{ fontSize: '19px', color: '#666' }}>
            Want to get in touch? We'd love to hear from you. Here's how you can reach us. 
          </p>
          <input type="text" placeholder="Name" style={inputStyle1} />
          <input type="text" placeholder="Phone Number" style={inputStyle2} />
          <input type="email" placeholder="Email" style={inputStyle1} />
          <input type="text" placeholder="Subject" style={inputStyle2} />
          <textarea placeholder="Message" style={{ ...inputStyle1, height: '100px', width: '1000px' }}></textarea>
          <button style={{
            padding: '10px 20px',
            border: '1px solid #000',
            background: '#000',
            color: '#fff',
            cursor: 'pointer',
            width: '100%',
            marginTop: '10px',
            borderRadius: '4px'
          }}>SEND MESSAGE</button>
        </div>

        {/* Opening Hours & Contact Info */}
        <div className="border rounded-lg shadow-lg" style={{ padding: '60px 40px 50px 40px',  }}>
          <strong>Opening Hours : </strong>
          <p>Mon - Sat : 7:00AM - 11:00PM<br />Sunday : 11:00AM - 5:00PM</p>
          <br />
          <p>
            <strong>Address:</strong> D-64 Greenwood, Sola Bridge, Ahmedabad
          </p>
          <br />
          <p>
            <strong>Phone:</strong> +91 9023150639
          </p>
          <br />
          <p>
            <strong>Email:</strong> shivaycloths@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

const inputStyle1 = {
  width: '500px',
  padding: '10px',
  margin: '10px 10px 10px 0',
  border: '1px solid #ddd',
  borderRadius: '4px'
};
const inputStyle2 = {
  width: '480px',
  padding: '10px',
  margin: '10px 0 10px 10px',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

export default ContactUs;

