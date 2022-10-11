import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from './../../firebase-config';

function AddProject() {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  
  const [link1, setLink1] = useState("");
  const [link1name, setLink1Name] = useState("");

  const [link2, setLink2] = useState("");
  const [link2name, setLink2Name] = useState("");

  const [link3, setLink3] = useState("");
  const [link3name, setLink3Name] = useState("");

  const [link4, setLink4] = useState("");
  const [link4name, setLink4Name] = useState("");

  const [link5, setLink5] = useState("");
  const [link5name, setLink5Name] = useState("");


  const projectsCollectionRef = collection(db, "projects");
  let navigate = useNavigate();

  const createProject = async () => {
    await addDoc(projectsCollectionRef, {
      name,
      desc,
      link1,
      link2,
      link3,
      link4,
      link5,
      link1name,
      link2name,
      link3name,
      link4name,
      link5name,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);


  return (
    <div className="margin">

      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Project Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.."
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link 1</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Name.."
            onChange={(event) => {
              setLink1(event.target.value);
            }}
          />
          <input type="text" id="desc" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Link.."
            onChange={(event) => {
              setLink1Name(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link 2</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Name.."
            onChange={(event) => {
              setLink2(event.target.value);
            }}
          />
          <input type="text" id="desc" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Link.."
            onChange={(event) => {
              setLink2Name(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link 3</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Name.."
            onChange={(event) => {
              setLink3(event.target.value);
            }}
          />
          <input type="text" id="desc" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Link.."
            onChange={(event) => {
              setLink3Name(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link 4</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Name.."
            onChange={(event) => {
              setLink4(event.target.value);
            }}
          />
          <input type="text" id="desc" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Link.."
            onChange={(event) => {
              setLink4Name(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link 5</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Name.."
            onChange={(event) => {
              setLink5(event.target.value);
            }}
          />
          <input type="text" id="desc" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Link.."
            onChange={(event) => {
              setLink5Name(event.target.value);
            }}
          />
        </div>


        <button onClick={createProject} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default AddProject
