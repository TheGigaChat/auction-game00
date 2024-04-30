import React from "react";

function Container2Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };
  return (
    <section className="Container2Winner displayNone" id="Container2Winner">
      <section className="items">
        <section className="bagSection">
          <p id="bagImgPrice">+73$</p>
          <img
            src={require("./img/container2img/bag.png")}
            alt="reload"
            id="bagImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("bagImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="luggageSection">
          <p id="luggageImgPrice">+240$</p>
          <img
            src={require("./img/container2img/luggage.png")}
            alt="reload"
            id="luggageImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("luggageImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="newBalanceSection">
          <p id="newBalanceImgPrice">+178$</p>
          <img
            src={require("./img/container2img/newBalance.png")}
            alt="reload"
            id="newBalanceImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("newBalanceImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="saintLaurentSection">
          <p id="saintLaurentImgPrice">+1001$</p>
          <img
            src={require("./img/container2img/saintLaurent.png")}
            alt="reload"
            id="saintLaurentImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("saintLaurentImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="caramelSection">
          <p id="caramelImgPrice">+420$</p>
          <img
            src={require("./img/container2img/caramel.png")}
            alt="reload"
            id="caramelImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("caramelImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="sneakersSection">
          <p id="sneakersImgPrice">+120$</p>
          <img
            src={require("./img/container2img/sneakers.png")}
            alt="reload"
            id="sneakersImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("sneakersImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="glassesSection">
          <p id="glassesImgPrice">+467$</p>
          <img
            src={require("./img/container2img/glasses.png")}
            alt="reload"
            id="glassesImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("glassesImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container2Winner;
