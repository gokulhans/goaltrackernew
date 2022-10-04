import React from 'react'
import Project from './../Project/Project';

function Home() {
  return (
    <div>
        <div className="p-4 grid justify-center grid-cols-1 gap-6 lg:gap-16 sm:grid-cols-2 lg:grid-cols-2 lg:mx-32 lg:mt-8">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        </div>
    </div>
  )
}

export default Home