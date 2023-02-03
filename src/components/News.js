import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e15031f9611f4500a2595fa64397b920";
    let data =await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles});
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="my-3">Top Headlines</h3>
          {this.state.articles.map((element)=>{
            return <div className="row" key={element.url}>
            <div className="col-md-12">
            <NewsIteam
                  title={element.title}
                  author={element.author}
                  source = {element.source.name}
                  published = {element.publishedAt}
                  desc={element.description}
                  imgUrl={element.urlToImage}
                  url={element.url}
                />
            </div>
          </div>
          })}
        </div>
      </>
    );
  }

}

export default News;
