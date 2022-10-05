import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from './../../firebase-config';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function ProjectHome() {   
  const { id } = useParams();
  const [taskList, setTaskList] = useState([]);
 
  useEffect(() => {
    async function data(id) {
      const q = query(collection(db, "tasks"), where("projectid", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setTaskList(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      });
    }
    data(id);
  }, [taskList]);





  console.log(id);
  let docRef
  let docSnap
  let navigate = useNavigate();
  const [project, setProject] = useState({});
  // const [author, setAuthor] = useState({});

  const deleteProject = async (id) => {
    const userDoc = doc(db, "projects", id);
    await deleteDoc(userDoc);
    navigate('/')
    // getUsers();
  };

  const deleteTask = async (taskid) => {
    const userDoc = doc(db, "tasks", taskid);
    await deleteDoc(userDoc);
    navigate(`/project/${id}`)
  };

  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "projects", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProject(docSnap.data());
        // setAuthor(docSnap.data().author);
        console.log(project);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);


  return (
    <div className=''>
      <div className='margin p-4 mx-8 md:mx-24 border rounded-md border-violet-600 shadow-xl shadow-violet-900'>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div className="flex justify-between items-center py-4 ">
            <div className="relative left-5">
              <h3 className='font-bold text-lg text-green-600'>{project.name}</h3>
            </div>
            <div className="relative right-0">
            <Link to={`/add-task/${id}`} className="mx-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Add Task</b></Link>
              <Link to={`/edit-project/${id}`} className="mx-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><b>Edit Project</b></Link>
              <button onClick={() => { deleteProject(id) }} className="ml-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><b>Delete Project</b></button>
            </div>
          </div>

          <div>
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Position
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                {taskList.map((task, index) => {
                  return (
                    <tr className="" key={index}>
                      <th scope="row" className="flex items-center py-4 px-6 text-gray-300 whitespace-nowrap dark:text-white">
                        <div className="text-base font-semibold">{task.name}</div>
                      </th>
                      <td className="py-4 px-6">
                        {task.desc}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Completed
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Link to={`/edit-task/${task.id}`} type="button" className="font-bold text-white  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-blue-500" ><FontAwesomeIcon icon={solid('pencil')} /></Link>
                        <button  onClick={()=>{
                              deleteTask(task.id);
                        }} 
                        className="font-bold text-white  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-red-600" ><FontAwesomeIcon icon={solid('trash')} />
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

export default ProjectHome