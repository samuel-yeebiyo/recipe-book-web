import axios from "axios";
import { FormEvent, useEffect, useRef } from "react";

const NewRecipe = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = "Recipes - New";
  });
  //handle file input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  // submission
  const handleSubmit = (event: FormEvent) => {
    console.log(inputRef.current);
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", inputRef.current || "none");
    formData.append("fileName", inputRef.current || "none");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(`${process.env.API_URI}/postrecipe`, {}, config);
  };
  return (
    <div>
      <div>
        <p>This is the login page</p>
        <form
          onSubmit={(event) => handleSubmit(event)}
          encType="multipart/form-data"
        >
          <input
            className="p-2"
            type="file"
            name="image"
            accept="image/*"
            ref={inputRef}
            onChange={handleChange}
          />
          <input className="border-black" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
