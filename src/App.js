// routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;