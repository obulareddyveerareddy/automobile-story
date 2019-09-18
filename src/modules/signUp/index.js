import React from "react";
import $ from "jquery";
import { Formik } from "formik";
import * as M from "materialize-css/dist/js/materialize";
import styled from "styled-components";
import { API, graphqlOperation } from "aws-amplify";
import { createPerson } from "./../../graphql/mutations";

const DFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginCard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 75%;
  justify-content: space-around;
  align-items: center;
  .action-btns {
    display: flex;
    justify-content: space-between;
  }

  .grid-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  .header {
    background-color: rgba(243, 223, 73, 1);
    padding: 1rem;
  }
`;

const SignUpModule = props => {
  const { history } = props;
  React.useEffect(() => {
    M.textareaAutoResize($("#address"));
    var elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {});
  });

  return (
    <LoginCard>
      <Formik
        initialValues={{
          companyName: "",
          address: "",
          firstName: "",
          lastName: "",
          mobile: "",
          dob: "",
          email: "",
          password: "",
          userName: "",
          pwd: "",
          cpwd: ""
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("==-- OnSubmit --- ", values, setSubmitting);
          const person = await API.graphql(
            graphqlOperation(
              createPerson,
              JSON.stringify({
                input: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  mobile: values.mobile,
                  email: values.email,
                  password: values.password,
                  orgName: values.companyName,
                  address: values.address
                }
              })
            )
          );
          console.log("Person Created ... ", person);
          // history.push({ pathname: "/auth/signUp/confirm", state: newUser });
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
                    Wheel On Accounts
                  </a>
                </div>
              </div>
              <div className="card-content">
                <DFlexColumn>
                  <div className="grid-form">
                    <div className="input-field">
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        name="companyName"
                        id="companyName"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.companyName}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="address">Address</label>
                      <textarea
                        name="address"
                        id="address"
                        className="materialize-textarea"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                      ></textarea>
                    </div>
                  </div>
                  <p className="flow-text">Add Primary Contact</p>
                  <div className="grid-form">
                    <div className="input-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="mobile">Mobile</label>
                      <input
                        name="mobile"
                        id="mobile"
                        type="text"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="pwd">Password</label>
                      <input
                        name="pwd"
                        id="pwd"
                        type="password"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pwd}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="cpwd">Confirm Password</label>
                      <input
                        name="cpwd"
                        id="cpwd"
                        type="password"
                        className="validate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cpwd}
                      />
                    </div>
                    <DFlexColumn>
                      <label>
                        <input
                          name="termsAndConditions"
                          id="termsAndConditions"
                          type="checkbox"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.termsAndConditions}
                        />
                        <span>
                          <a href="/">Terms & Conditions</a>
                        </span>
                      </label>
                    </DFlexColumn>
                  </div>
                </DFlexColumn>
              </div>
              <div className="card-action action-btns">
                <button
                  className="btn waves-effect waves-light grey"
                  type="button"
                  onClick={() => history.push("/")}
                  name="action"
                >
                  Cancel
                </button>
                <button className="btn waves-effect waves-light" type="submit">
                  Create Account
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </LoginCard>
  );
};

export default SignUpModule;
