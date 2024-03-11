import {
    WINDOW_RESIZE,
  } from "../actions/appAction";
  const mobileWidth = 1023;
  
  export interface IAppReducer {
    loading: boolean;
    windowHeight: number;
    windowWidth: number;
    isMobileView: boolean;
  }
  
  const InitialState: Partial<IAppReducer> = {
    loading: false,
    windowHeight: window.innerWidth,
    windowWidth: window.innerHeight,
    isMobileView: window.innerWidth <= mobileWidth,
  };
  export function AppReducer(state = InitialState, action: any): any {
    switch (action.type) {
      case WINDOW_RESIZE:
        return {
          ...state,
          windowWidth: action.response.windowWidth,
          windowHeight: action.response.windowHeight,
          isMobileView: window.innerWidth <= mobileWidth
        };
        default:
            return state;
    }
  }
  