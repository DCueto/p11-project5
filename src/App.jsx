import { useState } from 'react'
import './reset.css'
import './App.css'

import 'typeface-roboto';
import 'typeface-roboto-condensed';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App;
