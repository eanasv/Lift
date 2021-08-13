import { IonContent, IonLabel, IonPage } from "@ionic/react";

import { useHistory } from "react-router-dom";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  createArrayOfObjectWithKeyAndValue,
  todayDate,
} from "../services/Common";
import {
  fetchContainerSummaryPayment,
  getAddressApi,
  getRequestByContainer,
  getRequestByDeclaration,
  getTruckTypeApi,
} from "../services/EndPointApi";
import { dropIntervals, truckNumber } from "../util/Constants";
import * as utils from "../util/Utilities";
import Calendar from "./calendar/Calendar";
import DrpdownInput from "./dropdownInput/DrpdownInput";
import TxtInput from "./txtinput/TxtInput";
import BorderWithFloatingText from "./InputBorders/BorderWithFloatingText";
import UnderLineOnly from "./InputBorders/UnderLineOnly";
var containerList = [];
interface bookQuickProps {
  buttonAction: any;
}
const BookQuick: React.FC<bookQuickProps> = ({ buttonAction }) => {
  let history = useHistory();
  const plusIcon = {
    name: "plusQuick",
    slot: "end",
    class: "slotEnd",
  };
  const calenderIcon = {
    name: "calendar",
    slot: "start",
    class: "calenderMargin",
  };
  console.log("&&&&^%%%", buttonAction);
  const [form, setForm] = useState({
    declNumber: "",
    containerNumber: "",
    truckCount: "",
    dateAndTime: todayDate,
    minDate: todayDate,
    truckType: "",
    droplocation: {
      consigneeContactName: "",
      consigneeContactNumber: "",
      phoneNumber: "",
    },
    contactPerson: "",
    contactNumber: "",
    submitted: false,
    valid: false,
    dropInterval: "",
  });
  var initialIcon = { declNumber: plusIcon, containerNumber: plusIcon };
  const [errors, setErrors] = useState<any>({});
  const [icon, seticon] = useState(initialIcon);
  //const [listTruckType, setListTruckType] = useState([]);

  const [action, setAction] = useState(buttonAction);
  const [timeAddressTruckDataList, settimeAddressTruckDataList] = useState<any>(
    {
      address: [],
      listTruck: [],
      disbaleHr: 1,
      dateAndTime: "",
    }
  );

  useEffect(() => {
    getListAddress();
    getTruck();
  }, []);

  useEffect(() => {
    if (buttonAction === "book") {
      onContinue();
    }
  }, [buttonAction]);

  const getTruck = async () => {
    let res: any = await getTruckTypeApi();
    {
      if (res?.success) {
        console.log(res);
        settimeAddressTruckDataList((prevState) => ({
          ...prevState,
          listTruck: res?.data,
        }));
        setTimeout(() => {
          console.log(timeAddressTruckDataList);
        }, 2000);
      } else {
        setErrors({
          ...errors,
          general: res?.data?.message || res?.data?.error,
        });
      }
    }
  };

  const getListAddress = async () => {
    let res: any = await getAddressApi();
    console.log(await res);
    // if (res?.success) {
    var mindateOfDisable = utils.addTimeToDateTime(
      new Date(),
      1 * res?.disableHrs * 60 || 1
    );
    var formattedMindate = mindateOfDisable.toISOString();
    console.log(mindateOfDisable, formattedMindate);
    settimeAddressTruckDataList((prevState) => ({
      ...prevState,
      address: res?.addressDtoList,
      disbaleHr: res?.disableHrs,
      dateAndTime: formattedMindate,
    }));
    setForm({
      ...form,
      minDate: formattedMindate,
      dateAndTime: formattedMindate,
    });
    // }
  };

  const minusIcon = {
    name: "minusQ",
    slot: "end",
    class: "slotEnd",
  };

  var totalTruckNumber = createArrayOfObjectWithKeyAndValue(); //Array.from({ length: truckNumber }, (_, i) => i + 1);
  console.log(totalTruckNumber);

  const blankIcon = { name: "", slot: "", class: "" };

  const handleChange = (e: any, value: any) => {
    setErrors({ ...errors, [e.target.name]: "" });
    if (e.target.name === "declNumber") {
      form.containerNumber = "";
      seticon({ containerNumber: minusIcon, declNumber: blankIcon });
    } else if (e.target.name === "containerNumber") {
      form.declNumber = "";
      seticon({ declNumber: minusIcon, containerNumber: blankIcon });
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });

    if (e.target.value === "") {
      seticon(initialIcon);
    }
    console.log(form);
  };

  const onBlur = async (e) => {
    if (e.target.value && e.target.value != "") {
      setErrors({ ...errors, [e.target.name]: "" });
      let response: any;
      if (e.target.name === "declNumber") {
        response = await getRequestByDeclaration(form.declNumber);
      } else {
        response = await getRequestByContainer(form.containerNumber);
      }
      if (response?.success) {
        containerList = response.data?.data?.dataItems[0]?.containerList || [
          response.data?.data?.dataItems[0]?.container,
        ];
        setErrors({
          ...errors,
          [e.target.name]: response.data?.data?.dataItems[0]?.noOfContainers
            ? response.data.data.dataItems[0].noOfContainers +
              " container selected"
            : "1 Container Selected",
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]:
            response?.data?.data?.dataItems[0]?.error ||
            "Invalid " + e.target.lable,
        });
      }
    }
    //seticon({ declNumber: blankIcon, containerNumber: minusIcon });
  };

  const validateDetails = async () => {
    console.log(form, Object.keys(form.droplocation).length);
    setErrors({
      general:
        form.declNumber === "" && form.containerNumber === ""
          ? "one from declaration/container number is mandatory"
          : "",
      truckType:
        form.truckType === "" ? "Truck Type Selection is Mandatory" : "",
      droplocation:
        form.droplocation.consigneeContactName === ""
          ? "Address Selection is Mandatory"
          : "",
      truckCount: form.truckCount === "" ? "Truck Selection is Mandatory" : "",
    });

    for (var key in errors) {
      if (errors[key] !== null && errors[key] != "") return false;
    }
    return true;
  };

  function createRequestObject(): any {
    let result: any[] = [];
    let vals;
    //if (form.declNumber && form.declNumber != "") {
    console.log(form.droplocation);
    containerList.forEach((element: any) => {
      var test = {
        ...element,
        ...form.droplocation,
      };
      test.refVehicleTypeCode = form.truckType;
      test.requestDetailsNumber = null;
      result.push(test);
    });
    let truckTypeArray: any[] = createrequestTruckType(
      form.dropInterval,
      form.dateAndTime,
      form.truckCount,
      form.truckType
    );

    console.log("%%%$$##  : ", {
      requestTruckType: truckTypeArray ?? [],
      containerList: result,
      multiLocAndTime: false,
    });
    return {
      requestTruckType: truckTypeArray ?? [],
      containerList: result,
      multiLocAndTime: false,
    };
    //  }
  }

  function createrequestTruckType(
    interval: string,
    dateTime: string,
    numberOftruck: string,
    truckType: any
  ): any[] {
    let truckTypes: any[] = [];
    let truckVar: any;
    let nbTruck = Number(numberOftruck);
    let intervalInMilliSeconds: number = utils.convertToMillSeconds(interval);
    let myInterval: number = 0;
    for (let i = 0; i < nbTruck; i++) {
      truckVar = {
        dateAndTime: moment(form.dateAndTime).format("DD/MM/YYYY H:mm"),
        index: i,
        interval: interval,
        vehicleCode: truckType?.value ?? "code",
        vehicleName: truckType?.label ?? "name",
      };
      truckTypes.push(truckVar);
      myInterval = myInterval + intervalInMilliSeconds;
    }

    return truckTypes;
  }

  const onContinue = async () => {
    var emptyField = await validateDetails();
    if (emptyField) {
      let r: any = await createRequestObject();
      console.log(r);
      var resp = await fetchContainerSummaryPayment(r);
      if (resp?.success) {
        var response = resp.data?.data?.dataItems[0];
        var payment: any = {
          grossAmount: response?.grossAmount,
          containerCountforToken: response?.containerCountforToken,
          tokenAmount: response?.tokenAmount,
          tokenVat: response?.tokenVatAmount,
          tokenVatAmount: response?.tokenVatAmount,
          totalTokenCharge: response?.totalTokenCharge,
          totalTariff: response?.totalTariff,
          paymentDetails: response?.paymentDetails,
          vatProfileDto: response?.vatProfileDto,
          totalVat: response?.totalVat,
          requestTruckType: r.requestTruckType,
          paymentType: "INSTANT",
          containerList: response.containerList,
          multiLocAndTime: false,
          containerSummary: response.containerSummary,
          //containerSummary:
        };
        console.log(payment);
        history.push("/quickBook/payment", payment);
        // if (
        //   (form.declNumber !== "" || form.containerNumber !== "") &&
        //   Object.keys(form.truckType).length !== 0 &&
        //   //Object.keys(dropLocation).length !== 0 &&
        //   form.droplocation.consigneeContactName !== "" &&
        //   form.truckCount !== ""
        // ) {
        //   let r: any = await createRequestObject();
        //   // props.clickedContinue(r, r?.requestTruckType);
        // }
        //};
      } else {
        setErrors({
          ...errors,
          general: response?.data?.message || response?.data?.error,
        });
      }
    }
  };

  return (
    <IonPage className="BookTruck-Location">
      <IonContent>
        <div className="book-quick">
          <div className="validationMessage ">
            <IonLabel className="" hidden={errors.general === ""}>
              {errors.general}
            </IonLabel>
          </div>
          <TxtInput
            name={"declNumber"}
            value={form.declNumber}
            label="Declaration Number"
            errors={errors.declNumber}
            type="text"
            required={true}
            onChange={handleChange}
            datatype="TEXT"
            placeholder="Declaration Number"
            icon={icon.declNumber}
            onBlur={onBlur}
          />
          <TxtInput
            name={"containerNumber"}
            value={form.containerNumber}
            label="Container Number"
            errors={errors.containerNumber}
            type="text"
            required={true}
            onChange={handleChange}
            datatype="TEXT"
            placeholder="Enter Number"
            icon={icon.containerNumber}
            onBlur={onBlur}
          />
          <div className="twoItem">
            <div className="eachElement">
              {" "}
              <DrpdownInput
                name={"truckCount"}
                value={form.truckCount}
                label="Truck Count"
                errors={errors.truckCount}
                type="text"
                required={true}
                onChange={handleChange}
                datatype="TEXT"
                placeholder="Enter Count"
                listValues={totalTruckNumber}
              />
            </div>
            <div className="eachElement">
              <DrpdownInput
                name={"dropInterval"}
                value={form.dropInterval}
                label="Drop Interval"
                errors={errors.dropInterval}
                required={true}
                onChange={handleChange}
                datatype="TEXT"
                type="text"
                placeholder="Select Interval"
                listValues={dropIntervals}
              />
            </div>
          </div>
          <BorderWithFloatingText
            label="Date"
            content={
              <Calendar
                name={"dateAndTime"}
                value={form.dateAndTime}
                label="Date"
                errors={errors.dateAndTime}
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="text"
                minDate={form.minDate}
                icon={calenderIcon}
                displayFormat="DD-MMM-YYYY HH:mm"
                className="dropdownInput"
              />
            }
          />
          <DrpdownInput
            name={"truckType"}
            value={form.truckType}
            label="Truck Type"
            errors={errors.truckType}
            required={true}
            onChange={handleChange}
            datatype="TEXT"
            type="text"
            placeholder="Select Type"
            listValues={timeAddressTruckDataList.listTruck}
          />

          <DrpdownInput
            name={"droplocation"}
            value={form.droplocation}
            label="Drop Address"
            errors={errors.droplocation}
            type="address"
            required={true}
            onChange={handleChange}
            datatype="TEXT"
            placeholder="Enter Address"
            listValues={timeAddressTruckDataList.address}
          />

          <TxtInput
            name={"contactPerson"}
            value={form.droplocation?.consigneeContactName ?? ""}
            label="Contact Person"
            type="text"
            required={true}
            datatype="TEXT"
            placeholder="Name"
            readonly={true}
            onChange={handleChange}
          />

          <TxtInput
            name={"consigneeContactNumber"}
            value={form.droplocation?.consigneeContactNumber ?? ""}
            label="Mobile Number"
            type="text"
            required={true}
            datatype="TEXT"
            placeholder="Enter Number"
            readonly={true}
            onChange={handleChange}
          />

          <TxtInput
            name={"phoneNumber"}
            value={form.droplocation?.phoneNumber ?? ""}
            label="Phone Number"
            type="text"
            required={true}
            datatype="TEXT"
            placeholder="Enter Number"
            readonly={true}
            onChange={handleChange}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default BookQuick;
