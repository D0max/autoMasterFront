import React, {useEffect} from 'react';
import './App.css';
import axios from './api';
import Layout from "./Layout";

function App() {
  useEffect(() => {
    axios.post('/auth/login/', {username: '0003', password: '10'}).then((res) => console.log(res))
  }, [])
  return (
    <Layout/>
  );
}

export default App;
