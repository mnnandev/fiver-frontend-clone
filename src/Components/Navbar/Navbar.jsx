import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John doe",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="Link">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/191115767_795439598031687_8849297049372473334_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9rf_o9S90oQAX9lZloR&_nc_ht=scontent.flhe5-1.fna&oh=00_AfDZRaOnQ5ZoRH75qTNVZwMXIB2PsY7gKJarM71qolZJ_w&oe=64331481"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open ? (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="Link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="Link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="Link" to="/orders">
                    Orders
                  </Link>
                  <Link className="Link" to="/messages">
                    Messages
                  </Link>
                  <Link className="Link" to="/">
                    Logout
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="Link" to="/">
              Graphics & Designs
            </Link>
            <Link className="Link" to="/">
              Video & Animation
            </Link>
            <Link className="Link" to="/">
              Writing & Translation
            </Link>
            <Link className="Link" to="/">
              AI Services
            </Link>
            <Link className="Link" to="/">
              Digital Marketing
            </Link>
            <Link className="Link" to="/">
              Music & Audio
            </Link>
            <Link className="Link" to="/">
              Programming & Tech
            </Link>
            <Link className="Link" to="/">
              Business
            </Link>
            <Link className="Link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
