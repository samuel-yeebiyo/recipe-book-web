import NavBar from "./NavBar";

type Props = {
  children: any;
  user: any;
};

const Layout = ({ children, user }: Props) => {
  return (
    <div className="flex h-screen">
      {user ? <NavBar user={user} /> : <div></div>}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
