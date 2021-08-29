import './App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home'
import Detail from './components/Detail';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <p className="Logo">Giffy</p>
        </Link>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}
          path="/search/:keyword" />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}

export default App;
