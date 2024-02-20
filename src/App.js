import './App.css';
import Forecast from './Forecast.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className='btn btn-primary'>Weather App</h1>
        <Forecast />
        <p>
          <a href="https://github.com/Peacefsps/weather-app">Open-source code,</a> by 
          <a href="https://github.com/Peacefsps">Peace Iwakin</a> from
          <a href="https://www.shecodes.io/graduates/106144-peace-iwakin">She Codes</a>
        </p>
      </div>
    </div>
  );
}

export default App;
