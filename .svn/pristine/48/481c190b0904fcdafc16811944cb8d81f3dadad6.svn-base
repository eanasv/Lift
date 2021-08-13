import { IonCard, IonCardContent, IonLabel } from "@ionic/react";
import React from "react";
//import { containerType } from "../../data";
import { dropIntervals } from "../../util/Constants";
import SimpleDropdown from "../dropdownInput/SimpleDropdown";
import Icon from "../Icon";
import UnderLineOnly from "../InputBorders/UnderLineOnly";

interface SingleLocContainerCardProps {
  icon: any;
  arrowDownIcon: any;
  item: any;
  updateDate: any;
  containerList?: any;
}

const SingleLocContainerCard: React.FC<SingleLocContainerCardProps> = ({
  icon,
  arrowDownIcon,
  item,
  updateDate,
  containerList,
}) => {
  console.log(item);
  return (
    <IonCard className="multi-card">
      <IonCardContent>
        <div className="container">
          <div className="top-part">
            <div className="cont-icon">
              <Icon iconProps={icon} />
            </div>
            <div className="second-col">
              <div className="first-row">{item.container_number}</div>
              <div className="sec-row">
                Storage Validity <IonLabel> 11/2/2021</IonLabel>
              </div>
            </div>
            <div className="third-col">
              <UnderLineOnly
                className="black-underLine"
                content={
                  <SimpleDropdown
                    name={"containerType"}
                    value={item.containerType}
                    // errors={errors.dropInterval}
                    type="text"
                    required={true}
                    onChange={(arg1, arg2) => updateDate(arg1, arg2)}
                    datatype="TEXT"
                    placeholder="Container Type"
                    listValues={containerList} // || containerType}
                    icon2={arrowDownIcon}
                    className="firstElement rightGap"
                  />
                }
              />
            </div>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
export default SingleLocContainerCard;
