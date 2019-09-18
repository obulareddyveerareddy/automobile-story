import React from "react";
import { HashRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "materialize-css/sass/materialize.scss";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import HomeModule from "./modules/home";
import SignInModule from "./modules/signIn";
import SignUpModule from "./modules/signUp";
import ConfirmSignUp from "./modules/signUp/confirmSignUp";

Amplify.configure(config);

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppContainer>
      <HashRouter>
        <Route path="/auth/signIn" exact component={SignInModule} />
        <Route path="/auth/signUp" exact component={SignUpModule} />
        <Route path="/auth/signUp/confirm" exact component={ConfirmSignUp} />
        <Route path="/" exact component={HomeModule} />
      </HashRouter>
    </AppContainer>
  );
};

export default App;
