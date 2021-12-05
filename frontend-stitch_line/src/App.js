import Login from "./screens/Login";
import Register from "./screens/Register";
import Header from "./components/Header";
import Program from "./screens/Program";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Register/>
    // <Router>
      
    //     <div className="app">
    //     <Header/>
    //     <Routes>
    //     <Route path="/login" component={Login} />

    //     </Routes>


    //     </div>

    // </Router>

   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
