import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./_button1.scss";

interface Props {}

class Button1 extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button className="button-1">Hover Me</button>;
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button1);
