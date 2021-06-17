import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../src/contexts/authContext";

export const PrivateRoute = (props) => {
  const { isUserLoggedIn } = useAuth();

  return (
    <>
      {isUserLoggedIn ? (
        <Route {...props} />
      ) : (
        <Redirect
          state={{
            from: props.path
          }}
          replace
          to="/login"
        />
      )}
    </>
  );
};
