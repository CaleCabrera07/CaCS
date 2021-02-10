import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;