import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./_button3.scss";

interface Props {}

class Button3 extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button className="button-3">Hover Me</button>;
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button3);
