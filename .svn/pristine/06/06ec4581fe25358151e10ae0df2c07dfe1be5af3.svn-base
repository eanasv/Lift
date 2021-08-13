import { todayDate } from "../../services/Common";
import * as LoginUserTypes from "../actionTypes/AllActionTypes";
var initialState = {
  containerList: [],
  multiLocAndTime: false,
  truckNumber: 0,
  date_time: todayDate,
};

const TruckBook = (state = initialState, action) => {
  switch (action.type) {
    case LoginUserTypes.BOOK_TRUCK_MULTILOCATION:
      state.containerList = action.payLoad;
      state.multiLocAndTime = true;
      return state;
    case LoginUserTypes.BOOK_TRUCK_SINGLE_LOCATION:
      state.containerList = action.payLoad;
      state.multiLocAndTime = false;
      return state;
    case LoginUserTypes.BOOK_TRUCK_UPDATE_ADDRESS:
      console.log(action.payLoad);
      var updatedState = { ...state };
      updatedState.containerList.forEach((element, index) => {
        updatedState.containerList[index] = { ...element, ...action.payLoad };
      });
      return updatedState;

    case LoginUserTypes.BOOK_TRUCK_UPDATE_OTHER_DATA:
      var updatedState = { ...state };
      console.log("%%%%%%", action.payLoad);
      updatedState.containerList.forEach((element, index) => {
        if (element.container_number === action.payLoad.containerNumber) {
          updatedState.containerList[index] = {
            ...element,
            ...action.payLoad.element,
          };
        }
      });
      console.log("***********", updatedState);
      return updatedState;

    case LoginUserTypes.BOOK_TRUCK_UPDATE_COMMON_DATA:
      var updatedState = { ...state };
      console.log(action.payLoad);
      updatedState = {
        ...updatedState,
        ...action.payLoad,
      };
      console.log(updatedState);
      return updatedState;
    case LoginUserTypes.BOOK_TRUCK_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default TruckBook;
