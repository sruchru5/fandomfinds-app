import React from 'react';
import Header from './Componets/Header';
import Cards from './Componets/Cards';
import Maincontent from './Componets/Maincontent';
import Footer from './Componets/Footer';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import ViratKohli from './Componets/ViratKohli';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Footer/>
    <Cards/>
    <Maincontent/>
<Routes>
<Route element={<ViratKohli/>} path="/ViratKholi" />
        </Routes>
    </BrowserRouter>
</>
  );      
};

export default App;
