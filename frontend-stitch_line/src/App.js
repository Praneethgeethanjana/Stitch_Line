import Login from "./screens/Login";
import Register from "./screens/Register";
import Header from "./components/Header";
import Program from "./screens/Program";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    // <Register/>
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/program" component={Program} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
