import './App.css';
import { Link, Route } from 'wouter';
import Detail from 'pages/Detail';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from 'context/GifsContext';
import React, { Suspense } from 'react';
import ErrorPage from 'pages/404';

const HomePage = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'esto-es-con-provider',
      suscribeteAlCanal: true,
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to='/'>
              <div className="App-Logo">Giffy</div>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path='/'
              />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?/:language?" />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={ErrorPage}
                path="/404"
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
