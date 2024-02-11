function Album() {
  return (
    <div>
      <h2>Mi Álbum</h2>
      <table>
        {/* Aquí puedes agregar las filas y columnas de tu tabla */}
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            {/* Agregar más columnas según sea necesario */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            {/* Agregar más datos según sea necesario */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Album; // Exporta el componente Album
