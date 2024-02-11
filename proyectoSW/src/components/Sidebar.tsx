import { Link } from 'react-router-dom';

interface SidebarProps {
  setShowAlbum: (value: boolean) => void; // Define el tipo de setShowAlbum como una función que recibe un booleano y no devuelve nada
}

function Sidebar({ setShowAlbum }: SidebarProps) {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/album" onClick={() => setShowAlbum(true)}>Mi Álbum</Link></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
