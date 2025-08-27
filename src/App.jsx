import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Print from './Components/Print/Print'
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import PrintSetting from './Components/PrintSettings/PrintSetting';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route 
    path="/" 
    element={
      <>
        <Print />
        <PrintSetting />
      </>
    } 
  />
  <Route 
    path="/print" 
    element={
      <>
        <Print />
        <PrintSetting />
      </>
    } 
  />
  <Route path="/about" element={<About />} />
</Routes>

      </BrowserRouter>
      <Footer/>
    </div>

  );
}
export default App;
