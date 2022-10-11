import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from './../../firebase-config';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";

function ProjectHome() {
  const { id } = useParams();
  const [taskList, setTaskList] = useState([]);

  console.log(id);
  let docRef
  let docSnap
  let navigate = useNavigate();
  const [project, setProject] = useState([]);
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

  const tasksCollectionRef = query(collection(db, "tasks"), where("projectid", "==", id))

  useEffect(() => {
    onSnapshot(tasksCollectionRef, (snapshot) => {
      setTaskList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const [heck, setheck] = useState([]);

  useEffect(() => {
    async function ProjectGet(id) {
      const docRefq = doc(db, "projects", id);
      try {
        const docSnap = await getDoc(docRefq);
        setProject(docSnap.data())
        console.log(project);
        setheck([
          { link: docSnap.data().link1, name: docSnap.data().link1name },
          { link: docSnap.data().link2, name: docSnap.data().link2name },
          { link: docSnap.data().link3, name: docSnap.data().link3name },
          { link: docSnap.data().link4, name: docSnap.data().link4name },
          { link: docSnap.data().link5, name: docSnap.data().link5name },
        ]);

        console.log('heck is \n ', heck);
      } catch (error) {
        console.log(error)
      }
    }
    ProjectGet(id)
  }, []);

  var statuscolor = 'green'

  return (
    <>


      <div className='my-24'>
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
              <div className="mx-5">
                <h3 className='font-bold text-base text-gray-600'>{project.desc}</h3>
              </div>
              <section className="text-gray-500 flex justify-between px-40 py-16">
                {heck.map((item,index) =>
                  <>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]" key={index}>
                      {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-purple-600"> */}
                      <a href={item.name}><h3 className="text-xl font-semibold tracking-wide">{item.link}</h3></a>
                    </div>
                  </>
                )}
              </section>
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
                        <td className="py-4 px-6 font-bold text-base">
                          <Link to={`/task/${task.id}`}>
                            {task.name}
                          </Link>
                        </td>
                        <td className="py-4 px-6">
                          {task.desc}
                        </td>

                        <td className="py-4 px-6">
                          {task.status == 'todo' ? (
                            <>
                              <div className="flex items-center">
                                <div style={{ backgroundColor: 'red' }} className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> {task.status}
                              </div>
                            </>
                          ) : task.status == 'completed' ? (
                            <>
                              <div className="flex items-center">
                                <div style={{ backgroundColor: 'green' }} className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> {task.status}
                              </div>
                            </>
                          ) : <>
                            <div className="flex items-center">
                              <div style={{ backgroundColor: 'yellow' }} className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> {task.status}
                            </div>
                          </>
                          }

                        </td>
                        <td className="py-4 px-6">
                          <Link to={`/edit-task/${task.id}`} type="button" className="font-bold  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-blue-500" ><i className="fa-solid fa-pencil"></i></Link>
                          <button onClick={() => {
                            deleteTask(task.id);
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
    </>
  )
}

export default ProjectHome
