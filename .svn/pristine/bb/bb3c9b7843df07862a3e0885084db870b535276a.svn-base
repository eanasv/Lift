import {
  IonButton,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonModal,
} from "@ionic/react";
import moment from "moment";
import React, { useState } from "react";
import { lastYear, todayDate } from "../../services/Common";
import Calendar from "../calendar/Calendar";

interface searchBoeByDateProps {
  openOrCloseModal?: (modalStatus, param1?, param2?) => any;
  headerName: string;
}

const SearchBoeByDate: React.FC<searchBoeByDateProps> = ({
  openOrCloseModal,
  headerName,
}) => {
  const [form, setForm] = useState<any>({
    fromDate: { value: "", minDate: "", maxdate: "" },
    toDate: { value: todayDate, minDate: "", maxdate: "" },
  });
  const handleChange = (e: any, value: any) => {
    if (e.target.name === "fromDate") {
      setForm({
        ...form,
        toDate: {
          value: value,
          minDate: moment(new Date(value)).format("YYYY-MM-DD"),
          paramDate: moment(new Date(value)).format("DD/MM/yyyy"),
        },
      });
    }

    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...form[e.target.name],
        paramDate: moment(new Date(value)).format("DD/MM/yyyy"),
        value: value,
      },
    }));
  };

  const calenderIcon = {
    name: "calendar",
    slot: "end",
    class: "calenderMargin",
  };

  function reset() {
    setForm({
      fromDate: { value: todayDate, minDate: "", maxdate: "" },
      toDate: { value: "", minDate: "", maxdate: "" },
    });
  }

  return (
    <>
      <div className="popup-header">
        <div className="header-title">
          <span>{headerName}</span>
        </div>
        <div onClick={() => openOrCloseModal(false)}>
          <IonIcon
            class="blueCloseIc menuClose blueClose"
            src="assets/icon/close.svg"
          ></IonIcon>
        </div>
      </div>
      <div className="popup-content">
        <div className=" twoItems">
          <Calendar
            name={"fromDate"}
            value={form.fromDate.value}
            label="Date"
            // errors={errors.dateAndTime}
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="--/--/----"
            minDate={lastYear}
            icon={calenderIcon}
            className="leftCalendar"
            displayFormat="DD/MMM/YYYY"
            max={todayDate}
          />
          <Calendar
            name={"toDate"}
            value={form.toDate.value} //{form.toDate.value}
            label="Date"
            //errors={errors.dateAndTime}
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="--/--/----"
            minDate={form.toDate.minDate}
            icon={calenderIcon}
            className="rightCalendar"
            displayFormat="DD/MMM/YYYY"
            max={todayDate}
          />
        </div>
        <div className="twoItems">
          <IonButton className="reset" fill="clear" onClick={() => reset()}>
            Reset
          </IonButton>
          <IonButton
            className="apply-filter"
            fill="clear"
            onClick={() =>
              openOrCloseModal(
                false,
                form.fromDate.paramDate,
                form.toDate.paramDate
              )
            }
          >
            Apply Filter
          </IonButton>
        </div>
      </div>
    </>
  );
};
export default SearchBoeByDate;
