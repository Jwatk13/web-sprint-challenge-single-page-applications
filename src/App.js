import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Pizza from './pizza';

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  special: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }

  return (
   <div className="App">
     <nav>
       <h1 className="lambda-eats">Lambda Eats</h1>
       <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/pizza" id="order-pizza">Order Pizza</Link>
       </div>
     </nav>
     <Switch>
       <Route path={"/pizza"}>
         <Pizza
          values={formValues}
          change={handleChange}
          submit={handleSubmit}
          errors={formErrors} />
       </Route>
       <Route path={"/"}>
         <Home />
       </Route>
     </Switch>
   </div>
  );
};
export default App;


//