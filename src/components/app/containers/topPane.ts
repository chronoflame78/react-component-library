import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { stateInterface } from "../../../store/appReducer";
import {
    windowResized,
  } from "../actions/appAction";
import TopPane from "../components/topPane";

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

export default connect(mapStateToProps, mapDispatchToProps)(TopPane);
