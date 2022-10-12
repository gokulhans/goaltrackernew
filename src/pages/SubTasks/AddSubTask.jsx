import React, { useState, useEffect } from "react";
import { addDoc,collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import { db, auth } from '../../firebase-config';

function AddSubTask() {

  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const subtasksCollectionRef = collection(db, "subtasks");
  let navigate = useNavigate();

  const createSubTask = async () => {
    await addDoc(subtasksCollectionRef, {
      name,
      desc,
      link,
      taskid:id,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate(`/task/${id}`);
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
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Task Name</label>
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
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="link.."
            onChange={(event) => {
              setLink(event.target.value);
            }}
          />
        </div>
        <button onClick={createSubTask} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default AddSubTask
