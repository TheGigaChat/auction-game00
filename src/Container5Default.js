import React from "react";

function Container5Default() {
  return (
    <section className="Container5Default displayNone" id="Container5Default">
      <section className="items">
        <section className="akuSection">
          <p>+299$</p>
          <img src={require("./img/container5img/aku.png")} alt="reload" />
        </section>
        <section className="generatorSection">
          <p>+329$</p>
          <img
            src={require("./img/container5img/generator.png")}
            alt="reload"
          />
        </section>
        <section className="sawSection">
          <p>+149$</p>
          <img src={require("./img/container5img/saw.png")} alt="reload" />
        </section>
        <section className="lightWorkSection">
          <p>+349$</p>
          <img
            src={require("./img/container5img/lightWork.png")}
            alt="reload"
          />
        </section>
        <section className="gardenSection">
          <p>+129$</p>
          <img src={require("./img/container5img/garden.png")} alt="reload" />
        </section>
        <section className="radioSection">
          <p>+229$</p>
          <img src={require("./img/container5img/radio.png")} alt="reload" />
        </section>
        <section className="colorSection">
          <p>+890$</p>
          <img src={require("./img/container5img/color.png")} alt="reload" />
        </section>
      </section>
    </section>
  );
}

export default Container5Default;
