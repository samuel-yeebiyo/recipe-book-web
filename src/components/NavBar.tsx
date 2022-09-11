import { BiCategory } from "react-icons/bi";
import { FiHeart, FiHome, FiPenTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import Divider from "./Divider";

type Props = {
  user: any;
};

const NavBar = ({ user }: Props) => {
  return (
    <div className="items-center flex flex-col w-[180px] bg-slate-800 border-r border-r-gray-300 p-1">
      <h3 className="hidden md:flex md:mt-[8vh] text-orange-500 font-bold">
        Hello, {user.displayName}{" "}
      </h3>
      <ul className="mt-[8vh] md:mt-0">
        <Divider />
        <li>
          <Link to="/">
            <span className="md:hidden flex items-center text-orange-500 justify-center">
              <FiHome size={30} />
            </span>
            <span className="hidden md:flex text-2xl px-4 text-orange-500 font-bold">
              Home
            </span>
          </Link>
        </li>
        <Divider />
        <li>
          <Link to="/">
            <span className="md:hidden flex items-center text-orange-500 justify-center">
              <FiHeart size={30} />
            </span>
            <span className="hidden md:flex text-2xl px-4 text-orange-500 font-bold">
              Favorites
            </span>
          </Link>
        </li>
        <Divider />
        <li>
          <span className="md:hidden flex items-center text-orange-500 justify-center">
            <BiCategory size={30} />
          </span>

          <span className="hidden md:flex text-2xl px-4 text-orange-500 font-bold">
            Categories
          </span>
        </li>
        <Divider />
        <li>
          <Link to="/newrecipe">
            <span className="md:hidden flex items-center text-orange-500 justify-center">
              <FiPenTool size={30} />
            </span>
            <span className="hidden md:flex text-2xl px-4 text-orange-500 font-bold">
              New Recipe
            </span>
          </Link>{" "}
        </li>
        <Divider />
      </ul>
    </div>
  );
};

export default NavBar;
