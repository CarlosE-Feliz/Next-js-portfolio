/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cards from "./_homeData/cards";
import Items from "./_homeData/items";
import NavBar from "./_navBar";

function Home() {
  const techContainer = React.createRef();
  const router = useRouter();
  // const [controlScroll, setControlScroll] = useState(false);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", function () {
  //     if (techContainer.current) {
  //       let positionTech = techContainer.current.getBoundingClientRect().top;
  //       let windowHeight = window.innerHeight / 1.5;
  //       if (positionTech < windowHeight) {
  //         setControlScroll(() => true);
  //       }
  //     }
  //   });
  // }

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
          <Cards />
          <Items />
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
