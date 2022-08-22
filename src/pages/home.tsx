import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Recipes - Home";
  });
  return (
    <div>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
