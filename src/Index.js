import React from 'react'
import  { createRoot }  from 'react-dom/client';
// import App from './App.js'
import "./Index.css";
// import Address from './Pages/Address';
import store from "./redux/store";
// import PlaceOrder from './Pages/PlaceOrder';
import { Provider } from "react-redux";
import AddToCart from './Pages/AddToCart';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<React.StrictMode>
    <Provider store={store}>
      {/* <PlaceOrder /> */}
      {/* <App /> */}
      <AddToCart/>
      {/* <Address /> */}
      {/* <Payment/> */}
    </Provider>
  </React.StrictMode>,
);