import { BsHeart, BsHeartFill } from "react-icons/bs";

type Props = {
  name: string;
  ingredients: string[];
  directions: string;
  category: string;
  isFavorite: boolean;
  prepTime: string;
  image: string;
};

const RecipeSummary = (props: Props) => {
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
        ...
      </div>
      <div className="w-1/5 p-4">
        {props.isFavorite ? <BsHeart size={25} /> : <BsHeartFill size={25} />}
      </div>
    </div>
  );
};

export default RecipeSummary;
