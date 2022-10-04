import React from 'react'
import Project from './../Project/Project';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase-config';

function Home() {

  const [projectList, setProjectList] = useState([]);
  const projectCollectionRef = collection(db, "projects");

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