import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import "./Signin.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Signin() {
    const history = useHistory();
    const initialValues = {
        username: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [token , setToken] = useState("")
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        try {
            const response = await axios.post('https://fitnessapp-zzle.onrender.com/login', formValues);
            console.log('Form submission successful', response.data);
            history.push('./home');
         } catch (error) {
            console.error('Error submitting form', error);
         }
    };
    
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        
         
        return errors;
    };
    
    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}
    
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                       <button className="fluid ui button blue" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="text">
                <span>Don't have an account?<Link to={"/signup"}>Sign Up</Link></span>
                </div>
            </div>
        </>
    );
}

export default Signin;