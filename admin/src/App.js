import './App.css';
import Login from './Components/Login';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Gestion from './Components/Gestion';
import Test from './Components/Test';
import { AddService } from './Components/AddService';
import ListReservation from './Components/ListReservation';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/gestion' element={localStorage.getItem("token")?<Gestion/> :<Login/>}></Route>      
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/ajout' element={<AddService/>}></Route>
        <Route path='/reservation' element={<ListReservation/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
    
