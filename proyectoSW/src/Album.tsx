{/*PAGINA DE MI ALBUM*/}
import SidebarAlbum from './components/SidebarAlbum'; {/*SIDEBAR MENÚ ALBUM*/}
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Peliculas from './Peliculas';
import Personajes from './Personajes';
import Naves from './Naves';

function Album() {
  const [showPeliculas, setShowPeliculas] = useState(true);
  const [showPersonajes, setShowPersonajes] = useState(false);
  const [showNaves, setShowNaves] = useState(false);

  return (
    <>
    <div>
      <h2>Mi Álbum</h2>
        <div className="app">
          <SidebarAlbum setShowPeliculas={setShowPeliculas} setShowPersonajes={setShowPersonajes} setShowNaves={setShowNaves}/>
          <div className="content">
            <Routes>
              {showPeliculas && <Route path="/peliculas" element={<Peliculas />} />}
              {showPersonajes && <Route path="/personajes" element={<Personajes />} />}
              {showNaves && <Route path="/naves" element={<Naves />} />}
            </Routes>
          </div>
        </div>
      
    </div>
    </>
  );
}

export default Album; // Exporta el componente Album
