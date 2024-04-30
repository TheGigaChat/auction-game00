import React from "react";

function Container10Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container10Winner displayNone" id="Container10Winner">
      <section className="items">
        <section className="printerSection">
          <p id="printerImgPrice">+199$</p>
          <img
            src={require("./img/container10img/printer.png")}
            alt="reload"
            id="printerImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("printerImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gamingTable1Section">
          <p id="gamingTable1ImgPrice">+99$</p>
          <img
            src={require("./img/container10img/gamingTable1.png")}
            alt="reload"
            id="gamingTable1Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("gamingTable1ImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="laptop1Section">
          <p id="laptop1ImgPrice">+799$</p>
          <img
            src={require("./img/container10img/laptop1.png")}
            alt="reload"
            id="laptop1Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("laptop1ImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="markerBoardSection">
          <p id="markerBoardImgPrice">+89$</p>
          <img
            src={require("./img/container10img/markerBoard.png")}
            alt="reload"
            id="markerBoardImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("markerBoardImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gamingTable2Section">
          <p id="gamingTable2ImgPrice">+189$</p>
          <img
            src={require("./img/container10img/gamingTable2.png")}
            alt="reload"
            id="gamingTable2Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("gamingTable2ImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="laptop2Section">
          <p id="laptop2ImgPrice">+899$</p>
          <img
            src={require("./img/container10img/laptop2.png")}
            alt="reload"
            id="laptop2Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("laptop2ImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="wifiRuuterSection">
          <p id="wifiRuuterImgPrice">+39$</p>
          <img
            src={require("./img/container10img/wifiRuuter.png")}
            alt="reload"
            id="wifiRuuterImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("wifiRuuterImgPrice").innerText
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

export default Container10Winner;
