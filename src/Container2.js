import React from "react";

function Container2() {
  return (
    <section className="Container2 displayNone" id="Container2">
      <section className="items">
        <section className="bagSection">
          <p>+73$</p>
          <img src={require("./img/container2img/bag.png")} alt="reload" />
        </section>
        <section className="luggageSection">
          <p>+240$</p>
          <img src={require("./img/container2img/luggage.png")} alt="reload" />
        </section>
        <section className="newBalanceSection">
          <p>+178$</p>
          <img
            src={require("./img/container2img/newBalance.png")}
            alt="reload"
          />
        </section>
        <section className="saintLaurentSection">
          <p>+1001$</p>
          <img
            src={require("./img/container2img/saintLaurent.png")}
            alt="reload"
          />
        </section>
        <section className="caramelSection">
          <p>+420$</p>
          <img src={require("./img/container2img/caramel.png")} alt="reload" />
        </section>
        <section className="sneakersSection">
          <p>+120$</p>
          <img src={require("./img/container2img/sneakers.png")} alt="reload" />
        </section>
        <section className="glassesSection">
          <p>+467$</p>
          <img src={require("./img/container2img/glasses.png")} alt="reload" />
        </section>
      </section>
    </section>
  );
}

export default Container2;
