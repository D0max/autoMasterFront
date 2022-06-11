import React from 'react';
import AuthPage from "./pages/AuthPage";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import PrivateRoute from './components/UI/PrivateRoute'


import {RootState} from "./store/store";
import { useGetPersonInfoQuery } from './services/persons';
import Header from "./components/Headers";
import { LayoutGrid, LayoutHeader, LayoutFooter, LayoutMain } from './utils/rootStyles';
import Home from './pages/Home';
import ProfilePage from "./pages/ProfilePage";

const Layout = () => {
  const token = localStorage.getItem('token')
  const loading = useSelector((state: RootState) => state.authReducer.loading)
  const { data: person, error, isLoading } = useGetPersonInfoQuery('')


  React.useEffect(() => {}, [loading])

  if (!token) {
    return (
      <AuthPage/>
    )
  }

  if (isLoading) return null


  return (
    <LayoutGrid>
      <LayoutHeader>
        <Header profile={person}/>
      </LayoutHeader>
      <LayoutMain>
        <div>
          <Routes>
            <Route element={<Home/>} path="/"/>
            <Route path="/profile" element={
              <PrivateRoute isAllowed={person}>
                <ProfilePage />
              </PrivateRoute>}/>
          </Routes>
        </div>
      </LayoutMain>
      <LayoutFooter>@test</LayoutFooter>
    </LayoutGrid>
  );
};

export default Layout
