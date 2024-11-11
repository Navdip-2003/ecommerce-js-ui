import React from 'react';
import { Outlet } from 'react-router-dom';

function PrivacyPolicy() {
return (
    <div style={{ padding: '20px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', justifySelf: 'center' }}>PRIVACY POLICY</h1>
    
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        At Shivay Cloths, One of our main priorities is the privacy of our customers. This Privacy Policy outlines the sorts of information that we gather, store, and how we utilize it.
    </p>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        If you have additional questions or require more information about our Privacy Policy, please contact us at <a href="mailto:online.sale@nevaindia.com" style={{ color: '#007bff', textDecoration: 'underline' }}>shivaycloths@gmail.com</a>.
    </p>
    
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Consent</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        By using our website, you consent to and agree to the terms of our Privacy Policy.
    </p>
    
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Information we collect</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        The personal information you are requested to provide and the reasons for doing so will be made apparent to you at the time we ask for it.
    </p>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        We may obtain additional information about you if you contact us directly, such as your name, email address, phone number, message content, and any other information.
    </p>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        When you register for an Account, we may ask for your contact information, including your name, company name, address, email address, and telephone number.
    </p>
    
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>How we use your information</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        We use the information we collect in various ways, including to:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px' }}>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through our partners, for customer service, updates, marketing, and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
    </ul>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Log Files</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
    Shivay Cloths Online Store follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information.
    </p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Advertising Partners Privacy Policies</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        Third-party ad servers or networks use technologies like cookies, JavaScript, or Web Beacons in their advertisements. Shivay Cloths Online Store has no access to or control over third-party cookies.
    </p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>GDPR Data Protection Rights</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        We will make sure you are fully aware of all your data protection rights. Every user is entitled to:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px' }}>
        <li>The right to access</li>
        <li>The right to rectification</li>
        <li>The right to erasure</li>
        <li>The right to restrict processing</li>
        <li>The right to object to processing</li>
        <li>The right to data portability</li>
    </ul>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Compliance with the Indian Personal Data Protection Act, 2019</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        We comply with the PDPA, 2019 to ensure that your data remains secure. If you have any queries, please contact us at <a href="mailto:online.sale@nevaindia.com" style={{ color: '#007bff', textDecoration: 'underline' }}>shivaycloths@gmail.com</a>.
    </p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Children's Information</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        We do not knowingly collect any Personal Identifiable Information from children under 13. If you believe your child provided such information on our site, please notify us so we can remove it.
    </p>
    </div>
);
}

export default PrivacyPolicy;
