import './App.css';
// import { Buttons } from './Buttons/Buttons';
// import {Button} from 'react-bootstrap';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
