import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./comp/Main";
import Footer from "./comp/Footer";
import Login from "./comp/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
