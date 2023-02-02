import React, { Component } from "react";

export class NewsIteam extends Component {
  render() {
    let {title,desc} = this.props;
    return (
      <>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            <a href="/newsDetails" className="btn btn-sm btn-info rounded-0">
              Details...
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsIteam;
