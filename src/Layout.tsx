import React from 'react';
import AuthPage from "./pages/AuthPage";

const Layout = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return (
      <AuthPage/>
    )
  }

  return (
    <div>
      main
    </div>
  );
};

export default Layout
