import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//pages
import Home from './pages/Home'

//components
import Navbar from "../src/components/Navbar";

//styles
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;