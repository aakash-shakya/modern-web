import logo from './logo.svg';
import './App.css';
import FetchData from './components/fetchdata';
import Postdata from './components/postData';
import ComponentRoute from './components/componentroute';

function App() {
  return (
    <div className="App">
      <h3>
        <ComponentRoute/>
      </h3>
    </div>
  );
}

export default App;
