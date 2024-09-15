import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../backend";
// import "./signin.css";

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit=e=>{
    e.preventDefault()
    setValues({...values})
    axios.post(`${API}/auth/register`,values)
    .then(res => {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT
      }
    )}).catch(err => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT
      })})
    
    setValues(
      {
        name:"",
        email:"",
        password:"",
    }
    )
    props.history.push('/login')
 }

  return (
    <div className="loginform">
      <form>
        <h1 className="text-center">
          <h3>WELCOME</h3>
        </h1>
        <div className="text-center">
          <h3>Create account</h3>
        </div>
        <div>
          <h3>Name</h3>
          <input
            name="name"
            value={values.name}
            type="text"
            placeholder="Enter name"
            onChange={handleChange("name")}
          />
        </div>
        <div>
          <h3>Email address</h3>
          <input
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

        <button type="submit" onClick={onSubmit}>
          Sign up
        </button>
        <h4>
          Already registered? <Link to="/login">login</Link>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
