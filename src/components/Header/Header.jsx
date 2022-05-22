import "./Header.css";
import profile from "../../images/profile-img.jpg";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {


    return (<>
    <div className="header">
      <div className="desc-container">
        <p className="desc">
          I am a Full Stack Web Developer
          <br />
          who uses my creativity to produce <br />
          Innovative Websites.
        </p>
      </div>
      <img src={profile} className="profile-img"></img>
      <FontAwesomeIcon icon={faArrowDown} className="i-arrow-down" />
    </div>
    </>
  );
}

export default Header;
