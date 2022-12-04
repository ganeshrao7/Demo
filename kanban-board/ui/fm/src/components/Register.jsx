import React, { useState,useEffect } from "react";
import './RegisterStyle.css';
import { useNavigate} from 'react-router-dom';

export const Register = () => {
    const initialValues = { username: "",phoneNumber:"", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    const navigate = useNavigate();
   
    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/');
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]); 
      const validate =(values) => {
        const errors = {};
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regex = ^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if(!values.phoneNumber){
            errors.phoneNumber = "Phone Number is required"
        }
        // else if ()
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
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
        <label>Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.userName}
              onChange={handleChange}
            />
            <p>{formErrors.userName}</p>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter the phone number"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
            <p>{formErrors.phoneNumber}</p>
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
            <div className="buttons">
            <button className="login" type="submit">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;
        
        </div>
        <button className="link-btn1" onClick={navigateLogin}>Already have an account? Login here.</button> 
        </form>
        
    </div>
    COPYRIGHT © Kanban Board 2022. ALL RIGHTS RESERVED. &nbsp;&nbsp;&nbsp;&nbsp; <a href="/about" >About Us</a>&nbsp;&nbsp;<a href="/privacy">Privacy Policy</a>
    </div>
    )
}
export default Register;