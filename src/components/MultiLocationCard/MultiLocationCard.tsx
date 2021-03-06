import { IonCard, IonCardContent, IonLabel } from "@ionic/react";
import moment from "moment";
import React from "react";
//import { containerType } from "../../data";
import { minDate, todayDate } from "../../services/Common";
import { dropIntervals } from "../../util/Constants";
import AddressLink from "../Address/AddressLink";
import Calendar from "../calendar/Calendar";
import SimpleDropdown from "../dropdownInput/SimpleDropdown";
import Icon from "../Icon";
import UnderLineOnly from "../InputBorders/UnderLineOnly";
import "./MultiLocationCard.scss";

interface MultiLocationCardProps {
  icon: any;
  arrowDownIcon?: any;
  item: any;
  containerList?: any;
  updateDate: (arg1, arg2) => any;
}
const calenderIcon = {
  name: "calendar",
  slot: "start",
  class: "calenderMargin absolutePosition zoom12",
};

const MultiLocationCard: React.FC<MultiLocationCardProps> = ({
  icon,
  arrowDownIcon,
  item,
  containerList,
  updateDate,
}) => {
  function updateTime(arg1, arg2) {
    var value = moment(new Date(arg2)).format("DD/MM/YYYY H:mm");
    console.log(value);
    updateDate(arg1, value);
  }
  return (
    <IonCard className="multi-card ">
      <IonCardContent>
        <div className="container">
          <div className="top-part border-bottom">
            <div className="cont-icon">
              <Icon iconProps={icon} />
            </div>
            <div className="second-col">
              <div className="first-row">{item.container_number}</div>
              <div className="sec-row">
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
            <div className="third-col">
              <UnderLineOnly
                className="black-underLine"
                content={
                  <Calendar
                    name={"date_time"}
                    value={item.displayTime || todayDate}
                    label="Date"
                    //errors={errors.dateAndTime}
                    type="text"
                    required={true}
                    onChange={updateDate}
                    placeholder="text"
                    minDate={minDate}
                    icon={calenderIcon}
                    displayFormat="DD-MMM-YYYY HH:mm"
                    className="leftGap "
                  />
                }
              />
            </div>
          </div>
          <div className="bottom-part">
            <div className="second-col">
              <AddressLink setAddress={updateDate} value={item.address} />
            </div>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
export default MultiLocationCard;
