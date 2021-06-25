import React from "react";
import { BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect } from "react-router-dom";

import { Unplash } from "../components/unplash/Unplash";

export const AppRouter = () => {
  return (
    <Router>
      
      <div>
        <Switch>
          <Route exact path="/" component={Unplash}/>
        
          
          <Redirect to="/" />
          
        </Switch>
      </div>

    </Router>
  );
};
