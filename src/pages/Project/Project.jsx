import React from 'react'
import { Link } from 'react-router-dom';

function Project({ project }) {
  console.log(project);
  return (
    <Link to={`/project/${project.id}`} className="relative block rounded-xl border border-violet-600 p-8 shadow-sm shadow-violet-900"  >
      <div className="flex">
        <h5 className="absolute left-8 top-4 text-xl font-bold text-gray-200">{project.name}</h5>
        {project.status == 'todo' ? (
          <span  className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-red-600" > {project.status} </span>
        ) : project.status == 'completed' ? (
          <span  className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-green-500" > {project.status} </span>
        ) :
          <span style={{ color: 'yellow' }} className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-green-400" > {project.status} </span>
        }
      </div>
      <div className="mt-8 text-white sm:pr-8">
        <p className="mt-2 hidden text-sm sm:block text-gray-400">
          {project.desc}
        </p>
      </div>
    </Link>
  )
}

export default Project