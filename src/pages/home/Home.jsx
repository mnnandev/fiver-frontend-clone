import React from "react";
import "./Home.scss";
import Feature from "../../Components/Featured/Feature";
import Slide from "../../Components/Slide/Slide";
import TrustedBy from "../../Components/TrustedBY/TrustedBy";
import CatCard from "../../Components/catCard/CatCArd";
import ProjectCard from "../../Components/projectCard/projectCard";
import { cards } from "../../data";
import { projects } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((item) => {
          return <CatCard item={item} key={item.id} />;
        })}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item ">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="../../../Public/Img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="../../../Public/Img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="../../../Public/Img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="../../../Public/Img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item ">
            <video src="../../../Public/img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="../../../Public/img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="../../../Public/img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="../../../Public/img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((item) => {
          return <ProjectCard item={item} key={item.id} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
