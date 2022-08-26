import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

interface RecipeData {
  name: string;
  ingredients: string[];
  directions: string;
  category: string;
  image: File | null;
}

const NewRecipe: React.FunctionComponent = () => {
  const [recipeValues, setRecipeValues] = useState<RecipeData>({
    name: "",
    category: "",
    ingredients: [""],
    directions: "",
    image: null,
  });
  useEffect(() => {
    document.title = "Recipes - New";
  });
  //handle file input
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setRecipeValues((prevRecipeValues) => ({
      ...prevRecipeValues,
      image: event.target.files ? event.target.files[0] : null,
    }));
  };
  // submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", recipeValues.name);
    recipeValues.ingredients.forEach((element) => {
      formData.append("ingredients", element);
    });
    formData.append("category", recipeValues.category);
    formData.append("directions", recipeValues.directions);
    recipeValues.image && formData.append("image", recipeValues.image);

    const response = await axios.post(
      `${process.env.REACT_APP_API_URI}/postrecipe`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-2/3">
        <p>You will enter a new recipe here</p>
        <form
          onSubmit={(event) => handleSubmit(event)}
          encType="multipart/form-data"
          className="flex flex-col"
        >
          <label htmlFor="name" className="m-2">
            Name:
            <input
              type="text"
              name="name"
              className="border-black border-2 rounded-md ml-2"
            />
          </label>
          <label htmlFor="ingredients" className="m-2">
            Ingredients:
            <input
              type="text"
              name="ingredients"
              className="border-black border-2 rounded-md ml-2"
            />
          </label>
          <label htmlFor="category" className="m-2">
            Category:
            <input
              type="text"
              name="category"
              className="border-black border-2 rounded-md ml-2"
            />
          </label>
          <label htmlFor="directions" className="m-2">
            Directions:
            <textarea
              // type="text"
              name="directions"
              className="border-black border-2 rounded-md ml-2 h-24 w-[600px]"
            />
          </label>
          <input
            className="p-2"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input className="border-black" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
