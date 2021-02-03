import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import LoginReg from "./pages/LoginReg";
import NavBar from "./components/Navbar";
import Tracker from "./pages/Tracker";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
          <Route exact path="/details">
            <NavBar />
            <Details />
          </Route>
          <Route exact path="/login-reg">
            <LoginReg toggleCreate={false} />
          </Route>
          <Route exact path="/login-reg/create">
            <LoginReg toggleCreate={true} />
          </Route>
          <Route exact path="/your-tracker">
            <NavBar />
            <Tracker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
