import { Capacitor } from "@capacitor/core";
import moment from "moment";

import { truckNumber } from "../util/Constants";

export const todayDate = moment().format("YYYY-MM-DD hh:mm");
export const minDate = moment().format("YYYY-MM-DD");
export const yesterdayDate = moment().subtract(1, "days").format("MM/DD/YYYY");
export const nextYear = moment().add(2, "years").format("YYYY-MM-DD");
export const lastYear = moment().subtract(2, "years").format("YYYY-MM-DD");

export const createArrayOfObjectWithKeyAndValue = () => {
  var array = [];
  var len = truckNumber;
  for (var i = 0; i < len; i++) {
    array.push({
      label: i + 1,
      value: i + 1,
    });
  }
  return array;
};

export const formatDate = (date) => {
  console.log(date);
  return moment(date).format("YYYY-MM-DD hh:mm");
};
