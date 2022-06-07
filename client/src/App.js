import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import AuthLayout from './layout/AuthLayout';

const ProtectedRoute = ({ redirectPath = '/auth' }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (currentUser === undefined) {
    return 'loading.....';
  }

  if (!Object.keys(currentUser).length > 0) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <Routes>
      <Route index element={<MainLayout />} />
      <Route path="auth" element={<AuthLayout />} />
      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<AdminLayout />} />
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default App;
