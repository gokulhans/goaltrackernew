import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AddProject from "./pages/Project/AddProject";
import EditTask from "./pages/Task/EditTask";
import EditProject from "./pages/Project/EditProject";
import ProjectHome from "./pages/Home/ProjectHome";
import AddTask from "./pages/Task/AddTask";
import { useState } from 'react';
import Login from './pages/Auth/Login';
import TaskHome from "./pages/Home/TaskHome";
import EditSubTask from "./pages/SubTasks/EditSubTask";
import AddSubTask from "./pages/SubTasks/AddSubTask";
import Profile from './pages/Profile/Profile';
import Confirm from './pages/Confirm/Confirm';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-start min-h-fit sm:items-center sm:p-5'>
        <Routes>

          <Route exact path="/" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home isAuth={isAuth} />} />
          <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home isAuth={isAuth} />} />
          <Route path="/profile" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Profile isAuth={isAuth} />} />
          <Route path="/confirm" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Confirm isAuth={isAuth} />} />
          <Route path="/product/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <SingleProduct isAuth={isAuth} />} />

          <Route path="/project/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <ProjectHome isAuth={isAuth} />} />
          <Route path="/add-project" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <AddProject isAuth={isAuth} />} />
          <Route path="/edit-project/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <EditProject isAuth={isAuth} />} />

          <Route path="/task/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <TaskHome isAuth={isAuth} />} />
          <Route path="/add-task/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <AddTask isAuth={isAuth} />} />
          <Route path="/edit-task/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <EditTask isAuth={isAuth} />} />

          <Route path="/add-subtask/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <AddSubTask isAuth={isAuth} />} />
          <Route path="/edit-subtask/:id" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <EditSubTask isAuth={isAuth} />} />

        </Routes>
      </div>

    </>
  );
}

export default App;
