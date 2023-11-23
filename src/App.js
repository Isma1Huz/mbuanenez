import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import Servicespage from './Pages/Servicespage/Servicespage';
import Contactspage from './Pages/Contactspage/Contactspage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/Aboutpage' element={<Aboutpage/>}/>
            <Route path='/Servicespage' element={<Servicespage/>}/>
            <Route path='/Contactspage' element={<Contactspage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  
   
    </div>
  );
}

export default App;


