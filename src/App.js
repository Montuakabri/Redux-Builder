import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
