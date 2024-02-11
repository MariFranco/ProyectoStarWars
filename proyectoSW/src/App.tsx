import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Album from './Album';
import './App.css';
import ObtenerLaminas from './ObtenerLaminas';

function App() {
  const [showAlbum, setShowAlbum] = useState(false);
  const [showObtenerLaminas, setShowObtenerLaminas] = useState(false);

  return (
    <>
      <Router>
        <div className="app">
          <Sidebar setShowAlbum={setShowAlbum} setShowObtenerLaminas={setShowObtenerLaminas} />
          <div className="content">
            <Routes>
              {showAlbum && <Route path="/album" element={<Album />} />}
              {showObtenerLaminas && <Route path="/obtener-laminas" element={<ObtenerLaminas />} />}
              {/* Agrega más rutas*/}
            </Routes>
          </div>
        </div>
      </Router>
      {/* si no he hecho click en los enlaces album y obtenerlaminas se muestra lo siguiente*/}
      {!showAlbum && !showObtenerLaminas && (
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
      {/*botón return album
      {showAlbum && showObtenerLaminas &&(
        <button onClick={() => setShowAlbum(false)}>Regresar</button>
        
      )}*/}
    </>
  );
}

export default App;
