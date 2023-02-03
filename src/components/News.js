import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e15031f9611f4500a2595fa64397b920&pagesize=6&page=1";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,
      totalResults: parseData.totalResults,
     });
  }

  handlePrevClick = async (e) => {
    e.preventDefault();
    console.log("PREV");

  let url =`https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e15031f9611f4500a2595fa64397b920&pagesize=6&page=${this.state.page - 1}`;
  let data = await fetch(url);
  let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles 
    });
  };

  handleNextClick = async (e) => {
    e.preventDefault();
    console.log("Next");

    if( this.state.page+1>Math.ceil(this.state.totalResults/6)){

    }
    else{

      let url =`https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e15031f9611f4500a2595fa64397b920&pagesize=6&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parseData = await data.json();
    
        this.setState({
          page: this.state.page + 1,
          articles: parseData.articles 
        });
    }
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="my-3">Top Headlines</h3>
          {this.state.articles.map((element) => {
            return (
              <div className="row" key={element.url}>
                <div className="col-md-12">
                  <NewsIteam
                    title={element.title}
                    author={element.author}
                    source={element.source.name}
                    published={element.publishedAt}
                    desc={element.description}
                    imgUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between p-5">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-sm btn-outline-success border border-dark rounded-0"
          >
            &#8249; Previous
          </button>
          <button
            onClick={this.handleNextClick}
            className="btn btn-sm btn-outline-info border border-dark rounded-0"
          >
            Next &#8250;
          </button>
        </div>
      </>
    );
  }
}

export default News;
