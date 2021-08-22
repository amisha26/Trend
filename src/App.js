import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './comp/Header'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
