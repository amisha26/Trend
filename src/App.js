import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./comp/Header";
import Main from "./comp/Main";
import Product from "./comp/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
          <Main />
        </div>
        <Product />
        <Switch>
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
