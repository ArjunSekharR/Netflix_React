import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { actions,originals } from './urls';
import './App.css';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost urls={originals} title = 'Netflix Originals'/> 
     <Rowpost urls={actions} title = 'Actions' isSmall/> 
    </div>
    
  )}

export default App;
