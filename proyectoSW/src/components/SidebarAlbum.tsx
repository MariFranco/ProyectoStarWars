{/*BARRA MENÚ DEL ALBUM*/}

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './SidebarAlbum.css';

interface SidebarAlbumProps {
    setShowPeliculas: (value: boolean) => void; 
    setShowPersonajes: (value: boolean) => void;
    setShowNaves: (value: boolean) => void;
}

function SidebarAlbum({ setShowPeliculas, setShowPersonajes, setShowNaves}: SidebarAlbumProps) {
    setShowPeliculas(false);
    setShowPersonajes(false);
    setShowNaves(false);
  
    return (
      <div className="sidebar-album">
        <Sidebar>
            <Menu>
              <div className='link-album'>
                <MenuItem><Link to="/peliculas" onClick={() => setShowPeliculas(true)}> Películas </Link></MenuItem>
                <MenuItem><Link to="/personajes" onClick={() => setShowPersonajes(true)}> Personajes </Link></MenuItem>
                <MenuItem><Link to="/naves" onClick={() => setShowNaves(true)}> Naves </Link></MenuItem>
              </div>
            </Menu>
        </Sidebar>
      </div>
    );
  }
  
  export default SidebarAlbum;