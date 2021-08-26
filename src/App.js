// import "./App.css";
import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./componenets/Logo";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <Router>
      <Helmet>
        <title>
          FliqaIndia: Photography, Videography, Graphic Design related creative
          platform
        </title>
        <meta
          name="description"
          content="Personalised platforms for Photography, Videography with
Graphics. One of the leading platforms in the creative domain."
        />

        <meta
          name="keywords"
          content="single page applications, photography, UI UX design"
        />
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Logo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
