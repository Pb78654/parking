import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import SignUp from './Components/SignUp'
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';
import React, { useEffect, useState } from "react";
import Login from './Components/Login';
function App() {






  return (
    
    <div className="App">
     <Navbar/>
     <SignUp/>
      <Login/>
     <ParkingSpace/>
     <Wallet/>
     <Fotter/>
    </div>
    
  );
}

export default App;
