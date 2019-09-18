import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import Auth from "@aws-amplify/auth";
import _ from "lodash";

const LoginCard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50%;
  justify-content: space-around;
  align-items: center;
  .action-btns {
    display: flex;
    justify-content: flex-end;
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

const ConfirmSignUp = props => {
  const { history, location } = props;
  const user = _.get(location, "state.user");
  const initialValues = {
    username: user && user.username ? user.username : "",
    code: ""
  };
  return (
    <LoginCard>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          const newUser = await Auth.confirmSignUp(
            values.username,
            values.code
          );
          history.push({ pathname: "/", state: newUser });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">
                <div className="header">
                  <a href="/" className="card-title">
                    Automobile-Story : Confirmation
                  </a>
                </div>
              </div>
              <div className="card-content">
                <div className="grid-form">
                  <div className="input-field col s12">
                    <div>
                      <label htmlFor="username">User Name</label>
                      <input
                        name="username"
                        id="username"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                    </div>
                    <div>
                      <label htmlFor="code">Code</label>
                      <input
                        name="code"
                        id="code"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.code}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-action action-btns">
                <button
                  className="btn waves-effect waves-light red"
                  type="submit"
                  name="action"
                >
                  Validate
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </LoginCard>
  );
};

export default ConfirmSignUp;
