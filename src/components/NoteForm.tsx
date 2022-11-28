import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { FormEvent, useRef } from "react";

type NoteData = {

}

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl bg-[#ff914d] shadow-md rounded-2xl p-6" >
      <div className="gap-4 flex flex-row justify-start mb-4 flex-wrap">
        <div> 
          <label className="block text-white text-xl font-bold mb-2" >
            Title
          </label>
          <input className="w-full appearance-none text-lg rounded py-2 px-3 text-gray-700 leading-tight focus:outline-offset-2 outline-blue-500" id="title" type="text" ref={titleRef} />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-white text-xl font-bold mb-2" >
            Tags
          </label>
          <CreatableReactSelect isMulti className=" text-lg text-gray-700"  />
        </div>
      </div>
      <div>
        <label className="block text-white text-xl font-bold mb-2" >
          Body
        </label>
        <textarea className="mb-4 text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-offset-2 outline-blue-500" id="markdown" rows={12} ref={markdownRef} />
      </div>
      <div className="flex gap-4 justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-5 rounded-xl">
          Save
        </button>
        <Link to=".." >
          <button className="bg-gray-500 hover:bg-gray-700 text-white text-lg font-bold py-3 px-5 rounded-xl">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  )
}

export default NoteForm