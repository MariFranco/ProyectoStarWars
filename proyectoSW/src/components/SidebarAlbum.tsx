{/*BARRA MENÚ DEL ALBUM*/}

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './SidebarAlbum.css';
import { IAlbumNav } from '../Album';

interface SidebarAlbumProps {
  setalbumNav:React.Dispatch<React.SetStateAction<IAlbumNav>>
}

function SidebarAlbum({ setalbumNav }: SidebarAlbumProps) {

    return (
      <div className="sidebar-album">
        <Sidebar>
            <Menu>
              <div className='link-album'>
                <MenuItem><Link to="/peliculas" onClick={() => handleClick('showPeliculas')}> Películas </Link></MenuItem>
                <MenuItem><Link to="/personajes" onClick={() => handleClick('showPersonajes')}> Personajes </Link></MenuItem>
                <MenuItem><Link to="/naves" onClick={() => handleClick('showNaves')}> Naves </Link></MenuItem>
              </div>
            </Menu>
        </Sidebar>
      </div>
    );

    function handleClick(url: keyof IAlbumNav){
      setalbumNav((prevState: IAlbumNav) => ({
          ...prevState,
          [url]: true
      }))
    }
  }
  
  export default SidebarAlbum;