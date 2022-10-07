import React from 'react'
import Project from './../Project/Project';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';

function Home() {

  const [projectList, setProjectList] = useState([]);
  let userid = localStorage.getItem("authorid");
  const projectCollectionRef = query(collection(db, "projects"), where("author.id", "==", userid))
  
  useEffect(() => {
    onSnapshot(projectCollectionRef, (snapshot) => {
      setProjectList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  
  return (
    <div>
        <div className="p-4 grid justify-center grid-cols-1 gap-6 lg:gap-16 sm:grid-cols-2 lg:grid-cols-2 lg:mx-32 lg:mt-8">

        {projectList.map((project, index) => {
          return (
            <Project key={index} project={project} />
          )
        })}
        </div>
    </div>
  )
}

export default Home