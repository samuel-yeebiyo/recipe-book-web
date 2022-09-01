import { createContext, useContext } from "react";

export type User = {
  avatarURL: string;
  displayName: string;
  id: string;
  provider: string;
  username: string;
};

export const UserContext = createContext<User | undefined>({
  avatarURL: "",
  displayName: "string",
  id: "",
  provider: "",
  username: "",
});

export const useUserContext = () => useContext(UserContext);
