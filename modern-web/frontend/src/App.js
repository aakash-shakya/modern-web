import logo from './logo.svg';
import './App.css';
import Fetchdata from './components/fetchdata';
import Postdata from './components/postData';

function App() {
  return (
    <div className="App">
      <Postdata/>
      <Fetchdata/>
    </div>
  );
}

export default App;
