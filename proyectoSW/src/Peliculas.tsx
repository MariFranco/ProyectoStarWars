//import React from 'react';
import TablaLaminas from './components/TablaLaminas';

function Peliculas() {
    return (
        <div>
          <h2>Películas</h2>
          <TablaLaminas numCeldas={10} />
        </div>
    );
}

export default Peliculas;