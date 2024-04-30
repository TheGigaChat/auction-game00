import React from "react";

function Container4Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container4Winner displayNone" id="Container4Winner">
      <section className="items">
        <section className="cardioSection">
          <p id="cardioImgPrice">+453$</p>
          <img
            src={require("./img/container4img/cardio.png")}
            alt="reload"
            id="cardioImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("cardioImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="runSection">
          <p id="runImgPrice">+515$</p>
          <img
            src={require("./img/container4img/run.png")}
            alt="reload"
            id="runImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("runImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="dumbbellsSection">
          <p id="dumbbellsImgPrice">+27$</p>
          <img
            src={require("./img/container4img/dumbbells.png")}
            alt="reload"
            id="dumbbellsImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("dumbbellsImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="benchSection">
          <p id="benchImgPrice">+133$</p>
          <img
            src={require("./img/container4img/bench.png")}
            alt="reload"
            id="benchImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("benchImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gymSection">
          <p id="gymImgPrice">+310$</p>
          <img
            src={require("./img/container4img/gym.png")}
            alt="reload"
            id="gymImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("gymImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="ballSection">
          <p id="ballImgPrice">+13$</p>
          <img
            src={require("./img/container4img/ball.png")}
            alt="reload"
            id="ballImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("ballImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="barbellSection">
          <p id="barbellImgPrice">+38$</p>
          <img
            src={require("./img/container4img/barbell.png")}
            alt="reload"
            id="barbellImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("barbellImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container4Winner;
