{/*SIDEBAR MENÚ PRINCIPAL*/}
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {

}

export function Sidebar(props: SidebarProps) {

  return (
    <div className="sidebar">
      <nav>
        <div className='links'>
          <Link to="/" > Inicio </Link>
          <Link to="/album"> Mi Álbum </Link>
          <Link to="/obtener-laminas"> Obtener Láminas</Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
