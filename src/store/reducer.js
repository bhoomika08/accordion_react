import * as actionTypes from './actions.js';

const initialState = {
  openTabs: {},
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE:
      const isOpen = !!state.openTabs[action.payload.label];
      if(action.payload.props.allowMultipleOpen) {
        return {
          openTabs: {
            ...state.openTabs,
            [action.payload.label]: !isOpen,
          }
        }
      }
      else {
        return {
          openTabs: {
            [action.payload.label]: !isOpen,
          }
        }
      }
  }
   return state;
}

export default reducer;