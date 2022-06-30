import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{borderBottom:'1px solid rgb(221 219 230 / 30%)'}}>
    
      <div className="container-fluid">
        <div style={{fontSize: '21px', fontWeight:'500', padding:'4px', color: props.mode==='light'?'black':'whitesmoke'}} >
          News Snap
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'black':'whitesmoke'}}>
            Dark Mode
          </label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}