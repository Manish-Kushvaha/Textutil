import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                {/* <NavLink className={(e)=>{return e.isActive?"active":"nav"} }  aria-current="page" to="/">Home</NavLink> */}
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">{props.aboutText}</Link>
                {/* <NavLink className={(e)=>{return e.isActive?"active":"nav"} } aria-current="page" to="/about">{props.aboutText}</NavLink> */}
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark:' : 'light'}`} style={{cursor:'pointer'}}>
              <input className="form-check-input" type="checkbox" role="switch" id={`${props.btn}`} onClick={props.toggleMode} checked ={props.mode === 'dark'} style={{cursor:'pointer'}}/>
              <label className="form-check-label" for={`${props.btn}`}>Dark Mode</label>
              {/* <button type="button" className="btn btn-primary btn-sm mx-3" onclick={props.changeMode}>Change Mode</button> */}
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
  aboutText: "About",
};

