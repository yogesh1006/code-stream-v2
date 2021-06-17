import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider} from "./contexts/authContext";
import { UserDataProvider} from "./contexts/userDataContext";


ReactDOM.render(
  <React.StrictMode>
      <UserDataProvider>
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
