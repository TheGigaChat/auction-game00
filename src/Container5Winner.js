import React from "react";

function Container5Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container5Winner displayNone" id="Container5Winner">
      <section className="items">
        <section className="akuSection">
          <p id="akuImgPrice">+299$</p>
          <img
            src={require("./img/container5img/aku.png")}
            alt="reload"
            id="akuImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("akuImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="generatorSection">
          <p id="generatorImgPrice">+329$</p>
          <img
            src={require("./img/container5img/generator.png")}
            alt="reload"
            id="generatorImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("generatorImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="sawSection">
          <p id="sawImgPrice">+149$</p>
          <img
            src={require("./img/container5img/saw.png")}
            alt="reload"
            id="sawImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("sawImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="lightWorkSection">
          <p id="lightWorkImgPrice">+349$</p>
          <img
            src={require("./img/container5img/lightWork.png")}
            alt="reload"
            id="lightWorkImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("lightWorkImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gardenSection">
          <p id="gardenImgPrice">+129$</p>
          <img
            src={require("./img/container5img/garden.png")}
            alt="reload"
            id="gardenImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("gardenImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="radioSection">
          <p id="radioImgPrice">+229$</p>
          <img
            src={require("./img/container5img/radio.png")}
            alt="reload"
            id="radioImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("radioImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="colorSection">
          <p id="colorImgPrice">+890$</p>
          <img
            src={require("./img/container5img/color.png")}
            alt="reload"
            id="colorImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("colorImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container5Winner;
