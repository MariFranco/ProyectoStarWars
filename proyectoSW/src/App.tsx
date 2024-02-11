import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Album from './Album';
import './App.css';

function App() {
  const [showAlbum, setShowAlbum] = useState(false);

  return (
    <>
      <Router>
        <div className="app">
          <Sidebar setShowAlbum={setShowAlbum} />
          <div className="content">
            <Routes>
              {showAlbum && <Route path="/album" element={<Album />} />}
              {/* Agrega más rutas según sea necesario */}
            </Routes>
          </div>
        </div>
      </Router>
      {!showAlbum && (
        <>
          <div>
            {/* Aqui pongo el logo de sw*/}
            <img src="/images/StarWarsLogo.svg" className="logo" alt="SW logo" />
          </div>
          <h1>Universo Star Wars</h1>
          <div className="card">
            <h2>BIENVENIDO</h2>
            <p>Aqui podrás coleccionar todas tus laminitas de Star Wars</p>
            <p>¡NO TE LO PIERDAS!</p>
          </div>
          <p className="read-the-docs">
            Haz click en "Mi Álbum" para conocer todas la laminitas que has recolectado
          </p>
          <p className='read-the-docs'>
            Haz click en "Obtener Láminas" para coleccionar nuevas
          </p>
        </>
      )}
      {showAlbum && (
        <button onClick={() => setShowAlbum(false)}>Regresar</button>
      )}
    </>
  );
}

export default App;
