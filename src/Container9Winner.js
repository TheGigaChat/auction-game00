import React from "react";

function Container9Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container9Winner displayNone" id="Container9Winner">
      <section className="items">
        <section className="huntingGunSection">
          <p id="huntingGunImgPrice">+1230$</p>
          <img
            src={require("./img/container9img/huntingGun.png")}
            alt="reload"
            id="huntingGunImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("huntingGunImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="tentSection">
          <p id="tentImgPrice">+539$</p>
          <img
            src={require("./img/container9img/tent.png")}
            alt="reload"
            id="tentImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("tentImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="footwearSection">
          <p id="footwearImgPrice">+199$</p>
          <img
            src={require("./img/container9img/footwear.png")}
            alt="reload"
            id="footwearImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("footwearImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="satteliteComunicatorSection">
          <p id="satteliteComunicatorImgPrice">+272$</p>
          <img
            src={require("./img/container9img/satteliteComunicator.png")}
            alt="reload"
            id="satteliteComunicatorImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("satteliteComunicatorImgPrice")
                    .innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="headLampSection">
          <p id="headLampImgPrice">+78$</p>
          <img
            src={require("./img/container9img/headLamp.png")}
            alt="reload"
            id="headLampImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("headLampImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="handleLampSection">
          <p id="handleLampImgPrice">+63$</p>
          <img
            src={require("./img/container9img/handleLamp.png")}
            alt="reload"
            id="handleLampImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("handleLampImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="huntingBackpackSection">
          <p id="huntingBackpackImgPrice">+32$</p>
          <img
            src={require("./img/container9img/huntingBackpack.png")}
            alt="reload"
            id="huntingBackpackImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("huntingBackpackImgPrice").innerText
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

export default Container9Winner;
