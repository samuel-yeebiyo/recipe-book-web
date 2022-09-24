import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getRecipes } from "../api/recipes";
import Divider from "../components/Divider";
import { recipes } from "../components/MockData";
import RecipeSummary from "../components/RecipeSummary";

type Error = {
  message: string;
};

type Props = {};

const Home = ({}: Props) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    document.title = "Lets Feast - Home";
  });

  const { data, isLoading, error } = useQuery("getRecipes", getRecipes);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  // if (error) {
  //   return <span>Error: {error.message}</span>
  // }
  return (
    <div>
      <h1 className="text-3xl">My Recipes</h1>
      <h3 className="text-2xl">What would you like to have today?</h3>
      {data
        ? data.map((item, index) => {
            return (
              <>
                <RecipeSummary
                  key={index}
                  id={"recipe/" + item.id}
                  name={item.name}
                  ingredients={item.ingredients}
                  directions={item.directions}
                  isFavorite={item.isFavorite}
                  image={item.image}
                  category={item.category}
                  prepTime={item.prepTime}
                />
                <Divider />
              </>
            );
          })
        : recipes.map((item, index) => {
            return (
              <>
                <RecipeSummary
                  key={index}
                  id={item.id}
                  name={item.name}
                  ingredients={item.ingredients}
                  directions={item.directions}
                  isFavorite={item.isFavorite}
                  image={item.image}
                  category={item.category}
                  prepTime={item.prepTime}
                />
                <Divider />
              </>
            );
          })}
    </div>
  );
};

export default Home;
