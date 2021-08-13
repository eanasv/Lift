import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import {
  bookOutline,
  closeOutline,
  helpCircleOutline,
  personOutline,
  powerOutline,
  settingsOutline,
} from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router";

import "./ProfileMenu.scss";
interface ProfileProps extends RouteComponentProps {}

const ProfileMenu: React.FC<ProfileProps> = (props) => {
  const closeThis = () => {
    console.log(props);
    props.history.goBack();
  };
  return (
    <IonPage className="profile-page">
      <IonContent className="profile-menu-content">
        <div className="close-icon">
          <IonIcon onClick={(e) => closeThis()} icon={closeOutline}></IonIcon>
        </div>
        <div className="menu-links">
          <ul>
            <li>
              <IonIcon
                onClick={(e) => closeThis()}
                icon={personOutline}
              ></IonIcon>{" "}
              My Profile
            </li>
            <li>
              {" "}
              <IonIcon
                onClick={(e) => closeThis()}
                icon={bookOutline}
              ></IonIcon>{" "}
              My Jobs
            </li>
            <li>
              <IonIcon
                onClick={(e) => closeThis()}
                icon={settingsOutline}
              ></IonIcon>
              Settings
            </li>
            <li>
              <IonIcon
                onClick={(e) => closeThis()}
                icon={helpCircleOutline}
              ></IonIcon>
              Help & Support{" "}
            </li>
            <li>
              <IonIcon
                onClick={(e) => closeThis()}
                icon={powerOutline}
              ></IonIcon>
              Logout
            </li>
          </ul>
        </div>
        <div className="tnc">Privacy policy - Terms and Conditions.</div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileMenu;
