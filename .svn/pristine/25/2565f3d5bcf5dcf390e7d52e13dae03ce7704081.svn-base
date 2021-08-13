import React, { useState } from "react";
import { todayDate } from "../../services/Common";
import Calendar from "../calendar/Calendar";
import SimpleDropdown from "../dropdownInput/SimpleDropdown";
import UnderLineOnly from "../InputBorders/UnderLineOnly";
import BlueUderLinedLink from "../Texts/BlueUderLinedLink";
import "./SingleLocationDropCard.scss";

interface SingleLocationDropCard {
  updateSingleLoc?: () => void;
}
const SingleLocationDropCard: React.FC<SingleLocationDropCard> = ({}) => {
  const [calendarDate, setcalendarDate] = useState(todayDate);
  const calenderIcon = {
    name: "calendar",
    slot: "start",
    class: "slotStart",
  };
  function updateData(data) {
    console.log(data);
  }
  return (
    // <div className="twoItem">
    //   <div className="eachElement">
    <UnderLineOnly
      className="black-underLine"
      content={
        <Calendar
          name={"dateAndTime"}
          value={calendarDate}
          label="Date"
          type="text"
          required={true}
          onChange={updateData}
          placeholder="text"
          minDate={todayDate}
          icon={calenderIcon}
          displayFormat="DD-MMM-YYYY HH:mm"
          className="leftGap"
        />
      }
    />
    //   </div>
    //   <div className="centerElement"></div>
    //   <div className="lastElement">
    //     {/* <UnderLineOnly
    //             className="black-underLine"
    //             content={
    //               <SimpleDropdown
    //                 name={"dropInterval"}
    //                 value={form.dropInterval}
    //                 errors={errors.dropInterval}
    //                 type="text"
    //                 required={true}
    //                 onChange={handleChange}
    //                 datatype="TEXT"
    //                 //placeholder=""
    //                 listValues={dropIntervals}
    //                 icon={intervalIcon}
    //                 icon2={arrowDownIcon}
    //                 className="firstElement leftGap"
    //               />
    //             }
    //           /> */}
    //   </div>
    // </div>
  );
};
export default SingleLocationDropCard;
