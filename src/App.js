import Register from "../src/components/Register";
import Product from "../src/components/Product";
import Login from "../src/components/Login"
import Checkout from "../src/components/Checkout"

import Thanks from "../src/components/Thanks"
import {Switch,Route} from "react-router-dom";

export const config = {
  endpoint: `https://qkart-frontend-10h6.onrender.com/api/v1`,
};

function App() {
  return (
    <div className="App">
  
        <Switch>
            <Route  path="/register">
             <Register />
            </Route>
            <Route  path="/login">
              <Login />
            </Route>   
            <Route  path="/checkout">
             <Checkout /> 
            </Route>
            <Route  path="/Thanks">
             <Thanks /> 
            </Route>
            <Route  path="/">
             <Product /> 
            </Route>
        </Switch>
  
    </div>
  );
}

export default App;
