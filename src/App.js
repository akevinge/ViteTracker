import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import LoginReg from "./pages/LoginReg";
import NavBar from "./components/Navbar";
import Tracker from "./pages/Tracker";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <UserProvider>
              <NavBar />
            </UserProvider>
            <Home />
          </Route>
          <Route exact path="/details">
            <UserProvider>
              <NavBar />
            </UserProvider>
            <Details />
          </Route>
          <Route exact path="/login-reg">
            <UserProvider>
              <LoginReg toggleCreate={false} />
            </UserProvider>
          </Route>
          <Route exact path="/login-reg/create">
            <UserProvider>
              <LoginReg toggleCreate={true} />
            </UserProvider>
          </Route>
          <Route exact path="/your-tracker">
            <UserProvider>
              <Tracker />
            </UserProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
