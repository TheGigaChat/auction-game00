import React from "react";

function Container4Default() {
  return (
    <section className="Container4Default displayNone" id="Container4Default">
      <section className="items">
        <section className="cardioSection">
          <p>+453$</p>
          <img src={require("./img/container4img/cardio.png")} alt="reload" />
        </section>
        <section className="runSection">
          <p>+515$</p>
          <img src={require("./img/container4img/run.png")} alt="reload" />
        </section>
        <section className="dumbbellsSection">
          <p>+27$</p>
          <img
            src={require("./img/container4img/dumbbells.png")}
            alt="reload"
          />
        </section>
        <section className="benchSection">
          <p>+133$</p>
          <img src={require("./img/container4img/bench.png")} alt="reload" />
        </section>
        <section className="gymSection">
          <p>+310$</p>
          <img src={require("./img/container4img/gym.png")} alt="reload" />
        </section>
        <section className="ballSection">
          <p>+13$</p>
          <img src={require("./img/container4img/ball.png")} alt="reload" />
        </section>
        <section className="barbellSection">
          <p>+38$</p>
          <img src={require("./img/container4img/barbell.png")} alt="reload" />
        </section>
      </section>
    </section>
  );
}

export default Container4Default;
