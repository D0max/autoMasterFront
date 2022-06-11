import React from 'react';
import Layout from "./Layout";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


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
