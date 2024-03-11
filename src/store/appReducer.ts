import { combineReducers } from 'redux';
import { AppReducer, IAppReducer } from "../components/app/reducers/appReducer";

// Import your reducers here
// import someReducer from './someReducer';
export interface stateInterface {
    app: IAppReducer;
  }


const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;