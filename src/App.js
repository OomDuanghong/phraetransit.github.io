import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// import Home component 
import FirstPage from "./components/testHome/FirstPage";
import Home from "./components/testHome/Home";
import MapsPage from "./components/testHome/MapsPage";
import Tram from "./components/testHome/Tram";
import TruckTaxi from "./components/testHome/TruckTaxi";
import Hero from "./components/testHome/hero/Hero";
import PhraeTransit from "./components/Home/PhraeTransit"

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component  
          with exact path "/", in component props  
          we passes the imported component*/}
          {/* <Route exact path="/" component={FirstPage} /> */}
          {/* <Route exact path="/" component={MapsPage} /> */}
          {/* <Route exact path="/" component={Tram} /> */}
          {/* <Route exact path="/" component={TruckTaxi} /> */}
          {/* <Route exact path="/" component={Hero} /> */}
          <Route exact path="/" component={PhraeTransit} />

          {/* This route is for home component  
with exact path "/", in component props  
we passes the imported component*/}
          {/* <Route exact path="/" component={FirstPage} /> */}

          {/* This route is for about component  
with exact path "/about", in component  
props we passes the imported component*/}
          {/* <Route path="/about" component={About} />  */}

          {/* This route is for contactus component 
with exact path "/contactus", in  
component props we passes the imported component*/}
          {/* <Route path="/contactus" component={ContactUs} />  */}

          {/* If any route mismatches the upper  
route endpoints then, redirect triggers  
and redirects app to home component with to="/" */}
          {/* <Redirect to="/" />  */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
