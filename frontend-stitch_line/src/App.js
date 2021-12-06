import Login from "./screens/Login";
import Register from "./screens/Register";
import Header from "./components/Header";
import Program from "./screens/Program";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/program" component={Program} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
