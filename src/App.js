import './App.css';

function App() {
  const name = 'sunny';
  const isMale = true;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h1>{getGreeting()}</h1>
      <h2>You are a {isMale ? 'male' : 'female'}</h2>
    </div>
  );
}

export default App;
