type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default Button;
