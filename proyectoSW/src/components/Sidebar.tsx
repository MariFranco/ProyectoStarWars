import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  setShowAlbum: (value: boolean) => void; 
  setShowObtenerLaminas: (value: boolean) => void;
}

function Sidebar({ setShowAlbum, setShowObtenerLaminas}: SidebarProps) {
  const regresoInicio = () => {
    setShowAlbum(false);
    setShowObtenerLaminas(false);
  };

  return (
    <div className="sidebar">
      <nav>
        <div className='links'>
          <Link to="/" onClick={regresoInicio}> Inicio </Link>
          <Link to="/album" onClick={() => setShowAlbum(true)}> Mi Álbum </Link>
          <Link to="/obtener-laminas" onClick={() => setShowObtenerLaminas(true)}> Obtener Láminas </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
