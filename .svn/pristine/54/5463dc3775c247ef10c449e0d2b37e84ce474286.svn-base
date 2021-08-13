import {
  IonCol,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonToggle,
} from "@ionic/react";
import { alertCircle } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Calendar from "../../components/calendar/Calendar";
import SimpleDropdown from "../../components/dropdownInput/SimpleDropdown";
import BlueFooter from "../../components/Footer/BlueFooter";
import SimpleBorder from "../../components/InputBorders/SimpleBorder";
import UnderLineOnly from "../../components/InputBorders/UnderLineOnly";
import MultiLocationCard from "../../components/MultiLocationCard/MultiLocationCard";
import InformationText from "../../components/Texts/InformationText";
import UnderLinedText from "../../components/Texts/UnderLinedText";
//import { bookTruckSampleData, containerType } from "../../data";
import * as reduxActions from "../../redux/actionTypes/AllActionTypes";
import Store from "../../redux/Store";
import {
  createArrayOfObjectWithKeyAndValue,
  formatDate,
  minDate,
  todayDate,
} from "../../services/Common";
import { dropIntervals } from "../../util/Constants";
import "./BookTruck.scss";
import SingleLocationDropCard from "../../components/SingleLocationDropCard/SingleLocationDropCard";
import moment from "moment";
import SingleLocContainerCard from "../../components/SingleLocationDropCard/SingleLocContainerCard";
import AddressLink from "../../components/Address/AddressLink";
import Toggle from "../../components/Toggle/Toggle";
import {
  fetchContainerSummaryPayment,
  getContainerTypes,
} from "../../services/EndPointApi";
import SortedContainerList from "../../components/SortedContainerList/SortedContainerList";
interface BookTruckProps {
  truckBook;
  bookTruckUpdateAddress;
  updateOtherData;
  updateCommonData;
}

var containerIcon = {
  name: "container",
  slot: "",
  class: "zoom34",
};
var locationIconProps = {
  name: "location",
  slot: "",
  class: "zoom24",
  zoom: 1.8,
};
const BookTruck: React.FC<BookTruckProps> = (props) => {
  let history = useHistory();
  var isdiff = "test";

  var truckBookData = props.truckBook; //bookTruckSampleData;
  console.log(truckBookData);
  //containerList = props.bookTruck; // bookTruckSampleData.containerList; //props.bookTruck;

  const [form, setForm] = useState<any>({
    truckNumber: truckBookData.truckNumber || 0,
    date_time: truckBookData.date_time || todayDate,
    minDate: minDate,
    droplocation: {},
    dropInterval: truckBookData.dropInterval || "No Interval",
    multiLocAndTime: truckBookData.multiLocAndTime || false,
    containerType: [],
  });
  console.log(form);
  const calenderIcon = {
    name: "calendar",
    slot: "start",
    class: "slotStart",
    zoom: " 1.2",
  };

  const intervalIcon = {
    name: "interval",
    slot: "",
    class: "slotStart",
  };
  const arrowDownIcon = {
    name: "arrow-down",
    slot: "",
    class: "lastIcon",
  };
  const [errors, setErrors] = useState<any>({});
  useEffect(() => {
    fetchContainerTypes();
  }, []);

  var totalTruckNumber = createArrayOfObjectWithKeyAndValue();

  const handleChange = (e: any, value: any) => {
    //setErrors({ ...errors, [e.target.name]: "" });

    if (e.target.name === "date_time") {
      value = moment(new Date(value)).format("DD/MM/YYYY H:mm");

      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
      var element = { [e.target.name]: value };

      props.updateCommonData(element);
      props.bookTruckUpdateAddress(element);
    } else {
      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
      var element = { [e.target.name]: value };
      props.updateCommonData(element);
    }
  };
  async function goToReview() {
    // createRequestObject();
    console.log(props.truckBook);
    let res: any = await fetchContainerSummaryPayment(props.truckBook);
    console.log(res);
    history.push("/bookTruckTab/review");
  }

  const setAddress = async (data) => {
    console.log(data);
    setForm({
      ...form,
      droplocation: data,
    });
    props.bookTruckUpdateAddress(data);
    // containerList.forEach((element: any, index) => {
    //   containerList[index] = { ...element, ...data };
    // });
  };

  function updateData(e, value, item?, index?) {
    if (props.truckBook.multiLocAndTime) {
    }
    console.log(value, item);
    var payLoad;
    if (e === "") {
      var temp = value;
      payLoad = {
        containerNumber: item.container_number,
        element: { ...temp, address: value },
      };
      props.updateOtherData(payLoad);
    } else if (e.target.name === "date_time") {
      let te = value;
      var se = formatDate(te);
      console.log(se);
      //var timeEle: { displayTime: value };

      var timevalue = moment(new Date(value)).format("DD/MM/YYYY H:mm");

      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
      payLoad = {
        containerNumber: item.container_number,
        element: { [e.target.name]: timevalue, displayTime: se },
      };
      props.updateOtherData(payLoad);
    } else {
      payLoad = {
        containerNumber: item.container_number,
        element: { [e.target.name]: value },
      };
      props.updateOtherData(payLoad);
    }
  }

  function updateCommonData(e, value) {
    var element;
    console.log(e.target.name, value);
    if (e.target.name === "date_time") {
      value = moment(new Date(value)).format("DD/MM/YYYY H:mm");
      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
      element = { [e.target.name]: value };
      console.log(form);
      props.updateCommonData(element);
    } else {
      element = { [e.target.name]: value };
      props.updateCommonData(element);
    }
    props.updateCommonData(element);
  }

  function createRequestObject(): any {
    console.log(truckBookData.containerList);
  }

  async function fetchContainerTypes() {
    let res: any = await getContainerTypes();
    {
      if (res?.success) {
        setForm((prevState) => ({
          ...prevState,
          containerType: res.data, //|| containerType,
        }));
        console.log("********", form);
      } else {
        setForm((prevState) => ({
          ...prevState,
          containerType: res.data, //||containerType, //to delete eanas
        }));
      }
    }
  }
  return (
    <IonPage className="BookTruck-Location">
      <IonContent>
        <div className="main-content">
          <IonRow className="black-label">
            <IonCol size="9">
              <IonLabel> Drop containers at multiple locations?</IonLabel>
            </IonCol>
            <IonCol className="right-item">
              <Toggle
                value={truckBookData.multiLocAndTime}
                changeToggle={updateCommonData}
                name="multiLocAndTime"
              />
            </IonCol>
          </IonRow>
          {!truckBookData.multiLocAndTime && (
            <IonRow className="black-label">
              <IonCol size="9">
                <IonLabel>Drop containers at different date & time?</IonLabel>
              </IonCol>
              <IonCol className="right-item">
                <IonToggle value="mushrooms" />
              </IonCol>
            </IonRow>
          )}
          <IonRow className="black-label">
            <IonCol size="9">
              <IonLabel>Number of Trucks Required?</IonLabel>
            </IonCol>
            <IonCol className="right-item">
              <SimpleBorder
                label="testing"
                content={
                  <SimpleDropdown
                    name={"truckNumber"}
                    value={truckBookData.truckNumber}
                    errors={errors.truckNumber}
                    type="text"
                    required={true}
                    onChange={handleChange}
                    datatype="TEXT"
                    //placeholder=""
                    listValues={totalTruckNumber}
                    icon={arrowDownIcon}
                  />
                }
              />
            </IonCol>
            <div className="alert-message">
              <IonIcon icon={alertCircle}></IonIcon> max limit of 80 containers
              is one truck
            </div>
          </IonRow>
        </div>
        <div className="sub-content">
          <UnderLinedText text="Enter drop details" />
        </div>
        {!truckBookData.multiLocAndTime && (
          <div className="sub-content">
            {/* <SingleLocationDropCard /> */}
            <div className="twoItem">
              <div className="eachElement">
                <UnderLineOnly
                  className="black-underLine"
                  content={
                    <Calendar
                      name={"date_time"}
                      value={form.date_time || todayDate}
                      label="Date"
                      errors={errors.date_time}
                      type="text"
                      required={true}
                      onChange={handleChange}
                      placeholder="text"
                      minDate={form.minDate}
                      icon={calenderIcon}
                      displayFormat="DD-MMM-YYYY HH:mm"
                      className="leftGap"
                    />
                  }
                />
              </div>
              <div className="centerElement"></div>
              <div className="lastElement">
                <UnderLineOnly
                  className="black-underLine"
                  content={
                    <SimpleDropdown
                      name={"dropInterval"}
                      value={form.dropInterval}
                      errors={errors.dropInterval}
                      type="text"
                      required={true}
                      onChange={handleChange}
                      datatype="TEXT"
                      //placeholder=""
                      listValues={dropIntervals}
                      icon={intervalIcon}
                      icon2={arrowDownIcon}
                      className="firstElement leftGap"
                    />
                  }
                />
              </div>
            </div>

            <AddressLink
              value={form.droplocation}
              setAddress={setAddress}
              linkClassName="flexStart"
            />
          </div>
        )}

        <div className="container-list">
          <InformationText message={` containers`} />
          {/* {truckBookData.containerList?.map((item, index) => { */}
          {props.truckBook?.containerList?.map((item, index) => {
            return (
              <div key={index}>
                <SortedContainerList
                  isDiff={isdiff === item.boeNumber ? true : false}
                  item={item}
                  content={
                    !truckBookData.multiLocAndTime ? (
                      <SingleLocContainerCard
                        item={item}
                        icon={containerIcon}
                        arrowDownIcon={arrowDownIcon}
                        updateDate={(arg1, arg2) =>
                          updateData(arg1, arg2, item, index)
                        }
                        containerList={form.containerType}
                      />
                    ) : (
                      <MultiLocationCard
                        item={item}
                        icon={containerIcon}
                        arrowDownIcon={arrowDownIcon}
                        updateDate={(arg1, arg2) =>
                          updateData(arg1, arg2, item, index)
                        }
                        containerList={form.containerType}
                      />
                    )
                  }
                />
                {/* {item.selected && (
                  <div key={index}>
                    <>
                      <div
                        className="decla-info"
                        hidden={isdiff === item.boeNumber}
                      >
                        <div className="decla-number">
                          <IonLabel>{item.boeNumber}</IonLabel>
                        </div>
                        <div className="do-validity">
                          <IonLabel class="validity-text">
                            DO Validity: {item.boeNumber}
                          </IonLabel>
                        </div>
                      </div>
                      <div hidden={true}>{(isdiff = item.boeNumber)}</div>
                    </>
                    {!truckBookData.multiLocAndTime ? (
                      <SingleLocContainerCard
                        item={item}
                        icon={containerIcon}
                        arrowDownIcon={arrowDownIcon}
                        updateDate={(arg1, arg2) =>
                          updateData(arg1, arg2, item, index)
                        }
                        containerList={form.containerType}
                      />
                    ) : (
                      <MultiLocationCard
                        item={item}
                        icon={containerIcon}
                        arrowDownIcon={arrowDownIcon}
                        updateDate={(arg1, arg2) =>
                          updateData(arg1, arg2, item, index)
                        }
                        containerList={form.containerType}
                      />
                    )}
                  </div>
                )} */}
                <div hidden={true}>{(isdiff = item.boeNumber)}</div>
              </div>
            );
          })}
        </div>
      </IonContent>
      <BlueFooter onBlueFooterClick={goToReview} footerLabel="Continue" />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  console.log("**&&&(((%%$$", state.TruckBook);
  return {
    truckBook: state.TruckBook,
  };
};

const mapDispatchToProps = () => {
  return {
    bookTruckUpdateAddress: (item: any) => {
      console.log(item);
      Store.dispatch({
        type: reduxActions.BOOK_TRUCK_UPDATE_ADDRESS,
        payLoad: item,
      });
    },
    updateOtherData: (item: any) => {
      console.log(item);
      Store.dispatch({
        type: reduxActions.BOOK_TRUCK_UPDATE_OTHER_DATA,
        payLoad: item,
      });
    },
    updateCommonData: (item: any) => {
      Store.dispatch({
        type: reduxActions.BOOK_TRUCK_UPDATE_COMMON_DATA,
        payLoad: item,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTruck);
