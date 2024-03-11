import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { stateInterface } from "../../../store/appReducer";
import App from "../components/app";
import {
    windowResized,
  } from "../actions/appAction";

const mapStateToProps = (state: stateInterface) => {
  return {
    isMobileView: state.app.isMobileView,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    windowResized,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
