import * as HttpRequest from "./HttpsServices";
import * as apiBaseUrl from "../util/EndPointURL";
import Store from "../redux/Store";
import * as reduxActions from "../redux/actions/AllActions";
import * as ActionType from "../redux/actionTypes/AllActionTypes";

export const getBookingByStatus = (status) => {
  let appUrl = `${apiBaseUrl}/requestDetails/fetchAllRequestDetails?statusCode=${status}&pgSize=10&pgNo=0&option=ALL&locale=en`;
  var data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  HttpRequest.HttpGetRequest(data)
    .then((response) => {
      console.log("RESPONSE +++++ {} ", JSON.stringify(response));
      return response;
    })
    .catch(function (error) {
      console.log("ERROR +++ {} ", error);
    });
};
export const smartSearch = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getTaxReciept = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const doLogin = async (appUrl, header) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: header,
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const loginWithAgent = async (appUrl, header) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: header,
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const fetchAllDeclaration = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: {},
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const confirmUserDetails = async (appUrl, body) => {
  let data = {
    url: appUrl,
    callType: "post",
    header: { headers: "" },
    data: body,
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const httpPatchCallWithoutHeaderAndBody = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "patch",
    header: {},
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const httpGetCallWithoutHeader = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "get",
    header: {},
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const httpPostCallWithoutHeaderAndBody = async (appUrl) => {
  let data = {
    url: appUrl,
    callType: "post",
    header: {},
    data: {},
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const httpPostCallWithoutHeaderAndWithBody = async (appUrl, body) => {
  let data = {
    url: appUrl,
    callType: "post",
    header: {},
    data: body,
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getRequestByDeclaration = async (declaration) => {
  let appUrl = apiBaseUrl.quickBookDeclUrl + declaration;
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getRequestByContainer = async (container) => {
  let appUrl = apiBaseUrl.quickBookConatainerUrl + container;
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getTruckTypeApi = async () => {
  let appUrl = apiBaseUrl.allVehicle;
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getAddressApi = async () => {
  let appUrl = apiBaseUrl.getAddress;
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };

  try {
    return await HttpRequest.HttpGetRequest(data)
      .then(async (result) => {
        if (result.success) {
          var clearAddressBody = await reduxActions.clearAllAddress();
          if (clearAddressBody) Store.dispatch(clearAddressBody);

          var reduxAdrress = {
            addressDtoList: result.data.addressDtoList,
            disableHrs: result.data.disableHrs,
          };
          result.data.addressDtoList.forEach((element) => {
            element.dropZone = element.selectedDropZone;
          });
          result.data.addressDtoList.disableHrs = result.data.disableHrs;
          var addAddressBody = await reduxActions.addAddress(
            result.data.addressDtoList
          );
          Store.dispatch(addAddressBody);
        }
        if (result.data) {
        } else {
          // props.history.push("/home");
        }
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const fetchContainerSummaryPayment = async (req) => {
  let appUrl = apiBaseUrl.fetchContainerSummaryPayment;
  let data = {
    url: appUrl,
    callType: "post",
    data: req,
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const saveQuickBook = async (req) => {
  let appUrl = apiBaseUrl.paymentUrl;
  let data = {
    url: appUrl,
    callType: "post",
    data: req,
  };
  try {
    return await HttpRequest.httpPostRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

export const getContainerTypes = async () => {
  let appUrl = apiBaseUrl.fetchContainerTypes;
  console.log(appUrl);
  let data = {
    url: appUrl,
    callType: "get",
    header: { headers: "" },
  };
  try {
    return await HttpRequest.HttpGetRequest(data);
  } catch (error) {
    console.log("ERROR +++ {} ", error);
  }
};

// export const fetchContainerTypes = async (req) => {
//   let appUrl = apiBaseUrl.saveBook;
//   let data = {
//     url: appUrl,
//     callType: "post",
//     data: req,
//   };
//   try {
//     return await HttpRequest.HttpGetRequest(data);
//   } catch (error) {
//     console.log("ERROR +++ {} ", error);
//   }
// };
