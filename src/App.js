import React  from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import SectionGrid from './Components/SectionGrid';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SectionGrid />
    </div>
  );
}

export default App;
