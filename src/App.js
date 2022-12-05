import logo from './logo.svg';
import './Login.css';
import amazon from "./amazon.png";
import Login from './login.js';


function App() {
  return (
    <>
      <img src={amazon}></img>
      <div>
        {Login()}
        
      </div>
    </>
  );
}

export default App;
