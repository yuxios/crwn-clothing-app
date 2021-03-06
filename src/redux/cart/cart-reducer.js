import * as actions from '../action.types';

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
      hidden: !state.hidden 
    };
    default:
      return state;
  }
}

export default cartReducer;