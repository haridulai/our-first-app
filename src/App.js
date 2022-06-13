import './App.css';
import Header from './Header';

// BEM - block element modified
//block__element--modifier

function App() {

  return (
    <div className="App">
      <Header />
      <h1 className="app__title">This is a title</h1>
    </div>
  );
}

export default App;
