import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export class News extends Component {
  
  articles = [
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Andrea AdelsonESPN Senior Writer ",
      title: "North Carolina football coach Mack Brown signs 1-year extension",
      description:
        "North Carolina coach Mack Brown has agreed to a one-year contract extension that keeps him with the Tar Heels through the 2027 season.",
      url: "http://espn.go.com/college-football/story/_/id/35576738/north-carolina-football-coach-mack-brown-signs-1-year-extension",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0202%2Fr1125756_1296x729_16%2D9.jpg",
      publishedAt: "2023-02-02T15:43:00Z",
      content:
        "North Carolina coach Mack Brown has agreed to a one-year contract extension that keeps him with the Tar Heels through the 2027 season, the school announced Thursday.\r\nThe financial terms remain the s… [+986 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Mason Greenwood attempted rape charges dropped",
      description:
        "The Manchester United footballer was arrested amid allegations surrounding images and videos online.",
      url: "http://www.bbc.co.uk/news/uk-england-manchester-64502021",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/139A0/production/_127188208_hi073443971.jpg",
      publishedAt: "2023-02-02T14:37:21.6425931Z",
      content:
        "Charges of attempted rape and assault have been dropped against Manchester United footballer Mason Greenwood.\r\nThe 21-year-old was arrested in January last year amid allegations surrounding images an… [+1261 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Josh Payne",
      title:
        "Footballer Mason Greenwood has attempted rape and assault charges against him dropped",
      description:
        "Charges against the Manchester United striker were discontinued after a key witness withdrew from the case",
      url: "http://www.independent.co.uk/news/uk/crime/mason-greenwood-attempted-rape-charges-dropped-b2274517.html",
      urlToImage:
        "https://static.independent.co.uk/2022/11/21/10/1d5f4affc0c4caf4d99b12de8f6800c2Y29udGVudHNlYXJjaGFwaSwxNjY5MTEzMDE3-2.69879158.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-02-02T14:36:32Z",
      content:
        "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nManchester United footballer Mason Greenwood has had… [+2569 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "talkSPORT",
      title:
        "Football news LIVE: Mason Greenwood has police charges dropped, Man United star Varane announces France...",
      description: "",
      url: "https://talksport.com/football/1282444/football-news-gossip-live-mason-greenwood-varane-man-united-everton/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/02/JF-TALKSPORT-Enzo-Fernandez.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      publishedAt: "2023-02-02T14:12:10Z",
      content:
        "talkSPORT.com has you covered with all the latest Premier League news and transfer fallout in our dedicated football live blog.\r\nAfter a week dominated by FA Cup drama, transfer sagas and Carabao Cup… [+473 chars]",
    },
    {
      source: {id: "bbc-sport",name: "BBC Sport",
      },
      author: null,
      title: "France's Varane retires from international football",
      description:"France and Manchester United centre-back Raphael Varane has announced his retirement from international football.",
      url: "http://www.bbc.co.uk/sport/football/64498739",
      urlToImage:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14A09/production/_128498448_gettyimages-1449750621.jpg",
      publishedAt: "2023-02-02T12:52:35.3735475Z",
      content:"Varane won the World Cup with France in 2018\r\nFrance and Manchester United centre-back Raphael Varane has announced his retirement from international football.\r\nThe 29-year-old, who won the World Cup… [+1363 chars]",
    },
    {
      source: { id: "talksport",name: "TalkSport",},
      author: "Joe Moore",
      title:"Football White Paper: UK Government to release new Premier League legislation aimed at stopping ‘greedy’ Eu...",
      description:"France and Manchester United centre-back Raphael Varane has announced his retirement from international football.",
      url: "https://talksport.com/football/1320677/premier-league-club-owners-european-super-league/",
      urlToImage:"https://talksport.com/wp-content/uploads/sites/5/2022/10/43444697-9143-4d7c-922f-2dc8a6891553.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2023-02-02T10:50:13Z",
      content:
        "The Premier League is set to finally have new radical legislation enforced by the UK government which puts tighter restrictions on who can buy football clubs and how they are run.\r\nThe government is … [+2748 chars]",
    },
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
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
                  desc={element.description}
                  imgUrl={element.urlToImage}
                />
            </div>
          </div>
          })}

          {/* <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <NewsIteam
                  title={element.title}
                  desc={element.description}
                  imgUrl={element.urlToImage}
                />
              </div>;
            })
            }
          </div> */}

        </div>
      </>
    );
  }

}

export default News;
