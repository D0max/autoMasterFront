import React from 'react';
import AuthPage from "./pages/AuthPage";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import {RootState} from "./store/store";
import Home from "./pages/Home";

const Layout = () => {
  const token = localStorage.getItem('token')
  const loading = useSelector((state: RootState) => state.authReducer.loading)

  React.useEffect(() => {

  }, [loading])

  if (!token) {
    return (
      <AuthPage/>
    )
  }

  return (
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
  );
};

export default Layout
