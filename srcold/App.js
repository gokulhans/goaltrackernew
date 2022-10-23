import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Confirm from './pages/Confirm/Confirm';
import Profile from './pages/Profile/Profile';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Address from './pages/Form/Address';


function App() {
  return (
    <>
      <div className='fixed top-0 inset-x-0 z-40'> <Navbar /> </div>

      {/* <div className='fixed bottom-0 inset-x-0 z-50'> <Footer /> </div> */}

      <div className='mt-16 flex flex-col justify-start h-screen sm:items-center sm:p-5'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/editaddress" element={<Address />} />
        </Routes>
      </div> 
    </>
  );
}

export default App;
