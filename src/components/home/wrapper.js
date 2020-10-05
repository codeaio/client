import React from "react";
import Footer from './footer';
import Main from './main';
import Header from './header';

function Wrapper() {
  return (
    <div>
        <Header stylish={true} />
        <Main />
        <Footer/>
        <div>
        <div className="Box-Grid bg-blue">
          <div className="Box">
            <div className="Small-Box"></div>
            <h2>TUTORIAL</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            Read More
          </div>
          <div className="Box">
          <div className="Small-Box"></div>
            <h2>CONFIG</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            Read More
          </div>
          <div className="Box">
            <div className="Small-Box"></div>
            <h2>CONFIG</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo?</p>
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wrapper;
