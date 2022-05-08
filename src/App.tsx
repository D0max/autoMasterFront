import React from 'react';
import Layout from "./Layout";
import './App.css';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

function App() {
  const store = setupStore()
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}

export default App;
