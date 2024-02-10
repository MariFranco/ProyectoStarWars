import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/album">Mi Álbum</Link></li>
        <li>Obtener Láminas</li>
      </ul>
    </div>
  );
}

export default Sidebar;
