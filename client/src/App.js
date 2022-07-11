import React, { useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './router/Auth';
import Admin from './router/Admin';
import Home from './router/Home';
import RequireAuth from './router/RequireAuth';

import './styles/main.scss';

const App = () => {
  return (
    <Routes>
      {/* public routers */}
      <Route index element={<Home />} />
      <Route path="auth" element={<Auth />} />

      {/* protect routes */}
      <Route element={<RequireAuth />}>
        <Route path="admin" element={<Admin />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default App;
