import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className=" flex justify-between gap-2 ">
        <div>
        <Link to="/">
        <img src={logo} alt="Logo" className="w-10 h-10 m-2 ml-10 "/>
        </Link>
        </div>
      <div className="self-center">
        <Link to="/">
          <button className="m-1 shadow-md bg-gradient-to-r from-lime-300  to-lime-400 cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:text-white h-9 px-3">
            Home Page
          </button>
        </Link>
        <Link to="/characters/page/1">
          <button className="m-1 shadow-md bg-gradient-to-r from-lime-400 to-lime-300  cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:text-white h-9 px-3">
            Characters
          </button>
        </Link>
        <Link to="/locations/page/1">
          <button className="m-1 shadow-md bg-gradient-to-r from-lime-300 to-lime-400 cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:text-white h-9 px-3">
            Locations
          </button>
        </Link>
        <Link to="/episodes/page/1">
          <button className="m-1 shadow-md bg-gradient-to-r from-lime-400 to-lime-300 cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:text-white h-9 px-3">
            Episodes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
