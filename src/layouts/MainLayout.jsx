import React from 'react';
import { Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from './Header';
import Footer from './Footer';
import RetailerHeader from './RetailerSide/RetailerHeader';
import RetailerSidebar from './RetailerSide/RetailerSidebar';
import RetailerFooter from './RetailerSide/RetailerFooter';

function MainLayout() { 
  // Get the 'type' from cookies
  const type = Cookies.get('userType');

  if (type === 'U') {
    return (    
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  } else if (type === 'R') {
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
