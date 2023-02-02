import React, { Component } from 'react'
import NewsIteam from './NewsIteam'

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className='my-3'>Top Headlines</h3>
          <div className="row">
            <div className="col-md-3">
              <NewsIteam title="Title 1" desc="Desc 1"/>
            </div>
            <div className="col-md-3">
              <NewsIteam title="Title 1" desc="Desc 1"/>
            </div>
            <div className="col-md-3">
              <NewsIteam title="Title 1" desc="Desc 1"/>
            </div>
            <div className="col-md-3">
              <NewsIteam title="Title 1" desc="Desc 1"/>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}

export default News
