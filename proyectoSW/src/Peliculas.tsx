//import React from 'react';
import { useEffect } from 'react';
import TablaLaminas from './components/TablaLaminas';

function Peliculas() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://swapi.dev/api/films/');
            const responseJson  = await response.json();
            console.log(responseJson)
            

        }
        fetchData();
    }, [])
    
    return (
        <div>
          <h2>Películas</h2>
          <TablaLaminas numCeldas={10} />
        </div>
    );
}

export default Peliculas;