import React from "react";
import "./HeroScreen.css";

function HeroScreen({
  color,
  setColor,
  nameAndColor,
  setNameAndColor,
  setUser1,
  setUser2,
  setUser3,
  setUser4,
  setUser5,
  setUser6,
  setUser7,
  setUser8,
  setUser9,
  setUser10,
}) {
  const submitHandle = (e) => {
    e.preventDefault();
    nameAndColorHandle();
  };
  const nameAndColorHandle = () => {
    let i = 1;

    for (let j = 1; j < 11; j++) {
      const user = document.getElementById(`user${i}`);
      const userLogo = user.children[0];
      const userName = user.children[1];

      if (!userName.textContent) {
        userLogo.style.background = color;
        userName.style.color = color;
        userName.textContent = nameAndColor;
        if (j === 10) {
          //users
          const userProps1 = [
            1,
            false,
            document.getElementById(`user1`).children[1].textContent,
          ];
          setUser1(userProps1);

          const userProps2 = [
            2,
            false,
            document.getElementById(`user2`).children[1].textContent,
          ];
          setUser2(userProps2);

          const userProps3 = [
            3,
            false,
            document.getElementById(`user3`).children[1].textContent,
          ];
          setUser3(userProps3);

          const userProps4 = [
            4,
            false,
            document.getElementById(`user4`).children[1].textContent,
          ];
          setUser4(userProps4);

          const userProps5 = [
            5,
            false,
            document.getElementById(`user5`).children[1].textContent,
          ];
          setUser5(userProps5);

          const userProps6 = [
            6,
            false,
            document.getElementById(`user6`).children[1].textContent,
          ];
          setUser6(userProps6);

          const userProps7 = [
            7,
            false,
            document.getElementById(`user7`).children[1].textContent,
          ];
          setUser7(userProps7);

          const userProps8 = [
            8,
            false,
            document.getElementById(`user8`).children[1].textContent,
          ];
          setUser8(userProps8);

          const userProps9 = [
            9,
            false,
            document.getElementById(`user9`).children[1].textContent,
          ];
          setUser9(userProps9);

          const userProps10 = [
            10,
            false,
            document.getElementById(`user10`).children[1].textContent,
          ];
          setUser10(userProps10);
        }
        break;
      } else {
        i++;
        continue;
      }
    }
  };

  return (
    <section className="hero__section">
      <section className="user__section" id="user1">
        <div className="icon"> </div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user2">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user3">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user4">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user5">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>

      <form
        id="form"
        type="submit"
        className="input__form"
        onSubmit={(e) => {
          submitHandle(e);
        }}
      >
        <input
          type="text"
          placeholder="Add a new player"
          autoFocus
          value={nameAndColor}
          onChange={(e) => {
            setNameAndColor(e.target.value);
          }}
        />
      </form>

      <section className="user__section" id="user6">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user7">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user8">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="user9">
        <div className="icon"></div>
        <div className="nickname"></div>
      </section>
      <section className="user__section" id="userWithButton">
        <section id="user10">
          <div className="icon"></div>
          <div className="nickname"></div>
        </section>
        <section>
          <button className="heroFinishButton" /* onClick={() => teamPage()} */>
            START
          </button>
        </section>
      </section>
    </section>
  );
}

export default HeroScreen;
