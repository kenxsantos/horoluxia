// RenderRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const RenderRoutes = ({ routes }) => (
    <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={"<"+route.element+"/>"}
      />
    ))}
  </Routes>
  );
        
export default RenderRoutes;
