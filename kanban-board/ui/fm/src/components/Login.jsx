import React, { useState,useEffect } from "react";
import './LoginStyle.css'
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const navigateRegister = () => {
        
        navigate('/register');
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        localStorage.setItem("email", initialValues.email);
		   
		    navigate("/task");
        setIsSubmit(true);
      };
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]); 
      const validate =(values) => {
        const errors = {};
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 20) {
          errors.password = "Password cannot exceed more than 20 characters";
        }
        return errors;

      };


    return (
        <div className="div">
        <div className="auth-form-container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Logged in successfully</div>
      ) : (
        <span></span>
      )}
            
            <h1 className="login">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
            <div class="buttons">
            <button className="login" type="submit">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;
            
            </div>
            <button className="link-btn" onClick={navigateRegister}>Don't have an account? Register here.</button>
        </form> 
        </div>

          COPYRIGHT © Kanban Board 2022. ALL RIGHTS RESERVED. &nbsp;&nbsp;&nbsp;&nbsp; <a href="/about" >About Us</a>&nbsp;&nbsp;<a href="/privacy">Privacy Policy</a>
         
        </div>
    )
}
export default Login;