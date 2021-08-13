import { IonIcon, IonLabel } from "@ionic/react";
import { caretForwardOutline } from "ionicons/icons";
import React from "react";
import Icon from "../../components/Icon";
import "./DeclarationDetails.scss";

interface declarationDetailsProps {}

const DeclarationDetails: React.FC<declarationDetailsProps> = ({}) => {
  var containerIcon = {
    name: "container",
    slot: "",
    class: "zoom12",
    zoom: 1.8,
  };
  return (
    <div className="decl-details-popup">
      <Icon iconProps={containerIcon} />
      <IonIcon
        class="right-arrow"
        //src="assets/icon/close.svg"
        icon={caretForwardOutline}
        //color="primary"
        //slot="start"
      />
      <div className="relativePosition componentMargins">
        <div className="smallUnderline">
          <IonLabel className="payLabel">Enter Requestor Details</IonLabel>
        </div>
      </div>
    </div>
  );
};
export default DeclarationDetails;
