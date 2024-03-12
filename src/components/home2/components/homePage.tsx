import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button1 from "../../common/button1/button1";
import Button2 from "../../common/button2/button2";
import Button3 from "../../common/button3/button3";
interface Props {

}

class HomePage extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="home-container">
        <div className="grid-item">
          <Button1 />
        </div>
        <div className="grid-item">
          <Button2 />
        </div>
        <div className="grid-item">
          <Button3 />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
