import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="">
      <div className="">
        <div className="">
          <h4 className="">Login</h4>
          <div className="login">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input border-2 rounded mr-2 pl-2 border-slate-400"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input border-2 rounded mr-2 pl-2 border-slate-400"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="button bg-slate-200 border-2 border-black hover:bg-slate-300 py-0"
                type="submit"
              >
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
