import { Link } from "react-router-dom";

type Props = {
  children: any;
  id: string;
};

const Button = ({ children, id }: Props) => {
  console.log(id);
  return (
    <div>
      <Link
        to={"/recipe/" + id}
        className="p-1 border-black border-[1px] rounded-lg bg-white "
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
