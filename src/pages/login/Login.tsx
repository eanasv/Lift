import React, { useState, Suspense, lazy } from "react";

import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonText,
  IonIcon,
} from "@ionic/react";
import {
  add,
  arrowForwardOutline,
  lockClosedOutline,
  personOutline,
} from "ionicons/icons";
import "./Login.scss";
import { setIsLoggedIn, setUsername } from "../../data/user/user.actions";
import { connect } from "../../data/connect";
import { RouteComponentProps } from "react-router";
import { doLogin, fetchAllDeclaration } from "../../services/EndPointApi";
import * as EndPoints from "../../util/EndPointURL";
import TxtInput from "../../components/txtinput/TxtInput";
import InappBrowser from "../../components/InappBrowser";
import { termsAndConditionUrl } from "../../util/Constants";
import * as reduxActions from "../../redux/actions/AllActions";
import Store from "../../redux/Store";

interface OwnProps extends RouteComponentProps { }

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface LoginProps extends OwnProps, DispatchProps { }

const Login: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  //setUsername: setUsernameAction,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [error, setError] = useState<any>({});
  const [form, setForm] = useState({
    username: "",
    password: "",
    submitted: false,
    valid: false,
  });

  const loginClicked = async (e: React.FormEvent) => {
    let errs: any = {};
    e.preventDefault();
    setFormSubmitted(true);

    if (!form.username) {
      errs.username = "Username is required";
    }
    if (!form.password) {
      errs.password = "Password is required";
    }
    if (form.username && form.password) {
      var endPointHeader = {
        userName: form.username,
        password: form.password,
        userType: "IMPORTER_APP",
      };

      var response = await doLogin(EndPoints.loginUrl, endPointHeader);
      if (await response.success) {
        var result = response.data.data.dataItems[0];
        var accessToken = await reduxActions.AddAccessToKen(result.accessToken);
        if (accessToken) Store.dispatch(accessToken);

        var agentType = await reduxActions.AddAgentType(
          // result.user.activeCompanyCode
          result.user.userType
        );
        if (agentType) Store.dispatch(agentType);
        var addUser = await reduxActions.AddUser(result.user);
        if (addUser) Store.dispatch(addUser);
        // if (result.user.agents && result.user.agents.length > 0) {
        //   history.push("/tabs", result);
        // } else {
        var response = await fetchAllDeclaration(
          EndPoints.fetchConfirmDetails + form.username
        );
        if (response.success) {
          var userDetails = response.data.data.dataItems[0];

          if (!response.data.data.dataItems[0].confirmDetails) {
            history.push("/tabs/", response);
          } else {
            history.push("/confirmDetails", userDetails);
            //history.push("/tabs/", userDetails);
          }
        } else {
          errs.errorGeneral = response.data.message;
        }
        // }
        await setIsLoggedIn(true);

        //await setUsernameAction(form.username);
        //history.push("/tabs/", { direction: "none" });
      } else {
        errs.errorGeneral = response.data.message || response.data.error;
        setError(errs);
      }
    }
    setError(errs);
  };
  const handleChange = (e: any, value: any) => {
    setForm({
      ...form,
      [e.target.name]: value,
    });
    setError({ ...error, [e.target.name]: "" });
  };
  var userNmaeIcon = {
    name: "username",
    slot: "start",
    login: true,
    class: "zoom12",
  };
  var passwordIcon = {
    name: "password",
    slot: "start",
    login: true,
    class: "zoom12",
  };
  return (
    <IonPage id="login-page">
      <IonContent>
        <div className="main-container">
          <div className="login-logo">
            <img src="assets/img/dubai_trade_logo.png" alt="Ionic logo" />
          </div>
          <div className="form-content">
            <div className="login-box-header"></div>
            <form noValidate onSubmit={loginClicked} autoComplete="off">
              <IonList className="form-section">
                <div className="login-header">
                  Login
                  <hr />
                </div>
                <TxtInput
                  name={"username"}
                  value={form.username}
                  label="Username"
                  errors={error.username}
                  type="text"
                  required={true}
                  onChange={handleChange}
                  datatype="TEXT"
                  placeholder="Username"
                  icon={userNmaeIcon}
                />

                <TxtInput
                  name={"password"}
                  value={form.password}
                  label="Password"
                  errors={error.password}
                  type="password"
                  required={true}
                  onChange={handleChange}
                  datatype="TEXT"
                  placeholder="Password"
                  icon={passwordIcon}
                />
                <div className="">
                  {error.errorGeneral && (
                    <IonText
                      color="danger"
                      className="validation-message genralError"
                    >
                      <IonLabel className="ion-padding-start">
                        {error.errorGeneral}
                      </IonLabel>
                    </IonText>
                  )}
                </div>

                <div className="login-tnc">
                  <div>by clicking "submit" you agree to our</div>
                  <div
                    onClick={() => InappBrowser(termsAndConditionUrl)}
                    className="tnc"
                  >
                    terms and conditions
                  </div>
                </div>
              </IonList>
              <div className="button-div">
                <div className="button-holder" onClick={loginClicked}>
                  <IonIcon slot="icon-only" icon={arrowForwardOutline} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
  },
  component: Login,
});
