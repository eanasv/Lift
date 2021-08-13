import { combineReducers } from "redux";
import CheckAccessToken from "./CheckAccessToken";
import ApiRequestState from "./ApiRequestState";
import CheckUserStatus from "./CheckUserStatus";
import Addresses from "./Addresses";
import ContainerCart from "./ContainerCart";
import DeclarationCart from "./DeclarationCart";
import Trucks from "./Trucks";
import TruckBook from "./TruckBook";
import Cart from "./Cart";
import VariableValues from "./VariableValues";

const AllReducers = combineReducers({
  CheckAccessToken: CheckAccessToken,
  ApiRequestState: ApiRequestState,
  CheckUserStatus: CheckUserStatus,
  Addresses: Addresses,
  ContainerCart: ContainerCart,
  DeclarationCart: DeclarationCart,
  Trucks: Trucks,
  TruckBook: TruckBook,
  Cart: Cart,
  VariableValues: VariableValues,
});

export default AllReducers;
