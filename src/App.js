// routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from "./components/LoginPage/LoginPage";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import MyPage from "./components/MyPage/MyPage";
import './App.css'

function App() {
  return (
    <div id="main">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie" component={MovieListPage} />
          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={RegisterPage} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;