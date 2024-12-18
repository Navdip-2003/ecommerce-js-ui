import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
  return (

      <div style={styles.container}>
        {/* Left Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.title}>Admin Dashboard</h2>
          <nav style={styles.nav}>
            <Link to="/admin/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/admin/users" style={styles.link}>User Management</Link>
            <Link to="/admin/retailers" style={styles.link}>Retailer Management</Link>
            <Link to="/admin/products" style={styles.link}>Product Management</Link>
            <Link to="/admin/contact" style={styles.link}>Contacts</Link>
            <Link to="/admin/settings" style={styles.link}>Settings</Link>
          </nav>
        </div>

        <div style={styles.content}>
            <Outlet />
        </div>
      </div>
  );
};

// Inline CSS
const styles = {
  container: {
    display: 'flex',
    height: '85vh',
    flexDirection: 'row',
  },
  sidebar: {
    width: '270px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '25px',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 0',
    borderBottom: '1px solid #444',
    width: '100%',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f4f4f4',
    overflowY: 'auto',
    flex: 1,
  },
};

export default AdminSidebar;
