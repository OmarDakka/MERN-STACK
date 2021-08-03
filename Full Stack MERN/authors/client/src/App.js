import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router';
import Create from './views/Create';
import Details from './views/Details';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
      <Main path="authors"/>
      <Create path="authors/create"/>
      <Details path="authors/:id"/>
      <Update path="authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
