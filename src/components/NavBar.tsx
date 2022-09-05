import { BiCategory } from "react-icons/bi";
import { FiHeart, FiHome, FiPenTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import Divider from "./Divider";

type Props = {
  user: any;
};

const NavBar = ({ user }: Props) => {
  return (
    <div className="items-center flex flex-col w-fit border-r border-r-gray-300 p-1">
      <h3 className="hidden md:flex md:mt-[8vh]">Hello, {user.displayName} </h3>
      <ul className="mt-[8vh] md:mt-0">
        <Divider />
        <li>
          <Link to="/">
            <span className="md:hidden flex items-center justify-center">
              <FiHome size={30} />
            </span>
            <span className="hidden md:flex text-xl px-4">Home</span>
          </Link>
        </li>
        <Divider />
        <li>
          <Link to="/">
            <span className="md:hidden flex items-center justify-center">
              <FiHeart size={30} />
            </span>
            <span className="hidden md:flex text-xl px-4">Favorites</span>
          </Link>
        </li>
        <Divider />
        <li>
          <span className="md:hidden flex items-center justify-center">
            <BiCategory size={30} />
          </span>

          <span className="hidden md:flex text-xl px-4">Categories</span>
        </li>
        <Divider />
        <li>
          <Link to="/newrecipe">
            <span className="md:hidden flex items-center justify-center">
              <FiPenTool size={30} />
            </span>
            <span className="hidden md:flex text-xl px-4">New Recipe</span>
          </Link>{" "}
        </li>
        <Divider />
      </ul>
    </div>
  );
};

export default NavBar;
