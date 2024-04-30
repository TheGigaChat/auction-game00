import React from "react";

function Container8Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container8Winner displayNone" id="Container8Winner">
      <section className="items">
        <section className="iphone15Section">
          <p id="iphone15ImgPrice">+1379$</p>
          <img
            src={require("./img/container8img/iphone15.png")}
            alt="reload"
            id="iphone15Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("iphone15ImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="electricScooterSection">
          <p id="electricScooterImgPrice">+399$</p>
          <img
            src={require("./img/container8img/electricScooter.png")}
            alt="reload"
            id="electricScooterImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("electricScooterImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="christmasTreeSection">
          <p id="christmasTreeImgPrice">+329$</p>
          <img
            src={require("./img/container8img/christmasTree.png")}
            alt="reload"
            id="christmasTreeImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("christmasTreeImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="gamingChairSection">
          <p id="gamingChairImgPrice">+219$</p>
          <img
            src={require("./img/container8img/gamingChair.png")}
            alt="reload"
            id="gamingChairImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("gamingChairImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="PS5Section">
          <p id="PS5ImgPrice">+449$</p>
          <img
            src={require("./img/container8img/PS5.png")}
            alt="reload"
            id="PS5Img"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("PS5ImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="moetSection">
          <p id="moetImgPrice">+69$</p>
          <img
            src={require("./img/container8img/moet.png")}
            alt="reload"
            id="moetImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("moetImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="winterScarfSection">
          <p id="winterScarfImgPrice">+4$</p>
          <img
            src={require("./img/container8img/winterScarf.png")}
            alt="reload"
            id="winterScarfImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("winterScarfImgPrice").innerText
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

export default Container8Winner;
