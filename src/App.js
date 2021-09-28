import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import dotenv from "dotenv";
import Header from "./components/header/Header";

import Home from "./pages/Home";

dotenv.config();

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <div className="container"> */}
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
