import React, { useState, useEffect } from "react";
import { addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from '../../firebase-config';
import { Link, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

function EditSubTask() {
  const { id } = useParams();
  console.log(id);
  let docRef
  let docSnap
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [subtask, setsubTask] = useState({});

  const subtasksCollectionRef = collection(db, "subtasks");
  let navigate = useNavigate();

  const editSubTask = async (id) => {
    await setDoc(doc(db, "subtasks", id), { name: name, desc: desc, taskid: subtask.taskid,link:link,author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    navigate(`/task/${subtask.taskid}`);
  };

  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "subtasks", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setsubTask(docSnap.data());
        setName(docSnap.data().name)
        setDesc(docSnap.data().desc)
        setLink(docSnap.data().link)
        // setAuthor(docSnap.data().author);
        console.log(subtask);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);

  // useEffect(() => {
  //   onSnapshot(tasksCollectionRef, (snapshot) => {
  //     setTaskList(
  //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   });
  // }, []);


  return (
    <div className="margin">

      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Project Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required="" defaultValue={subtask.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.." defaultValue={subtask.desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Link</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="link.." defaultValue={subtask.link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
          />
        </div>
        <button onClick={() => {
          editSubTask(id)
        }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default EditSubTask
