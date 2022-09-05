import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Recipes - Home";
  });
  return (
    <div>
      <h1 className="text-3xl">My Recipes</h1>
      <h3>What would you like to have today?</h3>
    </div>
  );
};

export default Home;
