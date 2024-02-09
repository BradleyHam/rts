import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Hero/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
         <Home />
      </header>
    </div>
  );
}

export default App;
