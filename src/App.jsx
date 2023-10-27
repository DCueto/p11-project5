import { Route, Routes } from 'react-router-dom';

import './reset.css';
import './App.css';

import 'typeface-roboto';
import 'typeface-roboto-condensed';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Sport from './pages/Sport';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sport' element={<Sport />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
