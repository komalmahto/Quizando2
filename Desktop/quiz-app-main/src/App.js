import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PlayNow from "./components/PlayNow";
import StartQuiz from "./pages/StartQuiz/StartQuiz";
import PlayQuiz from "./pages/playQuiz/playQuiz";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/Login/Login";
import Auth from "./checkAuth/auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyAccount from "./components/MyAccount";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Auth(LogIn, false)} />
          <Route path="/start" component={StartQuiz} />
          <Route path="/playQuiz" component={Auth(PlayQuiz, false)} />
          {/* <Route path="/myaccount" component={MyAccount} /> */}
          <PlayNow />
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
