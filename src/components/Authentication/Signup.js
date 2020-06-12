import React, { Component } from "react";
import "../../App.css";

export class Signup extends Component {
  render() {
    return (
      <div class="autn" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
