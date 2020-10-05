import React from "react";
import Sidepan from './sidepan';
import Article from './article';
import './style/docs.css';
import Header from '../home/header';

function Docs() {
  return (
    <>
      <Header stylish={false} />
      <div className="Docs">        
          <Sidepan />
          <Article />
      </div>
    </>
  );
}
export default Docs;
