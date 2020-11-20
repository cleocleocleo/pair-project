import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import Foxes from './components/Foxes/Foxes';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cats" component={Cats} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/foxes" component={Foxes} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
