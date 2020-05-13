import React from 'react';

const Form = (props) => {
    const{inputs, setInputs} = props; /* destructuring props from App.jsx */

    const onChange = (e) => {
        setInputs({ 
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                onChange={ onChange }
                type="text" 
                name="firstName" /* name is where it gets the info from */
            />
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
                onChange={ onChange }
                type="text" 
                name="lastName" /* name is where it gets the info from */
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                onChange={ onChange }
                type="text" 
                name="email" /* name is where it gets the info from */
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                onChange={ onChange }
                type="text" 
                name="password" /* name is where it gets the info from */
            />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
                onChange={ onChange }
                type="text" 
                name="confirmPassword" /* name is where it gets the info from */
            />
            </div>
            
            
            
            
        </form>
    );
}
export default Form;