import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../firebase-config';

function Navbar() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (

    <nav className="px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-yellow-300">Project Tracker</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">


            {!isAuth ? (
              <li>
                <Link to="/login" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-yellow-300 font-bold md:p-0 dark:text-white" >Login</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/" className="font-bold block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </li>
                <li>
                  <Link to="/add-project" className="font-bold block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">New Project</Link>
                </li>
                <li>
                  <button onClick={signUserOut} className="font-bold block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
                </li>

              </>
            )}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar