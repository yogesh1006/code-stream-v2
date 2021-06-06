import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../backend";
import "./signin.css";

const Signin = (props) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
      });

      
      const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values });
    
        axios.post(`${API}/auth/login`,values).then((response) => {
          let data= response.data.data
    
          if(data.token){
    
            localStorage.setItem("jwt",data.token)
          }
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT
          });
          setValues({
            email: "",
            password: "",
          });
          props.history.push("/");
      
        }).catch(err =>{
          console.log(err.response);
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT
          });
        });
       
    
      };
    
  return (
    <div className="loginform">
      <form >
        <h1 className="text-center">
          <h3>WELCOME BACK</h3>
        </h1>
        <div className="text-center">
          <h3>Login to your account</h3>
        </div>
        <div>
          <h3>Email address</h3>
          <input
            size="sm"
            name="email"
            value={values.email}
            type="email"
            placeholder="Enter email"
            onChange={handleChange("email")}
          />
        </div>

        <div>
          <h3>Password</h3>
          <input
            size="sm"
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
          />
        </div>

        <button  type="submit" onClick={onSubmit}>
          Sign in
        </button>
        <h4>
          Not registered yet? <Link to="/register">Register</Link>
        </h4>
      </form>
    </div>
  );
};

export default Signin;
