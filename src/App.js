import { Route, Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project/:id" element={<Singleproject isAuth={isAuth} />} /> */}
        {/* <Route path="/createpost" element={<AddProject isAuth={isAuth} />} />
        <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home isAuth={isAuth} />} /> */}
      </Routes>

    </>
  );
}

export default App;
