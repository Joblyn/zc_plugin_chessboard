import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import "./App.css";
import MiniBoard from "./components/MiniBoard/MiniBoard";
import Homepage from "./Pages/Homepage.js/Homepage"
import MainGame from "./Pages/GameScreen/MainGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => Homepage} />
          <Route exact path="/game" render={() => MainGame} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;