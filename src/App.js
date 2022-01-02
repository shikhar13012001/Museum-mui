import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists";
import Collections from "./Pages/Collections";
import Artwork from "./Pages/Artwork";
import Medium from "./Pages/Medium";
import Artifact from "./Pages/Artifact";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/artwork/:artist_id" component={Artwork} />
        <Route exact path="/artifact/:id" component={Artifact} />
        <Route exact path="/:medium/:type" component={Medium} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
