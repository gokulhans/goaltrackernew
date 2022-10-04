import React from 'react'

function Project() {
  return (
    <a class="relative block rounded-xl border border-violet-600 p-8 shadow-lg shadow-violet-900" href="" >
      <div className="flex">
        <h5 class="absolute left-8 top-4 text-xl font-bold text-white">Science of Chemistry</h5>
        <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-green-400" > Completed </span>
      </div>
      <div class="mt-8 text-white sm:pr-8">
        <p class="mt-2 hidden text-sm sm:block text-gray-100">
          You can manage phone, email and chat conversations
        </p>
      </div>
    </a>
  )
}

export default Project