import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
   console.log(isUserLoggedIn);
  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        isUserLoggedIn,
        setLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
