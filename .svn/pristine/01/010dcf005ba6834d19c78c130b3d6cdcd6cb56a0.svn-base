import {
  IonContent,
  IonFooter,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Payment from "./Payment";
import { useHistory } from "react-router-dom";

interface payQuickProps {
  buttonAction: any;
}

const PayQuick: React.FC<payQuickProps> = ({ buttonAction }) => {
  let history = useHistory();

  useEffect(() => {
    if (buttonAction === "payment") {
      // onContinue();
      console.log("payment");
    }
  }, [buttonAction]);
  var allPayableDetails = history.location.state;
  console.log("paayyyy", allPayableDetails);
  return (
    <IonPage className="BookTruck-Location">
      <IonContent>
        <div className="book-quick">
          <Payment
            allPayableDetails={allPayableDetails}
            buttonAction={buttonAction}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default PayQuick;
