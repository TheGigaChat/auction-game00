import React from "react";

function Container6Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container6Winner displayNone" id="Container6Winner">
      <section className="items">
        <section className="babyChairSection">
          <p id="babyChairImgPrice">+49$</p>
          <img
            src={require("./img/container6img/babyChair.png")}
            alt="reload"
            id="babyChairImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("babyChairImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="babyBathSection">
          <p id="babyBathImgPrice">+74$</p>
          <img
            src={require("./img/container6img/babyBath.png")}
            alt="reload"
            id="babyBathImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("babyBathImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="babyCarSection">
          <p id="babyCarImgPrice">+100$</p>
          <img
            src={require("./img/container6img/babyCar.png")}
            alt="reload"
            id="babyCarImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("babyCarImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="babyTrendSection">
          <p id="babyTrendImgPrice">+99$</p>
          <img
            src={require("./img/container6img/babyTrend.png")}
            alt="reload"
            id="babyTrendImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("babyTrendImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="playardSection">
          <p id="playardImgPrice">+73$</p>
          <img
            src={require("./img/container6img/playard.png")}
            alt="reload"
            id="playardImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("playardImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="duploSection">
          <p id="duploImgPrice">+55$</p>
          <img
            src={require("./img/container6img/duplo.png")}
            alt="reload"
            id="duploImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("duploImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="raceCarSection">
          <p id="raceCarImgPrice">+16$</p>
          <img
            src={require("./img/container6img/raceCar.png")}
            alt="reload"
            id="raceCarImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("raceCarImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container6Winner;
