import React, { useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './router/Auth';
import Admin from './router/Admin';
import Home from './router/Home';
import UserList from './router/UserList';
import RequireAuth from './router/RequireAuth';



const App = () => {
  return (
    // <div className="page">
      <Routes>
        {/* public routers */}
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />

        {/* protect routes */}
        <Route element={<RequireAuth />}>
          <Route path="admin" element={<Admin />} />
          <Route path="userslist" element={<UserList />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    // </div>
  );
};

export default App;
