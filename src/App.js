import Navbar from './components/Navbar/Navbar';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <CountriesList/>
    </div>
  );
}

export default App