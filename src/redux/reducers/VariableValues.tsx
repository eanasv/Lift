import * as LoginUserTypes from "../actionTypes/AllActionTypes";
var initialState = {
  cartNumber: 0,
};

const VariableValues = (state = initialState, action) => {
  switch (action.type) {
    case LoginUserTypes.UPDATE_VARIABLE:
      var updatedState = state;
      updatedState.cartNumber = action.payLoad;
      return updatedState;

    case LoginUserTypes.REMOVE_FROM_CART:
      return state;

    default:
      return state;
  }
};

// const VariableValues = (state = initialState, action) => {
//   switch (action.type) {
//     case LoginUserTypes.UPDATE_VARIABLE:
//       console.log(action.payLoad);
//       state.cartNumber = action.payLoad;
//       console.log(state);
//       return state;
//     default:
//       return state;
//   }
// };

export default VariableValues;
