import React from "react";
import styled from "styled-components";

const LoginCard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50%;
  justify-content: space-around;
  align-items: center;
  .action-btns {
    display: flex;
    justify-content: space-between;
  }

  .grid-form {
    display: grid;
    grid-template-columns: 1fr;
  }

  .header {
    background-color: rgba(243, 223, 73, 1);
    padding: 1rem;
  }
`;

const SignInModule = props => {
  const { history } = props;
  return (
    <LoginCard>
      <div className="card">
        <div className="card-header">
          <div className="header">
            <a href="/" className="card-title">
              Wheel On Accounts
            </a>
          </div>
        </div>
        <div className="card-content">
          <div className="grid-form">
            <div className="input-field col s12">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="validate" />
              </div>
              <div>
                <label htmlFor="pwd">Password</label>
                <input id="pwd" type="password" className="validate" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-action action-btns">
          <button
            className="btn waves-effect waves-light red"
            type="button"
            onClick={() => history.push("signUp")}
            name="action"
          >
            Register
          </button>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Sign In
          </button>
        </div>
      </div>
    </LoginCard>
  );
};

export default SignInModule;
