import { useEffect } from "react";
import LoginButton from "../components/LoginButton";

const Login = () => {
  useEffect(() => {
    document.title = "Lets Feast - Login";
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-3/5 w-3/5 border-2 p-4 border-gray-500 rounded-md">
        <p className="font-semibold text-xl">Pick a Login Option</p>
        <LoginButton value={`${process.env.REACT_APP_API_URI}/auth/google`} />
        <LoginButton value={`${process.env.REACT_APP_API_URI}/auth/google`} />
      </div>
    </div>
  );
};

export default Login;
