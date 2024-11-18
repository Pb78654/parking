import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import SignUp from './Components/SignUp'
import ParkingSpace from './Components/ParkingSpace';
function App() {
  return (
    
    <div className="App">
     <Navbar/>
     {/* <SignUp/> */}
     <ParkingSpace/>
     <Fotter/>
    </div>
    
  );
}

export default App;
