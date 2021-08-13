import { IonAlert, IonInput, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import InappBrowser from "../../components/InappBrowser";
import "./Alert.scss";

export default function Alert(props: any) {
  const [error, setError] = useState<boolean>(false);

  function alertAction(item, actionType) {
    props.alertProps.alertAction(item, actionType);
  }
  return (
    <IonAlert
      id="alert"
      isOpen={props.alertProps.isShow}
      // onDidDismiss={() => !props.alertProps.isShow}
      header={props.alertProps.header}
      message={
        "<div class='text-style'> " + props.alertProps.icon + "<br/> Are you sure to  " +
        props.alertProps.content +
        "<div class='redColor'> " +
        props.alertProps.message +
        "</div>" +
        "<div class='row message2-text'>"+props.alertProps.itemName+"</div>"
        + "</div>"
      }
      inputs={props.alertProps.inputs}
      buttons={
        [
          {
            text: "Continue",
            role: "confirm",
            handler: (e) => {
              console.log("data",e)
              alertAction(e, true);
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              alertAction("",false);
            },
          },
        ]}
    />
  );
}
