import React, { useEffect, useState } from "react";
import Container2Winner from "./Container2Winner";
import Container3Winner from "./Container3Winner";
import Container4Winner from "./Container4Winner";
import Container5Winner from "./Container5Winner";
import Container6Winner from "./Container6Winner";
import Container7Winner from "./Container7Winner";
import Container8Winner from "./Container8Winner";
import Container9Winner from "./Container9Winner";
import Container10Winner from "./Container10Winner";
import Container11Winner from "./Container11Winner";
import Container12Winner from "./Container12Winner";
import Container13Winner from "./Container13Winner";
import Container14Winner from "./Container14Winner";
import Container15Winner from "./Container15Winner";

function Winner({
  team1hook,
  setTeam1hook,
  team2hook,
  team3hook,
  team4hook,
  team5hook,
  setTeam2hook,
  setTeam3hook,
  setTeam4hook,
  setTeam5hook,
  countdown,
  setCountdown,
  setTimerActiv,
  winner,
  step,
  setStep,
  curPrice,
  setCurPrice,
  containerPrice,
  setContainerPrice,
  itemPrice,
  setItemPrice,
  containerNum,
  setWinner,
  teamName,
  setTeamName,
  setAuctionStarted,
  setAuctionFinised,
  setContainerNum,
}) {
  //all teams
  const Team1 = [
    "wait..",
    "wait..",
    "team1",
    "Team 1",
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ];
  const Team2 = [
    "wait..",
    "wait..",
    "team2",
    "Team 2",
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ];
  const Team3 = [
    "wait..",
    "wait..",
    "team3",
    "Team 3",
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ];
  const Team4 = [
    "wait..",
    "wait..",
    "team4",
    "Team 4",
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ];
  const Team5 = [
    "wait..",
    "wait..",
    "team5",
    "Team 5",
    false,
    20000,
    0,
    "wait..",
    "wait..",
    "wait..",
  ];
  //all teams money changing function
  //all teams money changing function
  //all teams money changing function
  const changeTeam1Money = () => {
    Team1.splice(0, 10);
    for (let a = 0; a < team1hook.length; a++) {
      Team1.push(team1hook[a]);
    }
    Team1[5] = Team1[5] - curPrice;
    setTeam1hook(Team1);
  };

  const changeTeam2Money = () => {
    Team2.splice(0, 20);
    for (let a = 0; a < team2hook.length; a++) {
      Team2.push(team2hook[a]);
    }
    Team2[5] = Team2[5] - curPrice;
    setTeam2hook(Team2);
  };

  const changeTeam3Money = () => {
    Team3.splice(0, 30);
    for (let a = 0; a < team3hook.length; a++) {
      Team3.push(team3hook[a]);
    }
    Team3[5] = Team3[5] - curPrice;
    setTeam3hook(Team3);
  };

  const changeTeam4Money = () => {
    Team4.splice(0, 40);
    for (let a = 0; a < team4hook.length; a++) {
      Team4.push(team4hook[a]);
    }
    Team4[5] = Team4[5] - curPrice;
    setTeam4hook(Team4);
  };

  const changeTeam5Money = () => {
    Team5.splice(0, 50);
    for (let a = 0; a < team5hook.length; a++) {
      Team5.push(team5hook[a]);
    }
    Team5[5] = Team5[5] - curPrice;
    setTeam5hook(Team5);
  };

  //all teams money changing function
  //all teams money changing function
  //all teams money changing function
  const changeTeam1Earnings = () => {
    Team1.splice(0, 10);
    for (let a = 0; a < team1hook.length; a++) {
      Team1.push(team1hook[a]);
    }
    Team1[6] = Team1[6] + itemPrice;
    setTeam1hook(Team1);
  };

  const changeTeam2Earnings = () => {
    Team2.splice(0, 10);
    for (let a = 0; a < team2hook.length; a++) {
      Team2.push(team2hook[a]);
    }
    Team2[6] = Team2[6] + itemPrice;
    setTeam2hook(Team2);
  };

  const changeTeam3Earnings = () => {
    Team3.splice(0, 10);
    for (let a = 0; a < team3hook.length; a++) {
      Team3.push(team3hook[a]);
    }
    Team3[6] = Team3[6] + itemPrice;
    setTeam3hook(Team3);
  };

  const changeTeam4Earnings = () => {
    Team4.splice(0, 10);
    for (let a = 0; a < team4hook.length; a++) {
      Team4.push(team4hook[a]);
    }
    Team4[6] = Team4[6] + itemPrice;
    setTeam4hook(Team4);
  };

  const changeTeam5Earnings = () => {
    Team5.splice(0, 10);
    for (let a = 0; a < team5hook.length; a++) {
      Team5.push(team5hook[a]);
    }
    Team5[6] = Team5[6] + itemPrice;
    setTeam5hook(Team5);
  };

  //check container praice
  //check container praice
  //check container praice
  useEffect(() => {
    setContainerPrice(containerPrice + itemPrice);
  }, [itemPrice]);

  useEffect(() => {
    if (winner) {
      const win = teamName;
      if (win === team1hook[3]) {
        changeTeam1Earnings();
      } else if (win === team2hook[3]) {
        changeTeam2Earnings();
      } else if (win === team3hook[3]) {
        changeTeam3Earnings();
      } else if (win === team4hook[3]) {
        changeTeam4Earnings();
      } else if (win === team5hook[3]) {
        changeTeam5Earnings();
      }
    }
  }, [containerPrice]);

  /* winner */
  /* winner */
  /* winner */
  useEffect(() => {
    if (!winner) {
      document.getElementById("containerWinner").classList.add("displayNone");
    }
    if (winner) {
      //show winner section
      document
        .getElementById("containerWinner")
        .classList.remove("displayNone");
      setAuctionStarted(false);

      const win = teamName;

      if (win === team1hook[3]) {
        changeTeam1Money();
        /* changeTeam1Earnings(); */ /// separate use effect

        //disappear for other teams
        document.getElementById("team2Winner").classList.add("disappear");
        document.getElementById("team3Winner").classList.add("disappear");
        document.getElementById("team4Winner").classList.add("disappear");
        document.getElementById("team5Winner").classList.add("disappear");
        document.getElementById("timerWinner").classList.add("displayNone");
      } else if (win === team2hook[3]) {
        changeTeam2Money();
        /* changeTeam1Earnings(); */

        //disappear for other teams
        document.getElementById("team1Winner").classList.add("disappear");
        document.getElementById("team3Winner").classList.add("disappear");
        document.getElementById("team4Winner").classList.add("disappear");
        document.getElementById("team5Winner").classList.add("disappear");
        document.getElementById("timerWinner").classList.add("displayNone");
      } else if (win === team3hook[3]) {
        changeTeam3Money();
        /* changeTeam1Earnings(); */

        //disappear for other teams
        document.getElementById("team1Winner").classList.add("disappear");
        document.getElementById("team2Winner").classList.add("disappear");
        document.getElementById("team4Winner").classList.add("disappear");
        document.getElementById("team5Winner").classList.add("disappear");
        document.getElementById("timerWinner").classList.add("displayNone");
      } else if (win === team4hook[3]) {
        changeTeam4Money();
        /* changeTeam1Earnings(); */

        //disappear for other teams
        document.getElementById("team1Winner").classList.add("disappear");
        document.getElementById("team2Winner").classList.add("disappear");
        document.getElementById("team3Winner").classList.add("disappear");
        document.getElementById("team5Winner").classList.add("disappear");
        document.getElementById("timerWinner").classList.add("displayNone");
      } else if (win === team5hook[3]) {
        changeTeam5Money();
        /* changeTeam1Earnings(); */

        //disappear for other teams
        document.getElementById("team1Winner").classList.add("disappear");
        document.getElementById("team2Winner").classList.add("disappear");
        document.getElementById("team3Winner").classList.add("disappear");
        document.getElementById("team4Winner").classList.add("disappear");
        document.getElementById("timerWinner").classList.add("displayNone");
      }
    }
  }, [winner]);

  const auctionFinish = () => {
    setWinner(false);
    setTeamName("Team");
    setItemPrice(0);
    setCurPrice(0);
    setContainerPrice(0);
    const newNum = containerNum + 1;
    setContainerNum(newNum);
    setAuctionFinised(true);

    document.getElementById("team1Winner").classList.remove("disappear");
    document.getElementById("team2Winner").classList.remove("disappear");
    document.getElementById("team3Winner").classList.remove("disappear");
    document.getElementById("team4Winner").classList.remove("disappear");
    document.getElementById("team5Winner").classList.remove("disappear");
  };

  useEffect(() => {
    if (containerNum === 2) {
      //winner container
      document
        .getElementById("Container2Winner")
        .classList.remove("displayNone");
      document.getElementById("container1Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container2").classList.remove("displayNone");
      document
        .getElementById("Container2Default")
        .classList.remove("displayNone");
      document.getElementById("itemsDefault").classList.add("displayNone");
      document.getElementById("auctionItems").classList.add("displayNone");
    }
    if (containerNum === 3) {
      //winner container
      document
        .getElementById("Container3Winner")
        .classList.remove("displayNone");
      document.getElementById("Container2Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container3").classList.remove("displayNone");
      document
        .getElementById("Container3Default")
        .classList.remove("displayNone");
      document.getElementById("Container2Default").classList.add("displayNone");
      document.getElementById("Container2").classList.add("displayNone");
    }
    if (containerNum === 4) {
      //winner container
      document
        .getElementById("Container4Winner")
        .classList.remove("displayNone");
      document.getElementById("Container3Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container4").classList.remove("displayNone");
      document
        .getElementById("Container4Default")
        .classList.remove("displayNone");
      document.getElementById("Container3Default").classList.add("displayNone");
      document.getElementById("Container3").classList.add("displayNone");
    }
    if (containerNum === 5) {
      //winner container
      document
        .getElementById("Container5Winner")
        .classList.remove("displayNone");
      document.getElementById("Container4Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container5").classList.remove("displayNone");
      document
        .getElementById("Container5Default")
        .classList.remove("displayNone");
      document.getElementById("Container4Default").classList.add("displayNone");
      document.getElementById("Container4").classList.add("displayNone");
    }
    if (containerNum === 6) {
      //winner container
      document
        .getElementById("Container6Winner")
        .classList.remove("displayNone");
      document.getElementById("Container5Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container6").classList.remove("displayNone");
      document
        .getElementById("Container6Default")
        .classList.remove("displayNone");
      document.getElementById("Container5Default").classList.add("displayNone");
      document.getElementById("Container5").classList.add("displayNone");
    }
    if (containerNum === 7) {
      //winner container
      document
        .getElementById("Container7Winner")
        .classList.remove("displayNone");
      document.getElementById("Container6Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container7").classList.remove("displayNone");
      document
        .getElementById("Container7Default")
        .classList.remove("displayNone");
      document.getElementById("Container6Default").classList.add("displayNone");
      document.getElementById("Container6").classList.add("displayNone");
    }
    if (containerNum === 8) {
      //winner container
      document
        .getElementById("Container8Winner")
        .classList.remove("displayNone");
      document.getElementById("Container7Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container8").classList.remove("displayNone");
      document
        .getElementById("Container8Default")
        .classList.remove("displayNone");
      document.getElementById("Container7Default").classList.add("displayNone");
      document.getElementById("Container7").classList.add("displayNone");
    }
    if (containerNum === 9) {
      //winner container
      document
        .getElementById("Container9Winner")
        .classList.remove("displayNone");
      document.getElementById("Container8Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container9").classList.remove("displayNone");
      document
        .getElementById("Container9Default")
        .classList.remove("displayNone");
      document.getElementById("Container8Default").classList.add("displayNone");
      document.getElementById("Container8").classList.add("displayNone");
    }
    if (containerNum === 10) {
      //winner container
      document
        .getElementById("Container10Winner")
        .classList.remove("displayNone");
      document.getElementById("Container9Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container10").classList.remove("displayNone");
      document
        .getElementById("Container10Default")
        .classList.remove("displayNone");
      document.getElementById("Container9Default").classList.add("displayNone");
      document.getElementById("Container9").classList.add("displayNone");
    }
    if (containerNum === 11) {
      //winner container
      document
        .getElementById("Container11Winner")
        .classList.remove("displayNone");
      document.getElementById("Container10Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container11").classList.remove("displayNone");
      document
        .getElementById("Container11Default")
        .classList.remove("displayNone");
      document
        .getElementById("Container10Default")
        .classList.add("displayNone");
      document.getElementById("Container10").classList.add("displayNone");
    }
    if (containerNum === 12) {
      //winner container
      document
        .getElementById("Container12Winner")
        .classList.remove("displayNone");
      document.getElementById("Container11Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container12").classList.remove("displayNone");
      document
        .getElementById("Container12Default")
        .classList.remove("displayNone");
      document
        .getElementById("Container11Default")
        .classList.add("displayNone");
      document.getElementById("Container11").classList.add("displayNone");
    }
    if (containerNum === 13) {
      //winner container
      document
        .getElementById("Container13Winner")
        .classList.remove("displayNone");
      document.getElementById("Container12Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container13").classList.remove("displayNone");
      document
        .getElementById("Container13Default")
        .classList.remove("displayNone");
      document
        .getElementById("Container12Default")
        .classList.add("displayNone");
      document.getElementById("Container12").classList.add("displayNone");
    }
    if (containerNum === 14) {
      //winner container
      document
        .getElementById("Container14Winner")
        .classList.remove("displayNone");
      document.getElementById("Container13Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container14").classList.remove("displayNone");
      document
        .getElementById("Container14Default")
        .classList.remove("displayNone");
      document
        .getElementById("Container13Default")
        .classList.add("displayNone");
      document.getElementById("Container13").classList.add("displayNone");
    }
    if (containerNum === 15) {
      //winner container
      document
        .getElementById("Container15Winner")
        .classList.remove("displayNone");
      document.getElementById("Container14Winner").classList.add("displayNone");
      //defaultContainer and auctionContainer
      document.getElementById("Container15").classList.remove("displayNone");
      document
        .getElementById("Container15Default")
        .classList.remove("displayNone");
      document
        .getElementById("Container14Default")
        .classList.add("displayNone");
      document.getElementById("Container14").classList.add("displayNone");
    }
  }, [containerNum]);

  const animate = (imgId) => {
    document.getElementById(`${imgId}`).classList.add("animation");
    document.getElementById(`${imgId}Price`).classList.add("numberAni");
  };

  return (
    <section className="containerWinner" id="containerWinner">
      <section className="auctionPropsWinner" id="auctionPropsWinner">
        <p className="step" id="step">
          Auction price: {curPrice}
        </p>
        <div className="teamName" id="teamNameWinner">
          Winner: {teamName}
        </div>
        <p className="timer" id="timerWinner">
          timer don't have to appear
        </p>
        <p className="curPrice" id="price" style={{ color: "lightgreen" }}>
          Container price: {containerPrice}
        </p>
      </section>
      <section className="team1-3Winner" id="team1-3Winner">
        <section
          className="team1"
          id="team1Winner"
          onClick={() => {
            setTeamName(team1hook[3]);
            setCountdown(5);
            setTimerActiv(true);
            setCurPrice(curPrice + step);
          }}
        >
          <div>{team1hook[3]}</div>
          <section>
            <p id="team1Money">{team1hook[5]} /</p>
            <p id="team1Earnings">{team1hook[6]}</p>
          </section>
        </section>
        <section
          className="team2"
          id="team2Winner"
          onClick={() => {
            setTeamName(team2hook[3]);
            setCountdown(5);
            setTimerActiv(true);
            setCurPrice(curPrice + step);
          }}
        >
          <div>{team2hook[3]}</div>
          <section>
            <p id="team2Money">{team2hook[5]} /</p>
            <p id="team2Earnings">{team2hook[6]}</p>
          </section>
        </section>
        <section
          className="team3"
          id="team3Winner"
          onClick={() => {
            setTeamName(team3hook[3]);
            setCountdown(5);
            setTimerActiv(true);
            setCurPrice(curPrice + step);
          }}
        >
          <div>{team3hook[3]}</div>
          <section>
            <p id="team3Money">{team3hook[5]} /</p>
            <p id="team3Earnings">{team3hook[6]}</p>
          </section>
        </section>
      </section>
      <section className="items" id={"container1Winner"}>
        <section className="blenderSection">
          <p id="blenderImgPrice">+299$</p>
          <img
            src={require("./img/container1img/blender.png")}
            alt="reload"
            id="blenderImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("blenderImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="coffeeSection">
          <p id="coffeeImgPrice">+199$</p>
          <img
            src={require("./img/container1img/coffe-machine.png")}
            alt="reload"
            id="coffeeImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("coffeeImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="icecreamSection">
          <p id="icecreamImgPrice">+89$</p>
          <img
            src={require("./img/container1img/icecream-maker.png")}
            alt="reload"
            id="icecreamImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("icecreamImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="juiceSection">
          <p id="juiceImgPrice">+239$</p>
          <img
            src={require("./img/container1img/juice-maker.png")}
            alt="reload"
            id="juiceImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("juiceImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="microwaveSection">
          <p id="microwaveImgPrice">+399$</p>
          <img
            src={require("./img/container1img/microwave.png")}
            alt="reload"
            id="microwaveImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("microwaveImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="popcornSection">
          <p id="popcornImgPrice">+42$</p>
          <img
            src={require("./img/container1img/popcorn-maker.png")}
            alt="reload"
            id="popcornImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("popcornImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
        <section className="tosterSection">
          <p id="tosterImgPrice">+119$</p>
          <img
            src={require("./img/container1img/toster.png")}
            alt="reload"
            id="tosterImg"
            onClick={(item) => {
              setItemPrice(
                parseInt(document.getElementById("tosterImgPrice").innerText)
              );
              animate(item.target.id);
            }}
          />
        </section>
      </section>
      <Container2Winner setItemPrice={setItemPrice} />
      <Container3Winner setItemPrice={setItemPrice} />
      <Container4Winner setItemPrice={setItemPrice} />
      <Container5Winner setItemPrice={setItemPrice} />
      <Container6Winner setItemPrice={setItemPrice} />
      <Container7Winner setItemPrice={setItemPrice} />
      <Container8Winner setItemPrice={setItemPrice} />
      <Container9Winner setItemPrice={setItemPrice} />
      <Container10Winner setItemPrice={setItemPrice} />
      <Container11Winner setItemPrice={setItemPrice} />
      <Container12Winner setItemPrice={setItemPrice} />
      <Container13Winner setItemPrice={setItemPrice} />
      <Container14Winner setItemPrice={setItemPrice} />
      <Container15Winner setItemPrice={setItemPrice} />
      <section className="team4-5Winner" id="team4-5Winner">
        <section
          className="team4"
          id="team4Winner"
          onClick={() => {
            setTeamName(team4hook[3]);
            setCountdown(5);
            setTimerActiv(true);
            setCurPrice(curPrice + step);
          }}
        >
          <div>{team4hook[3]}</div>
          <section>
            <p id="team4Money">{team4hook[5]} /</p>
            <p id="team4Earnings">{team4hook[6]}</p>
          </section>
        </section>
        <section
          className="team5"
          id="team5Winner"
          onClick={() => {
            setTeamName(team5hook[3]);
            setCountdown(5);
            setTimerActiv(true);
            setCurPrice(curPrice + step);
          }}
        >
          <div>{team5hook[3]}</div>
          <section>
            <p id="team5Money">{team5hook[5]} /</p>
            <p id="team5Earnings">{team5hook[6]}</p>
          </section>
        </section>
        <section id="buttons">
          <button id="auctionButton" /* onClick={() => auctionStart()} */>
            Auction
          </button>
          <button id="auctionFinishButton" onClick={() => auctionFinish()}>
            Finish
          </button>
        </section>
      </section>
    </section>
  );
}

export default Winner;
