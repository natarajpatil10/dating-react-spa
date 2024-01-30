import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import HomePage from "./HomePage/HomePage.jsx";
import About from "./AboutUs/About";
import SingleDating from "./SingleDating/SingleDating";
import ChristianDating from "./ChristianDating/ChristianDating";
import GayDating from "./GayDating/GayDating";
import LesbianDating from "./LesbianDating/LesbianDating";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-lg ">
          <Navbar />
        </div>
        <hr className="container-fluid p-0 mt-1 mb-3" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/single-dating" component={SingleDating} />
          <Route path="/christian-dating" component={ChristianDating} />
          <Route path="/gay-dating" component={GayDating} />
          <Route path="/lesbian-dating" component={LesbianDating} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
