import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonIcon,
  IonGrid,
  IonLabel, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet} from "@ionic/react";
import "../containerCard/ContainerCard.scss";
import { closeOutline } from "ionicons/icons";
import RoundedAvatar from "../../../../components/Avatar/RoundedAvatar";
import SlideUpModal from "../../../../components/PopUp/SlideUpModal";

interface BookingContainerParam {
  container_number?: string;
  consigneeName?: string;
  pickUpLocation?: string;
  dropLocation?: string;
  bookingStatus?: string;
  trackClick?(e: any): void;
  closeClick?(e: any): void;
  viewClick?(e: any): void;
  noEvent?(e: any): void;
  userType?: string;
  bookingNumber?: string;
  dropZone?: string;
  dropTime?: string;
  boeNumber?: string;
  containerWeight?: string;
  isoCode?: string;
  storageValidity?: string;
  holdAuthority?: string;
  initials?: string;
  cancelRemarks?: string;
  containerStatus?: string;
  containerType?: string;
}

const ContainerCard: React.FC<BookingContainerParam> = (
  BookingContainerParam
) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("BookingContainerParam", BookingContainerParam)
  }, []);

  function ContainerDetails() {
    return (
      <div id="slide-up-details">
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <RoundedAvatar color={"#1DB3FE"} name={BookingContainerParam?.initials} />
            </IonCol>
            <IonCol size="10">
              <span className="label-text">{BookingContainerParam?.container_number}</span>
              <hr className="header-text" />
            </IonCol>
            <IonCol size="1">
              <IonIcon icon={closeOutline} className="close-icon" onClick={() => setShowModal(false)} />
            </IonCol>
          </IonRow>
          <IonRow className="row-text">
            <IonCol className="column-space" size="5">
              <IonLabel>
                Declaration Number
              </IonLabel>
            </IonCol>
            <IonCol className="column-space" size="4">
              <IonLabel>
                Container Wt
              </IonLabel>
            </IonCol>
            <IonCol className="column-space">
              <IonLabel>
                ISO Code
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="data-text">
            <IonCol className="column-space" size="5">
              <IonLabel>
                {BookingContainerParam?.boeNumber}
              </IonLabel>
            </IonCol>
            <IonCol className="column-space" size="4">
              <IonLabel>
                {BookingContainerParam?.containerWeight}
              </IonLabel>
            </IonCol>
            <IonCol className="column-space" >
              <IonLabel>
                {BookingContainerParam?.isoCode}
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="row-text">
            <IonCol className="column-space" size="5">
              <IonLabel>
                Storage Validity
              </IonLabel>
            </IonCol>
            <IonCol className="column-space" size="4">
              <IonLabel>
                Hold Authority
              </IonLabel>
            </IonCol>
            <IonCol className="column-space">
              <IonLabel>
                Pickup
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="data-text">
            <IonCol className="column-space" size="5">
              <IonLabel>
                {BookingContainerParam?.storageValidity}
              </IonLabel>
            </IonCol>
            <IonCol className="column-space" size="4">
              <IonLabel>
                {BookingContainerParam?.holdAuthority}
              </IonLabel>
            </IonCol>
            <IonCol className="column-space">
              <IonLabel>
                {BookingContainerParam?.pickUpLocation}
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="row-text">
            <IonCol className="column-space">
              <IonLabel>
                Drop Location
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="data-text">
            <IonCol className="column-space">
              <IonLabel>
                {BookingContainerParam?.dropLocation}
              </IonLabel>
            </IonCol>
          </IonRow>
          {BookingContainerParam?.containerStatus == "CNCL" &&
            <>
              <IonRow className="row-text">
                <IonCol className="column-space" size="5">
                  <IonLabel>
                    Cancelled on
                  </IonLabel>
                </IonCol>
                <IonCol className="column-space">
                  <IonLabel>
                    Reason for cancellation
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="data-text">
                <IonCol className="column-space" size="5">
                  <IonLabel>
                    {BookingContainerParam?.storageValidity}
                  </IonLabel>
                </IonCol>
                <IonCol className="column-space">
                  <IonLabel>
                    {BookingContainerParam?.cancelRemarks}
                  </IonLabel>
                </IonCol>
              </IonRow>
            </>}
            {(BookingContainerParam.bookingStatus == "SUCC" && BookingContainerParam?.containerStatus !== "CNCL") && <IonRow>
              <IonButton
                className="link-text"
                fill="clear"
                onClick={BookingContainerParam.closeClick}
              >
                Delete Container
              </IonButton>
            </IonRow>}
        </IonGrid>
      </div>
    )
  }

  return (
    <div id="container-card">
      <SlideUpModal
        showModal={showModal}
        openOrCloseModal={(status) => setShowModal(status)}
        content={<ContainerDetails />}
      />
      <IonCard className="lightShadow"
        style={BookingContainerParam?.containerStatus == "CNCL" ? { border: "1px solid #707070" } : {}}>
        <IonCardContent style={{ padding: 0 }} onClick={() => setShowModal(true)}>
          <IonRow className="bottomDivider-truck" >
            <IonCol className="marginLeftTop-truck">
              <div className="ion-float-left">
                <sub className="data-font">Container No</sub>
                <div className="data-font">
                  {BookingContainerParam.container_number}
                </div>
              </div>
            </IonCol>
            <IonCol className="marginLeftTop-truck">
              <div>
                <sub className="regular-font">Container Type</sub>
                <div className="data-font">
                  {BookingContainerParam.containerType}
                </div>
              </div>
            </IonCol>
            <IonCol className="marginLeftTop-truck">
              {BookingContainerParam.userType !== "CLEARING_AGENT" &&
                <div>
                  <sub className="regular-font">Consignee Details</sub>
                  <div className="data-font" style={{ maxWidth: "100px" }}>
                    {BookingContainerParam.consigneeName}
                  </div>
                </div>}
            </IonCol>
          </IonRow>
          <IonRow className="bottomDivider-truck">
            <IonCol className="margin-2nd-row">
              <div className="ion-float-left">
                <sub className="regular-font">Pickup</sub>
                <div className="data-font">
                  {BookingContainerParam.pickUpLocation}
                </div>
              </div>
            </IonCol>
            <IonCol className="margin-2nd-row">
              <div className="ion-float-right">
                <sub className="regular-font">Drop Details</sub>
                <div className="data-font">
                  {BookingContainerParam.dropZone}
                </div>
              </div>
            </IonCol>
            <IonCol className="margin-2nd-row">
              <div className="ion-float-right">
                <IonRow className="data-font" style={{ whiteSpace: "pre-wrap" }}>
                  <IonCol size="2" style={{ paddingRight: "20px" }}>
                    <IonIcon src="/assets/icon/calendar.svg" style={BookingContainerParam.containerStatus == "CNCL" ? { stroke: "#5B5B5B" } : {}} />
                  </IonCol>
                  <IonCol>{BookingContainerParam.dropTime}</IonCol>
                </IonRow>
              </div>
            </IonCol>
          </IonRow>
        </IonCardContent>
        <IonCardContent style={{ padding: 0 }}>
          <IonRow className="booking-row">
            <IonCol className="right-divider">
              <IonIcon src={BookingContainerParam.containerStatus == "CNCL" ? "assets/icon/track-truck-grey.svg" : "assets/icon/track-truck.svg"}
                className="right-divide-button"
                onClick={BookingContainerParam.containerStatus == "CNCL" ? BookingContainerParam.noEvent : BookingContainerParam.trackClick} />
            </IonCol>
            <IonCol className="right-divider"
              style={BookingContainerParam.bookingStatus !== "SUCC" ? { border: "none" } : {}}>
              <IonIcon
                src={BookingContainerParam.containerStatus == "CNCL" ? "assets/icon/edit-contact-grey.svg" : "assets/icon/edit-contact.svg"}
                className="right-divide-button"
                onClick={BookingContainerParam.containerStatus == "CNCL" ? BookingContainerParam.noEvent : BookingContainerParam.viewClick} />
            </IonCol>
            {BookingContainerParam.bookingStatus == "SUCC" && <IonCol
              className="right-divider"
              style={{ border: "none" }}
            >
              <IonIcon src="assets/icon/delete.svg" className="delete-button" onClick={BookingContainerParam.closeClick} />
            </IonCol>}
            {BookingContainerParam.containerStatus == "CNCL" && <IonCol
              className="right-divider"
              style={{ border: "none", color: "#FF3E3E" }}
            >
              <div className="data-font" style={{ maxWidth: "100px" }}>
                Cancelled
              </div>
            </IonCol>}
          </IonRow>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default React.memo(ContainerCard);
