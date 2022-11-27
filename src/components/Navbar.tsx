import { images } from '../constants/index';

const Navbar = () => {

  return (
    <div className="p-4 bg-[#ff914d] rounded-xl mb-8 flex justify-start items-center gap-5">
      <img src={images.logoOutline} alt="logo" className="w-14" />
      <h1 className="text-[2rem] font-semibold">NoteIt</h1>
    </div>
  )
}

export default Navbar