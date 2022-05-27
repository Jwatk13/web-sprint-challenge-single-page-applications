import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Form from './pizza';

const App = () => {
  return (
   <div className="App">
     <nav>
       <h1 className="lambda-eats">Lambda Eats</h1>
       <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/pizza" id="order-pizza">Order Pizza</Link>
       </div>
     </nav>
   </div>
  );
};
export default App;


//