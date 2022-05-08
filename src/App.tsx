import React from 'react';
import Layout from "./Layout";
import './App.css';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";


function App() {
  const store = setupStore()
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Layout/>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
