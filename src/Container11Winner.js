import React from "react";

function Container11Winner({ setItemPrice }) {
  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="Container11Winner displayNone" id="Container11Winner">
      <section className="items">
        <section className="oldMirrorSection">
          <p id="oldMirrorImgPrice">+293$</p>
          <img
            src={require("./img/container11img/oldMirror.png")}
            alt="reload"
            id="oldMirrorImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("oldMirrorImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldBedSection">
          <p id="oldBedImgPrice">+999$</p>
          <img
            src={require("./img/container11img/oldBed.png")}
            alt="reload"
            id="oldBedImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("oldBedImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldWardrobeSection">
          <p id="oldWardrobeImgPrice">+796$</p>
          <img
            src={require("./img/container11img/oldWardrobe.png")}
            alt="reload"
            id="oldWardrobeImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("oldWardrobeImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldKummutSection">
          <p id="oldKummutImgPrice">+889$</p>
          <img
            src={require("./img/container11img/oldKummut.png")}
            alt="reload"
            id="oldKummutImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("oldKummutImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldPinguinSection">
          <p id="oldPinguinImgPrice">+32$</p>
          <img
            src={require("./img/container11img/oldPinguin.png")}
            alt="reload"
            id="oldPinguinImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(
                  document.getElementById("oldPinguinImgPrice").innerText
                )
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldChairSection">
          <p id="oldChairImgPrice">+278$</p>
          <img
            src={require("./img/container11img/oldChair.png")}
            alt="reload"
            id="oldChairImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("oldChairImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="oldTableSection">
          <p id="oldTableImgPrice">+112$</p>
          <img
            src={require("./img/container11img/oldTable.png")}
            alt="reload"
            id="oldTableImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("oldTableImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
    </section>
  );
}

export default Container11Winner;
