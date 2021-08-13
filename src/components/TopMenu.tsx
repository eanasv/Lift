import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";
import Icon from "./Icon";
import "./TopMenu.scss";

export default function TopMenu(props) {
  return (
    <div>
      <div className="horizontal-scroll">
        <div className="filter-buttons ">
          {props.topMenuProps.map((item, index) => (
            <div
              key={index}
              onClick={() => item.clickedOnTopMenu()}
              className="topMenuFullArea"
            >
              <IonButton className="circ-button" size="small">
                {item.icon && (
                  <div className="icon-padding">
                    <Icon
                      iconProps={{
                        name: item.icon,
                        slot: "",
                        zoom: item.zoom || 0.8,
                      }}
                    />
                  </div>
                )}
                <IonLabel>{item.name && item.name}</IonLabel>
              </IonButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
