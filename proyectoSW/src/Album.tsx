{/*PAGINA DE MI ALBUM*/}
import SidebarAlbum from './components/SidebarAlbum'; {/*SIDEBAR MENÚ ALBUM*/}
import { useState } from 'react';


export interface IAlbumNav {
  showPeliculas: boolean
  showPersonajes: boolean
  showNaves: boolean
}

function Album() {
  // const [showPeliculas, setShowPeliculas] = useState(true);
  // const [showPersonajes, setShowPersonajes] = useState(false);
  // const [showNaves, setShowNaves] = useState(false);
  const [albumNav, setalbumNav] = useState<IAlbumNav>({
    showPeliculas: true,
    showPersonajes: false,
    showNaves: false,
  });


  return (
    <>
    <div>
      <h2>Mi Álbum</h2>
        <div className="app">
          <SidebarAlbum setalbumNav={setalbumNav}/>
          {/* <div className="content">
            <Routes>
              {albumNav.showPeliculas && }
              {albumNav.showPersonajes && }
              {albumNav.showNaves && }
            </Routes>
          </div> */}
        </div>
      
    </div>
    </>
  );
  
  function handleClick(url: string){
    setalbumNav((prevState: IAlbumNav) => ({
        ...prevState
    }))
  }
}

export default Album; // Exporta el componente Album
