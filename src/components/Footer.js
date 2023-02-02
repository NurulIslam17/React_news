import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const footer = {
      position: "sticky",
      backgroundColor:"black",
      top: "100%",
    };
    return (
      <>
        <div style={footer}>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center text-light">
                Designed and Developed By Nurul
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
