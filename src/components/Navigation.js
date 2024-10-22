import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/user-dashboard">User Dashboard</Link>
      </li>
      <li>
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
