import { BsApple, BsGoogle, BsTwitter } from "react-icons/bs";

type Props = {
  value: string;
  children: string;
  service: string;
};

const LoginButton = ({ value, children, service }: Props) => {
  const handleClick = () => {
    console.log(value);
    window.open(value, "_self");
  };
  return (
    <div className=" flex items-center justify-center mt-6">
      <span
        className="flex justify-around md:justify-evenly items-center font-extrabold p-2 rounded bg-[#4c8bf5] border-black w-3/4 md:w-1/2 text-white cursor-grab"
        onClick={() => handleClick()}
      >
        {service === "Google" ? (
          <BsGoogle size={15} />
        ) : service === "Twitter" ? (
          <BsTwitter size={15} />
        ) : (
          <BsApple size={15} />
        )}
        {children}
      </span>
    </div>
  );
};

export default LoginButton;
