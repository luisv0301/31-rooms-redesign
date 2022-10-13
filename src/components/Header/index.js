import Button from "../Button";
import Navbar from "../Navbar";

import headerImg from "../../images/header-img.png";
import "./header.scss";

import React from "react";

export default function Header() {
  return (
    <div className="header__container">
      <Navbar />
      <header className="header">
        <div className="header__description">
          <div className="header__text">
            <h1>Transformamos tus ideas en productos digitales exitosos</h1>
            <p>
              Construimos sitios y aplicaciones web con un enfoque centrado en
              tus usuarios y objetivos, haciendo sencillo lo complejo.
            </p>
          </div>
          <div className="header__cta">
            <Button>Comenzar</Button>
          </div>
        </div>
        <div className="header__img-container">
          <img src={headerImg} alt="" width="388" height="506" />
        </div>
      </header>
    </div>
  );
}
