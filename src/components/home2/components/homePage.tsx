import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button1 from "../../common/button1/button1";
import Button2 from "../../common/button2/button2";
import Button3 from "../../common/button3/button3";
import Button4 from "../../common/button4/button4";
import Button5 from "../../common/button5/button5";
import Button6 from "../../common/button6/button6";
import Button7 from "../../common/button7/button7";
import Loading1 from "../../loading-animation/loading1/loading1";
interface Props {}

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
        <div className="grid-item">
          <Button4 />
        </div>
        <div className="grid-item">
          <Button5 />
        </div>
        <div className="grid-item">
          <Button6 />
        </div>
        <div className="grid-item">
          <Button7 />
        </div>
        <div className="grid-item">
          <Loading1 />
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
