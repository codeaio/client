import React from "react";
import Footer from './footer';
import Header from './header';
import Main from './main';

function Wrapper() {
  return (
    <div>
        <Main />
        <Footer/>
        <div>
        <div className="Box-Grid bg-blue">
          <div className="Box">
            <div className="Small-Box"></div>
            <h2>TUTORIAL</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            <a>Read More</a>
          </div>
          <div className="Box">
          <div className="Small-Box"></div>
            <h2>CONFIG</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            <a>Read More</a>
          </div>
          <div className="Box">
            <div className="Small-Box"></div>
            <h2>CONFIG</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            <a>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wrapper;
