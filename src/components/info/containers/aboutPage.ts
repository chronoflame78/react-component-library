import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { stateInterface } from "../../../store/appReducer";
import AboutPage from "../components/aboutPage";


const mapStateToProps = (state: stateInterface) => {
  return {
    isMobileView: state.app.isMobileView,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
