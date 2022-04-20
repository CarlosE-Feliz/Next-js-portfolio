/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NavBar from "./_navBar";

function Home() {
  const techContainer = React.createRef();
  const [controlScroll, setControlScroll] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      if (techContainer.current) {
        let positionTech = techContainer.current.getBoundingClientRect().top;
        let windowHeight = window.innerHeight / 1.5;
        if (positionTech < windowHeight) {
          setControlScroll(() => true);
        }
      }
    });
  }

  return (
    <>
      <title>Home</title>
      <div className="main">
        <NavBar />
        <div className="intro flexColumn">
          <h1>Algun texto de programacion</h1>
          <p>
            Hola, soy un desarrollador web de Republica Dominicana, Santo
            Domingo. Agregar mas cosas aqui lol.
          </p>
        </div>
        <div className="info flexColumn">
          <div className="projectContainer flexRow">
            <div className="card cardShadow" style={{ width: "18rem" }}>
              <img className="card-img-top" src="#" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card cardShadow" style={{ width: "18rem" }}>
              <img className="card-img-top" src="#" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card cardShadow" style={{ width: "18rem" }}>
              <img className="card-img-top" src="#" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card cardShadow" style={{ width: "18rem" }}>
              <img className="card-img-top" src="#" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="thecContainer flexRow">
              <div className="item item1 relative">
                <p>JavaScript</p>
              </div>
              <div className="item item2 relative">
                <p>React</p>
              </div>
              <div className="item item3 relative">
                <p>Redux</p>
              </div>
              <div className="item item3 relative">
                <p>CSS/SCSS</p>
              </div>
              <div className="item item2 relative">
                <p>Next.js</p>
              </div>
              <div className="item item1 relative">
                <p>TypeScript</p>
              </div>
            </div>
            <div className="thecContainer flexRow">
              <div className="item itemT1 relative">
                <p>JavaScript</p>
              </div>
              <div className="item itemT2 relative">
                <p>React</p>
              </div>
              <div className="item itemT3 relative">
                <p>Redux</p>
              </div>
              <div className="item itemT3 relative">
                <p>CSS/SCSS</p>
              </div>
              <div className="item itemT2 relative">
                <p>Next.js</p>
              </div>
              <div className="item itemT1 relative">
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flexRow">
          <div className="footerItem1">
            <p>Something here</p>
          </div>
          <div className="footerItem2">
            <p>Something here</p>
          </div>
          <div className="footerItem3">
            <p>Something here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
