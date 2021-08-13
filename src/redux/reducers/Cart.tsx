import * as LoginUserTypes from "../actionTypes/AllActionTypes";
// var initialState = [];
// const Cart = (state = initialState, action) => {
//   switch (action.type) {
//     case LoginUserTypes.ADD_TO_CART:
//       console.log("&&&&&", state);
//       state.push(action.payLoad);
//       console.log(state);
//       return state;
//     default:
//       return state;
//   }
// };

const Cart = (state = [], action) => {
  switch (action.type) {
    case LoginUserTypes.ADD_TO_CART:
      state.concat(action.payLoad);
      console.log(action.payLoad);
      return state.concat(action.payLoad);

    case LoginUserTypes.UPDATE_BOE_IN_CART:
      let updatedState = [...state];
      updatedState.map((item, index) => {
        if (item.referenceNumber === action.payLoad.referenceNumber) {
          updatedState[index] = action.payLoad;
        }
      });
      return updatedState;

    case LoginUserTypes.UPDATE_CONTAINER_IN_CART:
      let update = [...state];
      update.map((item, index) => {
        if (item.referenceNumber === action.payLoad.boeNumber) {
          item.containerList.map((container, index) => {
            container.container_number === action.payLoad.container_number
              ? (item = action.payLoad)
              : console.log("no");
          });
        }
      });
      update.push(1);
      update.pop();
      return update;
    case LoginUserTypes.CLEAR_CART:
      return (state = []);

    default:
      return state;
  }
};

export default Cart;
