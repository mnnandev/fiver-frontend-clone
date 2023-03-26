import React from "react";
import { useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../Components/GigCard/Gigcard";
import "./Gigs.scss";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Fiverr > GRAPHICS & DESIGNS</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundries of art and technolgy with Fiverr's AI artist
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newset"}
            </span>
            <img
              src="../../../Public/img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((item) => {
            return <GigCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
