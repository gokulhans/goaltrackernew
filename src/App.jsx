import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AddProject from "./pages/Project/AddProject";
import EditTask from "./pages/Task/EditTask";
import EditProject from "./pages/Project/EditProject";
import ProjectHome from "./pages/Home/ProjectHome";
import AddTask from "./pages/Task/AddTask";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        <Route path="/add-project" element={<AddProject />} />{" "}
        <Route path="/edit-project/:id" element={<EditProject />} />{" "}
        <Route path="/add-task/:id" element={<AddTask />} />{" "}
        <Route path="/edit-task/:id" element={<EditTask />} />{" "}
        <Route path="/project/:id" element={<ProjectHome />} />{" "}
              
        {/* <Route path="/project/:id" element={<Singleproject isAuth={isAuth} />} /> */}{" "}
        {/* <Route path="/createpost" element={<AddProject isAuth={isAuth} />} />
                                    <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home isAuth={isAuth} />} /> */}{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
