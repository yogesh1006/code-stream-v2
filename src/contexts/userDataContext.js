import { createContext, useContext, useReducer } from "react";
import {reducerFunction} from "../reducers/reducerFunction";


export const UserDataContext = createContext();



const initialState = {
  videolist: [],
  likedVideos: [],
  history: [],
  playlist: [],
};

export function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
}


export function useData() {
    return useContext(UserDataContext);
  }