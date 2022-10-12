import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from './../../firebase-config';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";

function TaskHome() {
  const { id } = useParams();
  const [subtaskList, setsubTaskList] = useState([]);

  console.log(id);
  let docRef
  let docSnap
  let navigate = useNavigate();
  const [task, setTask] = useState({});
  // const [author, setAuthor] = useState({});

  const deleteTask = async (id) => {
    const userDoc = doc(db, "tasks", id);
    await deleteDoc(userDoc);
    navigate(-1)
    // getUsers();
  };

  const deleteSubTask = async (subtaskid) => {
    const userDoc = doc(db, "subtasks", subtaskid);
    await deleteDoc(userDoc);
    navigate(`/project/${id}`)
  };

  const subtasksCollectionRef = query(collection(db, "subtasks"), where("taskid", "==", id))

  useEffect(() => {
    onSnapshot(subtasksCollectionRef, (snapshot) => {
      setsubTaskList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  useEffect(() => {
    async function TaskGet(id) {
      const docRefq = doc(db, "tasks", id);
      try {
        const docSnap = await getDoc(docRefq);
        setTask(docSnap.data())
      } catch (error) {
        console.log(error)
      }
    }
    TaskGet(id)
  }, []);


  return (
    <div className=''>
      <div className='margin p-4 mx-8 md:mx-24 border rounded-md border-violet-600 shadow-xl shadow-violet-900'>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div className="flex justify-between items-center py-4 ">
            <div className="relative left-5">
              <h3 className='font-bold text-lg text-green-600'>{task.name}</h3>
            </div>
            <div className="relative right-0">
              <Link to={`/add-subtask/${id}`} className="mx-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Add Sub Task</b></Link>
            </div>
          </div>

          <div>
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  {/* <th scope="col" className="py-3 px-6">
                    Link
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                {subtaskList.map((subtask, index) => {
                  return (
                    <tr className="" key={index}>
                      <td className="py-4 px-6 font-bold text-base">
                        {subtask.name}
                      </td>
                      {/* <td className="py-4 px-6">
                        {subtask.desc}
                      </td> */}
                      <td className="py-4 px-6">
                        <a href={subtask.link} className="font-bold  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-gray-400" target="_blank"><i className="fa-solid fa-eye"></i></a>
                        <Link to={`/edit-subtask/${subtask.id}`} type="button" className="font-bold  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-blue-500" ><i className="fa-solid fa-pencil"></i></Link>
                        <button onClick={() => {
                          deleteSubTask(subtask.id);
                        }}
                          className="font-bol  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-red-600" ><i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })}


              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TaskHome
