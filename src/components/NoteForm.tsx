import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <form className="w-full max-w-xl bg-[#ff914d] shadow-md rounded-2xl p-6" >
      <div className="gap-12 flex flex-row justify-start mb-4">
        <div>
          <label className="block text-white text-xl font-bold mb-2" >
            Title
          </label>
          <input className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"/>
        </div>
        <div>
          <label className="block text-white text-xl font-bold mb-2" >
            Tags
          </label>
          <CreatableReactSelect isMulti className="min-w-[220.5px] block"  />
        </div>
      </div>
        <div>
          <label className="block text-white text-xl font-bold mb-2" >
            Body
          </label>
          <textarea className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" rows={12} />
        </div>
    </form>
  )
}

export default NoteForm