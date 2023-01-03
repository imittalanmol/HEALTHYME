import './App.css';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import Alldoctors from './components/Alldoctors';
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<>
      <Slider/><Ourservices/><Doctors/><Testimonial/><Footer/></>}/>
      <Route path='book-my-appointment' element={<Login/>}/>
      <Route path='contactus' element={<Footer/>}/>
      <Route path='alldoctors' element={<><Alldoctors/><Footer/></>}/>
      <Route path='aboutus' element={<><Aboutus/><Footer/></>}/>
      <Route path='services' element={<><Ourservices/><Footer/></>}/>
      <Route path='/alldoctors/book-my-appointment' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
