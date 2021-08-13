import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calendar, searchOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import BookTruck from "./BookTruck";

import "./BookTruckTab.scss";

interface BookTruckTabProps extends RouteComponentProps {}

const BookTruckTab: React.FC<BookTruckTabProps> = (props) => {
  return (
    <>
      {/* <IonPage>
        <IonContent> */}
      <IonHeader>
        <IonToolbar className="toolbar" style={{ "--background": "#18274d" }}>
          <IonButtons slot="start">
            <IonBackButton
              style={{ color: "white" }}
              defaultHref="/tabs/speakers"
            />
          </IonButtons>
          <IonTitle
            className="ion-text-center"
            style={{ textAlign: "center", "--color": "white" }}
          >
            Book Truck
          </IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon
                style={{ color: "white" }}
                slot="icon-only"
                icon={searchOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonTabs className="declaration-tab">
        <IonRouterOutlet>
          <Redirect exact path="/tabsb" to="/bookTruckTab/location" />
          <Route
            path="/tabsb/location"
            // component={LandingPage}
            render={() => <BookTruck />}
            exact={true}
          />
          <Route path="/bookTruckTab/review" component={BookTruck} />
          <Route path="/bookTruckTab/payment" component={BookTruck} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="location" href="/bookTruckTab/location">
            <IonLabel>Location</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Review" href="/bookTruckTab/review">
            <IonLabel>Review</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Payment" href="/bookTruckTab/payment">
            <IonLabel>Payment</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      {/* </IonContent>
      </IonPage> */}
    </>
  );
};
export default BookTruckTab;
