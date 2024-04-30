import React from "react";

function Container3() {
  return (
    <section className="Container3 displayNone" id="Container3">
      <section className="items">
        <section className="guitarSection">
          <p>+100$</p>
          <img src={require("./img/container3img/guitar.png")} alt="reload" />
        </section>
        <section className="audioSection">
          <p>+40$</p>
          <img src={require("./img/container3img/audio.png")} alt="reload" />
        </section>
        <section className="drumsSection">
          <p>+729$</p>
          <img src={require("./img/container3img/drums.png")} alt="reload" />
        </section>
        <section className="stringSection">
          <p>+204$</p>
          <img src={require("./img/container3img/string.png")} alt="reload" />
        </section>
        <section className="pianoSection">
          <p>+849$</p>
          <img src={require("./img/container3img/piano.png")} alt="reload" />
        </section>
        <section className="midiSection">
          <p>+79$</p>
          <img src={require("./img/container3img/midi.png")} alt="reload" />
        </section>
        <section className="lightSection">
          <p>+25$</p>
          <img src={require("./img/container3img/light.png")} alt="reload" />
        </section>
      </section>
    </section>
  );
}

export default Container3;
