import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import Reserve from './Components/Reserve';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Specials />
      <Reserve />
      <Footer />
      </>
  );
}

export default App;
