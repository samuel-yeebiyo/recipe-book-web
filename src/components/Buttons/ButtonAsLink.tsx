import { Link } from "react-router-dom";

type Props = {
  children: any;
  id: string;
};

const ButtonAsLink = ({ children, id }: Props) => {
  return (
    <div>
      <Link to={id} className="p-1 border-black rounded-lg bg-white uppercase">
        {children}
      </Link>
    </div>
  );
};

export default ButtonAsLink;
