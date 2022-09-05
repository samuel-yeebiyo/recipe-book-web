import { useEffect } from "react";
import Divider from "../components/Divider";
import { recipes } from "../components/MockData";
import RecipeSummary from "../components/RecipeSummary";

const Home = () => {
  useEffect(() => {
    document.title = "Recipes - Home";
  });
  return (
    <div>
      <h1 className="text-3xl">My Recipes</h1>
      <h3 className="text-2xl">What would you like to have today?</h3>
      {recipes.map((item, index) => {
        return (
          <>
            <RecipeSummary
              name={item.name}
              ingredients={item.ingredients}
              directions={item.directions}
              image={item.image}
              category={item.category}
            />
            <Divider />
          </>
        );
      })}
    </div>
  );
};

export default Home;
