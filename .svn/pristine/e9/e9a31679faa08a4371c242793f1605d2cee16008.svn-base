import React, { useState } from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect, RouteComponentProps } from "react-router";
import "./MainTab.scss";
import LandingPage from "./landingpage/LandingPage";
import Status from "./myBooking/status/Status";
import Profile from "./profile/Profile";
import Address from "./address/Address";
import { useHistory } from "react-router-dom";

export default function MainTabs(props: any) {
  let history = useHistory();
  console.log(props.selected)
  const [selected, setSelected] = useState(false);
  const menutabClicked = (e) => {
    console.log(e);
    console.log(props);
    history.push("/profilemenu", { direction: "none" });
  };

  return (
    <div className="ion-tabs">
      <div className="menu-button-div" >
        <div className="menu-button" onClick={menutabClicked}>
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <IonTabs className="ion-tabs-bar">
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/landing" />
          {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route
            path="/tabs/landing"
            render={() => <LandingPage />}
            exact={true}
          />
          <Route
            path="/tabs/status"
            render={() => <Status />}
            exact={true}
          />
          <Route
            path="/tabs/profile"
            render={() => <Profile />}
            exact={true}
          />
          <Route
            path="/tabs/addresses"
            exact
            render={() => <Address/>}
          />
          {/* <Route path="/tabs/schedule/:id" component={SessionDetail} />
          <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
          <Route path="/tabs/map" render={() => <MapView />} exact={true} />
          <Route path="/tabs/about" render={() => <About />} exact={true} /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="landing" href="/tabs/landing">
            <IonIcon src="assets/icon/home-new.svg" className="button"/>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addresses" href="/tabs/addresses">
            <IonIcon src="assets/icon/address.svg" className="button"/>
            <IonLabel>Addresses</IonLabel>
          </IonTabButton>
          <IonTabButton disabled={true}>
          </IonTabButton>
          <IonTabButton tab="status" href="/tabs/status">
            <IonIcon src="assets/icon/status.svg" className="button"/>
            <IonLabel>Status</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/tabs/profile">
            <IonIcon src="assets/icon/profile.svg" className="button"/>
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
};
