import React from "react";

function Container13Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container13Winner displayNone" id="Container13Winner">
      <section className="items">
        <section className="massageChairSection">
          <p id="massageChairImgPrice">+275$</p>
          <img
            src={require("./img/container13img/massageChair.png")}
            alt="reload"
            id="massageChairImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("massageChairImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="cartSection">
          <p id="cartImgPrice">+1012$</p>
          <img
            src={require("./img/container13img/cart.png")}
            alt="reload"
            id="cartImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("cartImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gipsSection">
          <p id="gipsImgPrice">+298$</p>
          <img
            src={require("./img/container13img/gips.png")}
            alt="reload"
            id="gipsImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("gipsImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="crpSection">
          <p id="crpImgPrice">+1309$</p>
          <img
            src={require("./img/container13img/crp.png")}
            alt="reload"
            id="crpImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("crpImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="handleMassagerSection">
          <p id="handleMassagerImgPrice">+259$</p>
          <img
            src={require("./img/container13img/handleMassager.png")}
            alt="reload"
            id="handleMassagerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("handleMassagerImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="caneSection">
          <p id="caneImgPrice">+21$</p>
          <img
            src={require("./img/container13img/cane.png")}
            alt="reload"
            id="caneImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("caneImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="pulceSection">
          <p id="pulceImgPrice">+36$</p>
          <img
            src={require("./img/container13img/pulce.png")}
            alt="reload"
            id="pulceImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("pulceImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container13Winner;
