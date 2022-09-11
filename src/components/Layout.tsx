import NavBar from "./NavBar";

type Props = {
  children: any;
  user: any;
};

const Layout = ({ children, user }: Props) => {
  return (
    <div className="flex min-h-screen">
      {user ? <NavBar user={user} /> : <div></div>}
      <div className="w-screen">{children}</div>
    </div>
  );
};

export default Layout;
