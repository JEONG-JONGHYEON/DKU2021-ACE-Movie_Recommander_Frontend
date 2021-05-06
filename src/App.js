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
import NavBar from "./components/NavBar/NavBar";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Footer from "./components/Footer/Footer"
import Layout from "antd/lib/layout/layout";
import MyPage from "./components/MyPage/MyPage";

function App() {
  return (
    <div>
      <Layout>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/movie" component={MovieListPage} />
            <Route exact path="/movie/:movieId" component={MovieDetail} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/mypage" component={MyPage} />
          </Switch>
        </Router>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;