import React from 'react';
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Exercises from "./Exercises"; // Import the component you want to render
import Home from './Home';


function App() {
  return (
    <div>
      <main>
        <Switch>
        <Route exact path="/">
            <Home /> {/* Replace with the desired component */}
          </Route>
          <Route exact path="/exercises">
            <Exercises />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* Replace <Home /> with the component you want to render */}
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
