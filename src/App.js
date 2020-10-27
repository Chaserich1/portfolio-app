import React from 'react';
import logo from './Chase-Picture.PNG';
import './App.css';
import Header from './Components/Header';
import HomeTabs from './Components/HomeTabs';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <Header />
        </header>
        <HomeTabs />
      </div>
      <div className='icons-List'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;