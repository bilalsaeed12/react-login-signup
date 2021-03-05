import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group" className="login" className="signup" >
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="email" />
                </div>

                <div className="form-group" className="login" className="signup">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group" className="login" className="signup">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>

                <div className="form-group" className="login" className="signup">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                
                <div className="form-group" className="login" className="signup">
                    <label>Mobile Number</label>
                    <input type="password" className="form-control" placeholder="Mobile Numbers" />
                </div>
                
                <div className="form-group" className="login" className="signup">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" />
                </div>

                
                <div className="form-group" className="login" className="signup">
                    <label>CNIC</label>
                    <input type="password" className="form-control" placeholder="CNIC" />
                </div>
                
                <div className="form-group" className="login" className="signup">
                    <label>Upload Document</label>
                    <input type="text" className="form-control" placeholder="Upload Document" />
                </div>

                

                <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}