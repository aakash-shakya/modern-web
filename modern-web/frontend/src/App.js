import logo from './logo.svg';
import './App.css';
import FetchData from './components/fetchdata';
import Postdata from './components/postData';

function App() {
  return (
    <div className="App">
      <Postdata/>
      <FetchData/>
    </div>
  );
}

export default App;
