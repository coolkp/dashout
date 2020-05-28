import React from "react";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="features" className="feature-section ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/screen_image.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="feature-contents section-heading">
                  <h2>
                    Quick & Easy Onboarding Process with <br />
                    <span>best features</span>
                  </h2>
                  <p>
                    We can onboard your store onto the Dashout platform within a week with minimal changes to your store.
                    You will be operating at higher efficieny and those long eyesore of checkout lines will vanish in no time.
                  </p>

                  <div className="feature-content-wrap">
                    <ul className="nav nav-tabs feature-tab nav-justified" data-tabs="tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active h6"
                          href="#tab6-1"
                          data-toggle="tab"
                        >
                          <span className="ti-money"></span>
                          Reduce Cashier Lanes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link h6"
                          href="#tab6-2"
                          data-toggle="tab"
                        >
                          <span className="ti-rocket"></span>
                          Onboarding
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link h6"
                          href="#tab6-3"
                          data-toggle="tab"
                        >
                          <span className="ti-announcement"></span>
                          Marketing
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content feature-tab-content">
                      <div className="tab-pane active" id="tab6-1">
                        <ul className="list-unstyled">
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="badge badge-circle badge-primary mr-3">
                                  <span className="ti-check"></span>
                                </div>
                              </div>
                              <div>
                                <p className="mb-0">Reduce your cashier lanes by a third and save significantly</p>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="badge badge-circle badge-primary mr-3">
                                  <span className="ti-check"></span>
                                </div>
                              </div>
                              <div>
                                <p className="mb-0">
                                  Serve more customers
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="badge badge-circle badge-primary mr-3">
                                  <span className="ti-check"></span>
                                </div>
                              </div>
                              <div>
                                <p className="mb-0">
                                  Improve customer happiness
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="badge badge-circle badge-primary mr-3">
                                  <span className="ti-check"></span>
                                </div>
                              </div>
                              <div>
                                <p className="mb-0">
                                  Handle more customers
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="badge badge-circle badge-primary mr-3">
                                  <span className="ti-check"></span>
                                </div>
                              </div>
                              <div>
                                <p className="mb-0">
                                  Become more resillient as an essential business
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tab6-2">
                        <div className="single-feature">
                          <div className="d-flex align-items-center mb-2">
                            <span className="ti-wand rounded mr-3 icon icon-color-1"></span>
                            <h5 className="mb-0">Non Intrusive</h5>
                          </div>
                          <p>
                           Onboarding a store onto Dashout Platform is extremely simple and Unintrusive. 
                           There are no expensive sensors or facial recognition cameras. 
                           No exclusive checkout lanes or additional staff is required.
                           The setup is completely complimentary as well. 
                          </p>
                        </div>
                        <div className="single-feature mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <span className="ti-eye rounded mr-3 icon icon-color-2"></span>
                            <h5 className="mb-0">Real time Monitoring</h5>
                          </div>
                          <p>
                            Real time monitor transaction volume, foot traffic and purchases. 
                            With the Dashout store Dashboard, you will always have your finger on the pulse of your store.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab6-3">
                        <div className="row">
                          <div className="col single-feature mb-4">
                            <div className="d-flex align-items-center mb-2">
                              <span className="ti-bar-chart rounded mr-3 icon icon-color-2"></span>
                              <h5 className="mb-0">Increase conversion</h5>
                            </div>
                            <p>
                              Have higher conversion rate on promoted products, 
                              with the Dashout app targeting relevant customers. 
                              Dashout app also allows for higher visibility as customers 
                              can view and compare promotions at all nearby stores.
                            </p>
                          </div>
                          <div className="col single-feature mb-4">
                            <div className="d-flex align-items-center mb-2">
                              <span className="ti-stats-up rounded mr-3 icon icon-color-3"></span>
                              <h5 className="mb-0">Targeted Promotions</h5>
                            </div>
                            <p>
                              Improve on scatterfun pampleting of promotions by, 
                              displaying the promotions on the dashout app. 
                              These are displayed to Dashout customers based on their shopping patterns and history.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
