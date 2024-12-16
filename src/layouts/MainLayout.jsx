import React from 'react';
import { Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from './Header';
import Footer from './Footer';
import RetailerHeader from './RetailerSide/RetailerHeader';
import RetailerSidebar from './RetailerSide/RetailerSidebar';
import RetailerFooter from './RetailerSide/RetailerFooter';

function MainLayout() {
  // Retrieve and parse 'userData' from cookies
  let userData = null;
  try {
    const userDataCookie = Cookies.get('userData'); // Fetch from cookie
    if (userDataCookie) {
      userData = JSON.parse(userDataCookie); // Parse JSON string
    }
  } catch (error) {
    console.error("Failed to parse userData from cookie:", error);
  }
  const userType = userData?.type; // Safely access user type

  if (userType === 'U') {
    return (    
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  } else if (userType === 'R') {
    return ( 
      <div>
        <RetailerHeader />
        <RetailerSidebar />
        <RetailerFooter />
      </div>
    );
  } else {
    // Default layout if type is not set
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
