type Props = {
  name: string;
  ingredients: string[];
  directions: string;
  category: string;
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
      <div className="w-3/5 flex flex-col items-start p-2">
        <h3 className="py-4 text-2xl">{props.name}</h3>
        <span className="bg-green-300 rounded-md p-1">{props.category}</span>
        {props.ingredients.map((item, index) => {
          while (index < 4) {
            return <p>- {item}</p>;
          }
        })}
        ...
      </div>
    </div>
  );
};

export default RecipeSummary;
