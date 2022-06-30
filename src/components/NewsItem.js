import React from 'react';

export default function NewsItem(props) {
  return (
    <div style={{margin:'4px'}}>
        <div className="card" style={{width: "21rem", backgroundColor: props.mode==='light'?'white':'#1d2024'}}>
          <img src={props.imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <a href={props.newsURL} className="btn btn-outline-info btn-sm" target="_blank" rel='noreferrer'>Read More</a>
          </div>
          </div>
    </div>
  )
}