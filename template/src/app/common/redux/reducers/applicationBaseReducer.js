/* eslint-disable no-debugger */
import { commonTypes } from '../actions/commonActions';

export const initialState = {
  loaded: false,
  applicationName: 'React Sample Project Setup',
  processingInProgress: 0,
};

const ApplicationBaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonTypes.APPLICATION_LOADED:
      return {
        ...state,
        loaded: action.data.isLoaded,
      };
    case commonTypes.PROCESSING_INITIATED: // need to check the best way to increment
      return {
        ...state,
        processingInProgress: state.processingInProgress + 1,
      };
    case commonTypes.PROCESSING_COMPLETED: // need to check the best way to decrement
      return {
        ...state,
        processingInProgress: state.processingInProgress - 1,
      };
    default:
      return state;
  }
};

export default ApplicationBaseReducer;
