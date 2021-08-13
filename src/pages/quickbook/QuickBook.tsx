import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import BookQuick from "../../components/BookQuick";
import Header from "../../components/Header";
import PayQuick from "../../components/PayQuick";
import TxtInput from "../../components/txtinput/TxtInput";
import BookTruck from "../booktruck/BookTruck";

import "./QuickBook.scss";
const QuickBook = (props) => {
  console.log(props);
  const [buttonState, setbuttonState] = useState("");

  function onContinue() {
    if (props.location.pathname === "/quickBook/book") setbuttonState("book");
    else if (props.location.pathname === "/quickBook/payment")
      setbuttonState("payment");
  }
  return (
    <IonPage className="quick-book-page">
      {/* <Header label="QuickBook" action="home" /> */}
      <Header
        label="Quick Book"
        action="home"
        // action="home"
        locationProps={props}
        // searchClick={this.onSearchClick}
      />
      <IonContent className="quick-book-content">
        <div className="form-div">
          <IonTabs className="declaration-tab">
            <IonRouterOutlet>
              <Redirect exact path="/quickBook" to="/quickBook/book" />
              <Route
                path="/quickBook/book"
                render={() => <BookQuick buttonAction={buttonState} />}
                exact={true}
              />
              <Route
                path="/quickBook/payment"
                render={() => <PayQuick buttonAction={buttonState} />}
                exact={true}
              />
            </IonRouterOutlet>
            <IonTabBar slot="top">
              <IonTabButton
                tab="location"
                href="/quickBook/book"
                className="quick-tabButton"
              >
                <IonLabel>Book</IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="Payment"
                href="/quickBook/payment"
                className="quick-tabButton"
                disabled={props.location.pathname === "/quickBook/book"}
              >
                <IonLabel>Payment</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <div className="button-div">
            <div className="button-holder" onClick={() => onContinue()}>
              <IonIcon slot="icon-only" icon={arrowForwardOutline} />
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default QuickBook;
