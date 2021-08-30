import './App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home'
import Detail from './components/Detail';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'esto-es-con-provider',
      suscribeteAlCanal: true,
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <p className="Logo">Giffy</p>
          </Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
