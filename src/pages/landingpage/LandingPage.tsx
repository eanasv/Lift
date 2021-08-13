import {
  IonAlert,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import * as EndPointURL from "../../util/EndPointURL";
import {
  httpGetCallWithoutHeader,
  httpPatchCallWithoutHeaderAndBody,
  loginWithAgent,
} from "../../services/EndPointApi";
import "./LandingPage.scss";
import Store from "../../redux/Store";
import * as reduxActions from "../../redux/actions/AllActions";

interface LandingPageProps extends RouteComponentProps {}
function LandingPage() {
  let history = useHistory();
  var userDetails = Store.getState().CheckUserStatus.user;
  const [notficationCount, setNotificationCount] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState([]);

  useEffect(() => {
    console.log("userDetails", userDetails);
    var response = httpGetCallWithoutHeader(
      EndPointURL.fetchCountsOfUnreadNotificationsUrl
    );
    response.then((result) => {
      if (result.success) setNotificationCount(result.data.data.dataItems[0]);
    });
  }, []);

  useEffect(() => {
    if (userDetails.userType === undefined || userDetails.agents === null) {
      console.log(userDetails);
    } else if (userDetails.agents.length > 1 && userDetails.selectedAgent == undefined) {
      userDetails.agents.map((item: any, index: number) =>
        input.push({
          type: "radio",
          label: item.agentCode + "-" + item.agentName,
          value: item,
        })
      );
      setInput(input);
      if (showModal) {
      } else {
        console.log("showModal", showModal);
        setShowModal(true);
      }
      console.log("yes showmaodal", showModal);
    } else if (userDetails.agents.length == 1) {
      let data = userDetails.agents.find((e) => true);
      var selectedAgent = reduxActions.AddSelectedAgent(data);
      if (selectedAgent) Store.dispatch(selectedAgent);
    }
  }, [userDetails]);

  const clickedNotification = async () => {
    if (notficationCount !== "0") {
      var response = await httpPatchCallWithoutHeaderAndBody(
        EndPointURL.fetchAllNotificationUrl
      );
      if (await response.success) {
        setNotificationCount("0");
        history.push("/notifications");
      }
    } else history.push("/notifications");
  };

  const selectUserType = async (data: any) => {
    setShowModal(false);
    console.log(data);
    let url =
      EndPointURL.loginAgent +
      "?agentCode=" +
      data.agentCode +
      "&agentType=" +
      data.agentType;

    var endPointHeader = {
      userName: userDetails.userName,
      userType: "IMPORTER_APP",
    };

    var response = await loginWithAgent(url, endPointHeader);
    var result = response.data.data.dataItems[0];
    if (await response.success) {
      var accessToken = await reduxActions.AddAccessToKen(result.accessToken);
      if (accessToken) Store.dispatch(accessToken);

      var agentType = await reduxActions.AddAgentType(
        // result.user.activeCompanyCode
        result.user.userType
      );
      if (agentType) Store.dispatch(agentType);

      // data.isAgentchanged = true;
      var selectedAgent = await reduxActions.AddSelectedAgent(data);

      if (selectedAgent) Store.dispatch(selectedAgent);

      var test = Store.getState().CheckUserStatus;
      console.log("*****", test);
    }
    // }
  };

  return (
    <IonPage className="landing-Page">
      <IonAlert
        isOpen={showModal}
        onDidDismiss={() => !showModal}
        header={"Select Agent Code"}
        subHeader={errorMessage}
        backdropDismiss={false}
        inputs={input}
        cssClass="modal-alert"
        buttons={[
          {
            text: "Continue",
            role: "confirm",
            handler: (data) => {
              console.log("data", data);
              if (data === undefined) {
                setErrorMessage("Please Choose any to proceed");
                return false;
              } else selectUserType(data);
            },
          },
        ]}
      />
      <IonContent>
        <div className="main-container">
          <div className="page-header">
            <div className="page-head-not-button">
              <IonRow onClick={() => clickedNotification()}>
                <IonBadge
                  className={
                    notficationCount === "5+" ? "not-badge1" : "not-badge2"
                  }
                  color="danger"
                >
                  {notficationCount}
                </IonBadge>
                <IonIcon src="assets/icon/bell.svg" />
              </IonRow>
            </div>
            <div className="page-head-text">
              <span className="page-header-welcome-name">
                Hello <IonLabel>{userDetails.firstName}</IonLabel>!
              </span>
              <span>Welcome To Dubai Trade</span>
            </div>
            <div className="page-head-button">
              <IonButton
                className="tube-button"
                onClick={() => {
                  history.push("/quickBook");
                }}
              >
                Quick Book
                <IonIcon slot="end" icon={chevronForwardOutline} />
              </IonButton>
            </div>
          </div>

          <div className="my-bookings">
            <IonCard className="page-card">
              <IonImg src="assets/img/home-declaration.png" />
              <IonCardContent>
                <div className="my-booking-txt">
                  <div className="my-booking-txt-inner">
                    <span className="header-txt">My Booking</span>
                    <span className="sub-txt">
                      Select container and book truck
                    </span>
                  </div>
                  <div className="book-button">
                    <IonButton className="tube-button">Book</IonButton>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          </div>

          <div className="my-bookings">
            <IonCard className="page-card ion-text-center">
              <IonImg src="assets/img/home-status.png" />
              <IonCardContent>
                <div className="my-booking-txt">
                  <div className="my-booking-txt-inner">
                    <span className="header-txt">Status</span>
                    <span className="sub-txt">
                      Check status of your bookings
                    </span>
                  </div>
                  <div className="book-button">
                    <IonButton
                      className="tube-button"
                      onClick={() => history.push("/tabs/status")}
                    >
                      Book
                    </IonButton>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LandingPage;
