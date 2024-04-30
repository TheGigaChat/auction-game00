import React from "react";

function Container3Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container3Winner displayNone" id="Container3Winner">
      <section className="items">
        <section className="guitarSection">
          <p id="guitarImgPrice">+100$</p>
          <img
            src={require("./img/container3img/guitar.png")}
            alt="reload"
            id="guitarImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("guitarImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="audioSection">
          <p id="audioImgPrice">+40$</p>
          <img
            src={require("./img/container3img/audio.png")}
            alt="reload"
            id="audioImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("audioImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="drumsSection">
          <p id="drumsImgPrice">+729$</p>
          <img
            src={require("./img/container3img/drums.png")}
            alt="reload"
            id="drumsImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("drumsImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="stringSection">
          <p id="stringImgPrice">+204$</p>
          <img
            src={require("./img/container3img/string.png")}
            alt="reload"
            id="stringImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("stringImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="pianoSection">
          <p id="pianoImgPrice">+849$</p>
          <img
            src={require("./img/container3img/piano.png")}
            alt="reload"
            id="pianoImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("pianoImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="midiSection">
          <p id="midiImgPrice">+79$</p>
          <img
            src={require("./img/container3img/midi.png")}
            alt="reload"
            id="midiImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("midiImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="lightSection">
          <p id="lightImgPrice">+25$</p>
          <img
            src={require("./img/container3img/light.png")}
            alt="reload"
            id="lightImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("lightImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container3Winner;
