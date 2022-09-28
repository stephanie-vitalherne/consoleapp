import * as tabActions from './tabActions';

const initialState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActions.SELECT_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    default:
      return state;
  }
};

export default tabReducer;
