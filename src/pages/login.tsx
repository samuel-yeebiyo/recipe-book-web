import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Recipes - Login";
  });
  return (
    <div>
      <div className="flex items-center justify-center">
        <p>Login component here</p>
      </div>
    </div>
  );
};

export default Login;
