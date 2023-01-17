import React from "react";

function login() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Log in / Sign in
      </h1>
      <div className="loginForm">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            login
          </button>
          <div style={{ fontSize: "1.2rem", marginTop: "3px" }}>
            forgot{" "}
            <a href="/" style={{ fontSize: "1.2rem", textDecoration: "none" }}>
              password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default login;
