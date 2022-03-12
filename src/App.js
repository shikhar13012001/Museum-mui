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
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import server from "./utils/server";
import { Context } from "./Context/AuthContext";
import Profile from "./Pages/Profile";
import { Redirect } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  const [User, setUser] = React.useState(null);
  const [auth, setAuth] = React.useState(null);
  const [context, setContext] = React.useState(null);
  const FetchUser = async () => {
    try {
      const res = await fetch(`${server}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      setUser(data);
      setContext(data);
      if (data.user) localStorage.setItem("isAuthenticated", true);
    } catch (e) {}
  };

  React.useEffect(() => {
    FetchUser();
  }, [auth]);
  return (
    User && (
      <>
      <Context.Provider value={[context, setContext]}>
        <Router>
          <AnnouncementBar />
          <Header user={User.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/login">
              <Login handleAuth={(e) => setAuth(e)} />
            </ProtectedRoute>
            <ProtectedRoute exact path="/register">
              <Register handleAuth={(e) => setAuth(e)} />
            </ProtectedRoute>
            <Route exact path="/profile">
              {User.user ? (
                <Profile handleAuth={(e) => setAuth(e)} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/artwork/:artist_id" component={Artwork} />
            <Route exact path="/artifact/:id" component={Artifact} />
            <Route exact path="/:medium/:type" component={Medium} />
          </Switch>
        </Router>
      </Context.Provider>
          <Footer />
          </>
    )
  );
}

export default App;
