import './App.css';
import BoxMaker from './components/BoxMaker';

function App() {
  return (
    <div className="App">
      <h1>Make all the boxes you want, my dude!</h1>
      <p>pick a color and size you want the box to be: </p>
      <BoxMaker/>
    </div>
  );
}

export default App;
