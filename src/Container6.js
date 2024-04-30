import React from "react";

function Container6() {
  return (
    <section className="Container6 displayNone" id="Container6">
      <section className="items">
        <section className="babyChairSection">
          <p>+49$</p>
          <img
            src={require("./img/container6img/babyChair.png")}
            alt="reload"
          />
        </section>
        <section className="babyBathSection">
          <p>+74$</p>
          <img src={require("./img/container6img/babyBath.png")} alt="reload" />
        </section>
        <section className="babyCarSection">
          <p>+100$</p>
          <img src={require("./img/container6img/babyCar.png")} alt="reload" />
        </section>
        <section className="babyTrendSection">
          <p>+99$</p>
          <img
            src={require("./img/container6img/babyTrend.png")}
            alt="reload"
          />
        </section>
        <section className="playardSection">
          <p>+73$</p>
          <img src={require("./img/container6img/playard.png")} alt="reload" />
        </section>
        <section className="duploSection">
          <p>+55$</p>
          <img src={require("./img/container6img/duplo.png")} alt="reload" />
        </section>
        <section className="raceCarSection">
          <p>+16$</p>
          <img src={require("./img/container6img/raceCar.png")} alt="reload" />
        </section>
      </section>
    </section>
  );
}

export default Container6;
