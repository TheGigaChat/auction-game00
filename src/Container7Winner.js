import React from "react";

function Container7Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container7Winner displayNone" id="Container7Winner">
      <section className="items">
        <section className="antiquePaintSection">
          <p id="antiquePaintImgPrice">+896$</p>
          <img
            src={require("./img/container7img/antiquePaint.png")}
            alt="reload"
            id="antiquePaintImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiquePaintImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueChairSection">
          <p id="antiqueChairImgPrice">+381$</p>
          <img
            src={require("./img/container7img/antiqueChair.png")}
            alt="reload"
            id="antiqueChairImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueChairImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueClockSection">
          <p id="antiqueClockImgPrice">+498$</p>
          <img
            src={require("./img/container7img/antiqueClock.png")}
            alt="reload"
            id="antiqueClockImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueClockImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueSculptureSection">
          <p id="antiqueSculptureImgPrice">+199$</p>
          <img
            src={require("./img/container7img/antiqueSculpture.png")}
            alt="reload"
            id="antiqueSculptureImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueSculptureImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueVaseSection">
          <p id="antiqueVaseImgPrice">+182$</p>
          <img
            src={require("./img/container7img/antiqueVase.png")}
            alt="reload"
            id="antiqueVaseImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueVaseImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueLampSection">
          <p id="antiqueLampImgPrice">+323$</p>
          <img
            src={require("./img/container7img/antiqueLamp.png")}
            alt="reload"
            id="antiqueLampImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueLampImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="antiqueSofaSection">
          <p id="antiqueSofaImgPrice">+581$</p>
          <img
            src={require("./img/container7img/antiqueSofa.png")}
            alt="reload"
            id="antiqueSofaImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("antiqueSofaImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container7Winner;
