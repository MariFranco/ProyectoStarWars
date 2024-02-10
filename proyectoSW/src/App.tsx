import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';import Sidebar from './components/Sidebar';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Link to="/Album">Ir a Nueva Página</Link>
          <Outlet />

          </div>
        </div>
      </Router>
            <div>
              {/* Aqui pongo el logo de sw*/}
              <img src="/images/StarWarsLogo.svg" className="logo" alt="SW logo" />
            </div>
            <h1>Universo Star Wars</h1>
            <div className="card">
              <h2>
                BIENVENIDO 
              </h2>
              <p>Aqui podrás coleccionar todas tus laminitas de Star Wars
              </p>
              <p>¡NO TE LO PIERDAS!</p>
            </div>
            <p className="read-the-docs">
              Haz click en "Mi Álbum" para conocer todas la laminitas que has recolectado
            </p>
            <p className='read-the-docs'>
              Haz click en "Obtener Láminas" para coleccionar nuevas
            </p>
      
    </>
  )
}

export default App
