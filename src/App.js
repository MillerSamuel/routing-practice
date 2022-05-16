import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Num from './components/Num';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch> 
      <Route exact path="/home">
      <Welcome></Welcome>
      </Route>
      <Route exact path="/:number">
        <Num></Num>
      </Route>
      <Route exact path="/:number/:col1/:col2">
        <Num></Num>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
