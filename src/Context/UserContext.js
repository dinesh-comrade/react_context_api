import { createContext, useState, useContext } from "react";

const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = {
  name: "Guest",
  isGuestUser: true,
};

function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  function logIn(username) {
    setUser({
      name: username,
      isGuestUser: false,
    });
  }

  function logOut() {
    setUser(USER);
  }
  return (
    <userContext.Provider value={{ user: user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

function useUserContext() {
  const { user, logIn, logOut } = useContext(userContext);
  return { user, logIn, logOut };
}

export { userContext, useUserContext, UserContextProvider };
