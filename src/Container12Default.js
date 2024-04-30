import React from "react";

function Container12Default() {
  return (
    <section className="Container12Default displayNone" id="Container12Default">
      <section className="items">
        <section className="motoJacketSection">
          <p>+109$</p>
          <img
            src={require("./img/container12img/motoJacket.png")}
            alt="reload"
          />
        </section>
        <section className="motoHerculesSection">
          <p>+1465$</p>
          <img
            src={require("./img/container12img/motoHercules.png")}
            alt="reload"
          />
        </section>
        <section className="motoCoverSection">
          <p>+35$</p>
          <img
            src={require("./img/container12img/motoCover.png")}
            alt="reload"
          />
        </section>
        <section className="helmetSection">
          <p>+79$</p>
          <img src={require("./img/container12img/helmet.png")} alt="reload" />
        </section>
        <section className="motoClovesSection">
          <p>+65$</p>
          <img
            src={require("./img/container12img/motoCloves.png")}
            alt="reload"
          />
        </section>
        <section className="motoEngineSection">
          <p>+89$</p>
          <img
            src={require("./img/container12img/motoEngine.png")}
            alt="reload"
          />
        </section>
      </section>
    </section>
  );
}

export default Container12Default;
