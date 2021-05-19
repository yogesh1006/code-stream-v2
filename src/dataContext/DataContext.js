import { createContext, useContext, useReducer } from "react";
import  {reducerFunction} from './reducerFunction'

export const DataContext = createContext();


export function useData() {
    return useContext(DataContext);
  }

const initialState = {
  likedVideos:[],
  history:[],
  playlist:[{
    id: 1,
    name: "My playlist 1",
    videos: ["2WJL19wDH68"],
  },],

};


export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}





  