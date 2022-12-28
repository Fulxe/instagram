import { Link } from "react-router-dom";
import React from "react";
import "./home.css";
import Post from "./post/post";

function Home() {
  return (
    <div className="Home">
      <div className="home-center">
        <div className="home-left">
          <div className="story"></div>
          <Post />
        </div>
        <div className="home-right">
          <div className="right-up"></div>
          <div className="right-center"></div>
          <div className="right-down">
            <div className="dn-1">
              <p>About</p>
              <p>Help</p>
              <p>Press</p>
              <p>API</p>
              <p>Jobs</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Locations</p>
              <p>Language</p>
            </div>
            <div className="dn-2">
              <p>© 2022 Instagram from Meta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
