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
      </div>
    </div>
  );
}
export default Wrapper;
