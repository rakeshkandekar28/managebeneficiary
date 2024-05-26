import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBeneficiary from "./components/AddBeneficiary";
import ManageBeneficiary from "./components/manageBeneficiary";
import NoPage from "./components/NoPage";


function App() {

  return (
    <>
    
      <Router>
        
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={"/manage"} className="nav-link">
                Manage beneficiary
              </Link>
            </li>
          </div>
        </nav>



        <div className="container mt-3">
          <Switch>
            <Route exact path={["/"]}/>
            <Route path="/add" component={AddBeneficiary} />
            <Route path="/manage" component={ManageBeneficiary} />
            <Route path="*" component={NoPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
