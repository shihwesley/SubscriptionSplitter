
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";



function App() {
  return (
    <Router>
      <div>   
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Netflix" component={Netflix} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route exact path="/HBOnow" component={HBOnow} />
// <Route exact path="/iHeartradio" component={iHeartradio} />
// <Route exact path="/Crunchyroll" component={Crunchyroll} />
// <Route exact path="/YoutubeTV" component={YoutubeTV />
// <Route exact path="/Spotify" component={Spotify} />
// <Route exact path="/Chegg" component={Chegg} />
