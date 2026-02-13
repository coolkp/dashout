import React, { Component } from "react";

import Header from "../components/Header/header";
import GardenTips from "../components/GardenTips";
import FooterSection from "../components/Footer";

class GardenTipsTheme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bgColor="white" />
        <div className="main">
          <GardenTips />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default GardenTipsTheme;
