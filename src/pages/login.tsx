import { useEffect } from "react";
import LoginButton from "../components/LoginButton";

const Login = () => {
  useEffect(() => {
    document.title = "Recipes - Login";
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-3/5 w-3/5 border-2 p-4 border-gray-500 rounded-md">
        <p className="font-semibold text-xl">Pick a Login Option</p>
        <LoginButton value="http://localhost:8008/auth/google" />
        <LoginButton value="http://localhost:8008/auth/google" />
      </div>
    </div>
  );
};

export default Login;
