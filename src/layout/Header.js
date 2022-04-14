import React, { Component } from 'react';



class Header extends Component {
    state = {  } 
    render() { 
        return (
          <header className="header">
            <div className="header-nav">
              <a className="brand__logo" href="#!">
                Creative Movie App
              </a>
              <ul>
                <li>
                  <a href="#!">Movies</a>
                </li>
                <li>
                  <a href="#!">Serials</a>
                </li>
                <li>
                  <a href="#!">Logout</a>
                </li>
              </ul>
            </div>
            <div className="main-head">
              <a href="#!">
                <img
                  src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"
                  alt=""
                />
              </a>
            </div>
          </header>
        );
    }
}
 
export default Header;