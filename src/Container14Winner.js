import React from "react";

function Container14Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container14Winner displayNone" id="Container14Winner">
      <section className="items">
        <section className="houseCoolerSection">
          <p id="houseCoolerImgPrice">+449$</p>
          <img
            src={require("./img/container14img/houseCooler.png")}
            alt="reload"
            id="houseCoolerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("houseCoolerImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="houseRefrigeratorSection">
          <p id="houseRefrigeratorImgPrice">+2349$</p>
          <img
            src={require("./img/container14img/houseRefrigerator.png")}
            alt="reload"
            id="houseRefrigeratorImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("houseRefrigeratorImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="houseTVSection">
          <p id="houseTVImgPrice">+599$</p>
          <img
            src={require("./img/container14img/houseTV.png")}
            alt="reload"
            id="houseTVImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("houseTVImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="houseCoffeeSection">
          <p id="houseCoffeeImgPrice">+125$</p>
          <img
            src={require("./img/container14img/houseCoffee.png")}
            alt="reload"
            id="houseCoffeeImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("houseCoffeeImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="houseKnifeSection">
          <p id="houseKnifeImgPrice">+549$</p>
          <img
            src={require("./img/container14img/houseKnife.png")}
            alt="reload"
            id="houseKnifeImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("houseKnifeImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="houseRobotSection">
          <p id="houseRobotImgPrice">+369$</p>
          <img
            src={require("./img/container14img/houseRobot.png")}
            alt="reload"
            id="houseRobotImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("houseRobotImgPrice").innerText
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

export default Container14Winner;
