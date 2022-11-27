import { images } from '../constants/index';

const Navbar = () => {

  return (
    <div className="p-4 bg-[#ff914d] rounded-xl mb-8">
      <img src={images.logoOutline} alt="logo" className="w-14" />
    </div>
  )
}

export default Navbar