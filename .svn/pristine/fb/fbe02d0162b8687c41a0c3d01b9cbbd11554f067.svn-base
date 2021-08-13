import { IonButton, IonIcon, IonLabel, IonTabButton } from "@ionic/react";
import React from "react";
import "./Footer.scss";
import { useHistory } from "react-router-dom";

export default function Footer() {
  let history = useHistory();
  return (
    <div className="footer-container">
      {/* <div className="footer-button">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </div>
      <div className="footer-button">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </div>
      <div className="footer-button">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </div>
      <div className="footer-button">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </div>
      <div className="footer-button">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </div>
      <IonButton className="footer-button" fill="clear">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
      </IonButton> */}
      <IonTabButton className="footer-button" href="/tabs/landing">
        <IonIcon src="assets/icon/home-new.svg" className="footer-button" />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton className="footer-button" href="/tabs/addresses">
        <IonIcon src="assets/icon/address.svg" className="footer-button" />
        <IonLabel>Addresses</IonLabel>
      </IonTabButton>
      <IonTabButton className="footer-button"></IonTabButton>
      <IonTabButton className="footer-button" href="/tabs/status">
        <IonIcon src="assets/icon/status.svg" className="footer-button" />
        <IonLabel>Status</IonLabel>
      </IonTabButton>{" "}
      <IonTabButton className="footer-button" href="/tabs/profile">
        <IonIcon
          src="assets/icon/profile.svg"
          className="footer-button button"
        />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </div>
  );
}
