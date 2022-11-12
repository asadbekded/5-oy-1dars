import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Search from './components/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <section>
          <div className='container'>
            <ul className='card__list'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
