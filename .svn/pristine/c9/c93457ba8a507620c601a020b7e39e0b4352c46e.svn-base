import React from "react";
import { IonIcon } from "@ionic/react";
import "./Icon.css";
import { createUseStyles } from "react-jss";

export default function Icon(props: any) {
  const classes = useStyles();
  var propsIcon = props.iconProps; // "inputIcon"
  return (
    <IonIcon
      src={"assets/icon/" + propsIcon.name + ".svg"}
      style={{ zoom: propsIcon.zoom }}
      className={
        propsIcon.class
          ? classes[propsIcon.class] + " " + propsIcon.class
          : // : propsIcon.login
            // ? classes[propsIcon.class]
            // : propsIcon.slot === "end"
            // ? classes[propsIcon.class]
            ""
      }
      slot={propsIcon.slot}
    ></IonIcon>
  );
}
const useStyles = createUseStyles({
  zoom12: {
    zoom: 1.4,
  },
  slotEnd: {
    position: "absolute",
    right: 0,
    zoom: 1.5,
    bottom: "1px",
  },
  calenderMargin: {
    zoom: 1.4,
    //marginRight: "0.5rem",
  },
  zoom3: {
    zoom: 3,
  },
  slotStart: {
    position: "absolute",
    zoom: 1.5,
  },
  absolutePosition: {
    position: "absolute",
  },
  lastIcon: {
    zoom: "1.5",
    right: "3px",
    position: "relative",
  },
});
