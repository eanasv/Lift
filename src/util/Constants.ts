export const REGEX_MAP = {
  TEXT: "^[A-Za-z0-9 ]+$",
  NUM: "^\\d+$",
  NUM_DEC: "^\\d*\\.\\d+$",
  ALPHA_NUM: "/^[a-zA-Z0-9 ]*$/",
  TEL_NUM: "^\\d+$",
};

export const termsAndConditionUrl =
  "http://www.dubaitrade.ae/en/terms-conditions";

  export const sessionTimeoutInSec = 60*30 * 1000;

  export const truckNumber = 5;

  export const dropIntervals = [
    { label: "No Interval", value: "00:00" },
    { label: "30 Min", value: "00:30" },
    { label: "1 Hr", value: "01:00" },
    { label: "2 Hr", value: "02:00" },
    { label: "3 Hr", value: "03:00" },
    { label: "4 Hr", value: "04:00" },
  ];
