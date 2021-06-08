import './App.css';
import SearchBar from './components/SearchBar';
import useFetch from './components/useFetch';

function App() {
  const api = "429736441cf3572838aa10530929f7cd"

  const {data:wheaters, isPending, error } = useFetch(`http://api.openweathermap.org/data/2.5/weather?q=pokhara,Nepal&appid=${api}`)
  return (
    <div className="App">
      <h3>Weather BroadCasting</h3>
      <SearchBar />
    </div>
  );
}

export default App;
