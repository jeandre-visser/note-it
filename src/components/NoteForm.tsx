import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { useRef } from "react";

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)

  return (
    <form className="w-full max-w-xl bg-[#ff914d] shadow-md rounded-2xl p-6" >
      <div className="gap-12 flex flex-row justify-start mb-4">
        <div>
          <label className="block text-white text-xl font-bold mb-2" >
            Title
          </label>
          <input className="text-lg rounded w-full py-2 px-3 h-10 text-gray-700 leading-tight focus:outline-offset-2 outline-blue-500" id="title" type="text" ref={titleRef} />
        </div>
        <div>
          <label className="block text-white text-xl font-bold mb-2" >
            Tags
          </label>
          <CreatableReactSelect isMulti className=" text-lg text-gray-700 w-[15rem]"  />
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