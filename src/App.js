import './App.css';
import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path='/' component={Home}></Route>
        <Link to='/'></Link>
        <Link to='/gif/argentina'>Gifs de Argentina</Link>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
