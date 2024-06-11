import React from "react";
import "./_loading1.scss";

interface Props {}

const Loading1: React.FC<Props> = () => {
  return (
    <div className="loader">
      <span className="top-half">loading</span>
      <span className="bottom-half">loading</span>
    </div>
  );
};

export default Loading1;
