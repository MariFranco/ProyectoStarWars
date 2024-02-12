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

export const MyAppRouter = () => {

  
    return (
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/album" element={<Album />} />
              <Route path="/obtener-laminas" element={<ObtenerLaminas />} />
            </Route>
          ),
        )}
      />
    );
  };
  