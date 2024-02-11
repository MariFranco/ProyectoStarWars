//import React from 'react';
import './TablaLaminas.css';

interface TablaLaminasProps {
    numCeldas: number; 
  }

function TablaLaminas({ numCeldas }: TablaLaminasProps) {
  // Generar un array con el número de celdas
  const celdas = Array.from({ length: numCeldas }, (_, index) => index + 1);

  return (
    <table className='tabla-laminas'>
      <tbody>
        <tr>
          {/* Mapear el array de celdas para crear las celdas de la tabla */}
          {celdas.map((celda) => (
            <td key={celda}>Celda {celda}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default TablaLaminas;
