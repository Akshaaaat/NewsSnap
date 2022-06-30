import React from 'react';
import loadingLight from './Images/loading-light.gif';
import loadingDark from './Images/loading-dark.gif';

export default function Spinner(props) {
  return (
    <div style={{height:'50vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: props.mode==='light'?'white':'#2c3034' }} >
        <div className="spinner" style={{}}>
          <img src={props.mode==='light'?loadingLight:loadingDark} alt="loading..." />
        </div>
    </div>
  )
}