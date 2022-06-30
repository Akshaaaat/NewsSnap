import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default function News(props) {

  //const [apiKey, setApiKey] = useState('2ca339fcef0048ceb08e9b1b5ffc5b5e');       //choosing the apiKey
  const [apiKey, setApiKey] = useState('5e86db95e702451898e8053ad76acc34');

  const [articles, setArticles] = useState([]);                     //initializing the state
  const [page, setPage] = useState(1);
  const[totalResults, setTotalResults]= useState(0);
  const[loading, setLoading]= useState(true);

  const updateNews= async ()=>{
    window.scrollTo(0,0);
        props.setProgress(6);
    setLoading(true);
    
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${apiKey}&pagesize=12&page=${page}`;
    let data= await fetch(url);                 //fetching data from API
        props.setProgress(78);
    let parsedData= await data.json();          //converting the Fetched Data to json
    console.log(parsedData);

    setArticles(parsedData.articles);           //Changing state to new Data

    setLoading(false);
    setTotalResults(parsedData.totalResults);
        props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line;
    document.title=`NewsSnap- ${(props.catagory).charAt(0).toUpperCase() + (props.catagory).slice(1)} News`;
  }, [])
  
  const handlePreviousClick = async () =>{
    setPage(page-1);
    updateNews();
  }
  const handleNextClick = async () =>{
    setPage(page+1);
    updateNews();
  }

  return (
    <div style={{color: props.mode==='light'?'black':'whitesmoke', marginTop:'68px'}}>
      <div className="container my-3">
        <h2 style={{fontSize:'22px', margin:'3px', padding:'2px'}} className="text-center">
          Headlines- {(props.catagory).charAt(0).toUpperCase() + (props.catagory).slice(1)} News
        </h2>
        {
          loading && <Spinner mode={props.mode}/>
        }
        {
          !loading &&
          <div className="row">
            {articles.map((element)=>
              {
                return <div className="col-md-4" key={element.url}>
                <NewsItem
                  mode={props.mode}
                  title={element.title}
                  desc={element.description?element.description.slice(0,100)+ "...":""}
                  newsURL={element.url}
                  imageURL={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
                />
              </div>
              }         
            )}
          </div>
        }
      </div>
      {
        !(loading) && <div className="container d-flex justify-content-between">
          <button type="button" className={`btn btn-${props.mode==='light'?'dark':'primary'}`} onClick={handlePreviousClick} disabled={page<=1} >Previous</button>
          <button type="button" className={`btn btn-${props.mode==='light'?'dark':'primary'}`} onClick={handleNextClick} disabled={ Math.ceil(totalResults/12)<=page } >Next</button>
        </div>
      }
    </div>
  );
  
}
News.defaultProps = {
  country:'in',
  mode:'light',
  catagory:'general'
}
News.propTypes= {
  country: PropTypes.string,
  mode: PropTypes.string,
  catagory: PropTypes.string
}