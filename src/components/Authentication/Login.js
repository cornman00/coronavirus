import React, { Component } from "react";
import "../../App.css";

export class Login extends Component {
  render() {
    return (
      <div class="autn" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Log in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <u>
              <a href="#">Forgot your password?</a>
            </u>
            <button>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
