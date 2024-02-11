import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import { Home, Layout } from './containers';
import Album from './Album';
import ObtenerLaminas from './ObtenerLaminas';
import Peliculas from './Peliculas';
import Personajes from './Personajes';
import Naves from './Naves';

export const MyAppRouter = () => {

  
    return (
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/album" element={<Album />} />
              <Route path="/obtener-laminas" element={<ObtenerLaminas />} />
              <Route path="/peliculas" element={<Peliculas />} />
              <Route path="/personajes" element={<Personajes />} />
              <Route path="/naves" element={<Naves />} />
            </Route>
          ),
        )}
      />
    );
  };
  