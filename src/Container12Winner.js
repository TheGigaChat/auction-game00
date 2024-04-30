import React from "react";

function Container12Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container12Winner displayNone" id="Container12Winner">
      <section className="items">
        <section className="motoJacketSection">
          <p id="motoJacketImgPrice">+109$</p>
          <img
            src={require("./img/container12img/motoJacket.png")}
            alt="reload"
            id="motoJacketImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("motoJacketImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="motoHerculesSection">
          <p id="motoHerculesImgPrice">+1465$</p>
          <img
            src={require("./img/container12img/motoHercules.png")}
            alt="reload"
            id="motoHerculesImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("motoHerculesImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="motoCoverSection">
          <p id="motoCoverImgPrice">+35$</p>
          <img
            src={require("./img/container12img/motoCover.png")}
            alt="reload"
            id="motoCoverImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("motoCoverImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="helmetSection">
          <p id="helmetImgPrice">+79$</p>
          <img
            src={require("./img/container12img/helmet.png")}
            alt="reload"
            id="helmetImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("helmetImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="motoClovesSection">
          <p id="motoClovesImgPrice">+65$</p>
          <img
            src={require("./img/container12img/motoCloves.png")}
            alt="reload"
            id="motoClovesImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("motoClovesImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="motoEngineSection">
          <p id="motoEngineImgPrice">+89$</p>
          <img
            src={require("./img/container12img/motoEngine.png")}
            alt="reload"
            id="motoEngineImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("motoEngineImgPrice").innerText
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

export default Container12Winner;
