import axios from "axios";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Button from "./Button";

type Props = {
  id: string;
  name: string;
  ingredients: string[];
  directions: string;
  category: string;
  isFavorite: boolean;
  prepTime: string;
  image: string;
};

const RecipeSummary = (props: Props) => {
  const handleFav = async () => {
    console.log("favorited");
    const response = await axios.put(
      process.env.REACT_APP_API_URI + "/favoritepost/:id",
      {
        id: props.id,
      },
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="flex p-4">
      {/* left container  */}
      <div className="flex items-center justify-center w-2/5">
        {/* image container  */}
        <div className="h-[200px] w-[300px] overflow-hidden flex items-center">
          <img
            src={props.image}
            alt={props.name}
            className="hover:scale-[1.1] duration-300 rounded-md"
          />
        </div>
      </div>
      {/* right container  */}
      <div className="w-2/5 flex flex-col items-start p-2">
        <h3 className="py-4 text-2xl">{props.name}</h3>
        <div className="flex">
          <span className="bg-green-300 rounded-md p-1">{props.category} </span>
          <span className="p-1"> | {props.prepTime}</span>
        </div>
        {props.ingredients.map((item, index) => {
          while (index < 4) {
            return <p>- {item}</p>;
          }
        })}
        <Button id={props.id}>Sounds good!</Button>
      </div>
      <div className="w-1/5 p-4 flex items-end">
        {props.isFavorite ? (
          <BsHeart size={25} onClick={() => handleFav()} />
        ) : (
          <BsHeartFill size={25} />
        )}
      </div>
    </div>
  );
};

export default RecipeSummary;
