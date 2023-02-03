import React, { Component } from "react";

export class NewsIteam extends Component {
  render() {
    const readmoreBtn = {
      posrtion:'relative',
      bottom:'0',
      right:"0",
      color:"grey",
      fontWeight:"700"
    }
    const row_height = {
      height:"200px",
    }
    const img_height = {
      height:"200px"
    }
    let { title, desc, imgUrl,author,source,published,url} = this.props;
    return (
      <>
        <div className="container">
          <div className="row mb-2 border bordered" style={row_height}>
            <div className="col-md-4">
              <div>
                <img className="w-100" style={img_height} src={imgUrl} />
              </div>
            </div>
            <div className="col-md-8">
              <h5>{title}</h5>
              <strong>Author : </strong><span className="mr-3">{author}</span><br/>
              <strong>Source : </strong><span className="mr-3">{source}</span><br/>
              <strong>Published : </strong><span className="mr-3">{published}</span><br/>
              {title}
              <a href={url} target="_blank" style={readmoreBtn} className="btn btn-sm rounded-0">Read More...</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsIteam;
