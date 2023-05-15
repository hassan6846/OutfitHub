// imports
import './App.css';
import Alert from './components/Alert';
import HomeCarsoul from './components/HomeCarsoul';
import Nav from './components/Nav';
import SliderCarsoul from './components/SliderCarsoul';

// main
function App() {
  return (
    <div className="App">
   <Alert />
  <Nav /> 
<HomeCarsoul/>
<SliderCarsoul/>
    </div>
  );
}

export default App;
