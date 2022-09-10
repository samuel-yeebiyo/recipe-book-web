import axios from "axios";

export type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
  directions: string;
  category: string;
  prepTime: string;
  isFavorite: boolean;
  image: string;
};
export async function getRecipes() {
  let response = await axios.get<Recipe[]>("/recipes", {
    baseURL: process.env.REACT_APP_API_URI,
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
}
