import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="../../../Public/img/search.png" alt="" />
              <input type="text" placeholder='try "building mobile" app' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>popular :</span>
            <button>Web Designs</button>
            <button>Word Press</button>
            <button>Logo Design</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src="../../../Public/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
