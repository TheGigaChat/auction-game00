import React from "react";

function Container15Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container15Winner displayNone" id="Container15Winner">
      <section className="items">
        <section className="maximaRefSection">
          <p id="maximaRefImgPrice">+550$</p>
          <img
            src={require("./img/container15img/maximaRef.png")}
            alt="reload"
            id="maximaRefImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("maximaRefImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="IceCubeMakerSection">
          <p id="IceCubeMakerImgPrice">+644$</p>
          <img
            src={require("./img/container15img/IceCubeMaker.png")}
            alt="reload"
            id="IceCubeMakerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("IceCubeMakerImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="frySection">
          <p id="fryImgPrice">+218$</p>
          <img
            src={require("./img/container15img/fry.png")}
            alt="reload"
            id="fryImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("fryImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="donutMakerSection">
          <p id="donutMakerImgPrice">+330$</p>
          <img
            src={require("./img/container15img/donutMaker.png")}
            alt="reload"
            id="donutMakerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("donutMakerImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="hotDogHeaterSection">
          <p id="hotDogHeaterImgPrice">+186$</p>
          <img
            src={require("./img/container15img/hotDogHeater.png")}
            alt="reload"
            id="hotDogHeaterImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("hotDogHeaterImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="soupSection">
          <p id="soupImgPrice">+109$</p>
          <img
            src={require("./img/container15img/soup.png")}
            alt="reload"
            id="soupImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("soupImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="sausageFillerSection">
          <p id="sausageFillerImgPrice">+230$</p>
          <img
            src={require("./img/container15img/sausageFiller.png")}
            alt="reload"
            id="sausageFillerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("sausageFillerImgPrice").innerText
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

export default Container15Winner;
