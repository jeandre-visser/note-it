import React from 'react'

const NoteForm = () => {
  return (
    <form className="w-full max-w-xl bg-[#ff914d] shadow-md rounded-2xl p-6 mb-4" >
      <div className="gap-12 flex flex-row justify-start">
        <div>
          <label className="block text-white text-lg font-bold mb-2" >
            Title
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"/>
        </div>
        <div>
          <label className="block text-white text-lg font-bold mb-2" >
            Tags
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
        </div>
      </div>
    </form>
  )
}

export default NoteForm