export const Home = () => {

    return (
        <>
        <div>
          {/* Aqui pongo el logo de sw*/}
          <img src="/images/StarWarsLogo.svg" className="logo" alt="SW logo" />
        </div>
        <div className='tituloIni'><h1>Universo Star Wars</h1></div>
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
    )
}