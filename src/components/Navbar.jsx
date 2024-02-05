import Switcher from './Switcher'
import { IoGrid } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-slate-700 flex items-center transition-all duration-500 ease-in-out">
      <div className='flex justify-center items-center mr-auto mx-3 gap-2'>
        <IoGrid size={24} color='skyblue' />
        <h1 className="text-black dark:text-white text-xl flex justify-center items-center m-auto text-center font-medium transition-all duration-500 ease-in-out">Project Grid</h1>
      </div>
      <div className='p-2 m-3 flex justify-center items-center border-2 rounded-md dark:border-slate-500'>
        <Switcher />
      </div>
    </nav>
  )
}

export default Navbar