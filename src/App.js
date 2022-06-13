import './App.css';

// BEM - block element modified
//block__element--modifier

function App() {

  return (
    <div className="App">
      <h1 className="app__title">This is a title</h1>
      <h1 className="app__title app__title--large">This is a large title</h1>
      <h1 className="app__title app__title--small">This is a small title</h1>
    </div>
  );
}

export default App;
