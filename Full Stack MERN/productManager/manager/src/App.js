import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products"/>
        <Details path="products/:id"/>
      </Router>
    </div>
  );
}

export default App;
