import React, { useEffect, useState } from "react";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Container6 from "./Container6";
import Container7 from "./Container7";
import Container8 from "./Container8";
import Container9 from "./Container9";
import Container10 from "./Container10";
import Container11 from "./Container11";
import Container12 from "./Container12";
import Container13 from "./Container13";
import Container14 from "./Container14";
import Container15 from "./Container15";

function Auction({
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
}) {
  /* timer */
  /* timer */
  /* timer */
  const timer = ["00:05"];
  if (countdown === 5) {
    timer.splice(0, 1, "00:05");
  } else if (countdown === 4) {
    timer.splice(0, 1, "00:04");
  } else if (countdown === 3) {
    timer.splice(0, 1, "00:03");
  } else if (countdown === 2) {
    timer.splice(0, 1, "00:02");
  } else if (countdown === 1) {
    timer.splice(0, 1, "00:01");
  } else {
    timer.splice(0, 1, "00:00");
  }

  useEffect(() => {
    document.getElementById("teamName").innerText = teamName;
  }, [teamName]);

  return (
    <section className="container1" id="container1">
      <section className="auctionProps" id="auctionProps">
        <p className="step" id="step">
          step: {step}
        </p>
        <div className="teamName" id="teamName">
          {teamName}
        </div>
        <p className="timer" id="timer">
          {timer[0]}
        </p>
        <p className="curPrice" id="price">
          price: {curPrice}
        </p>
      </section>
      <section className="team1-3" id="team1-3">
        <section
          className="team1"
          id="team1"
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
          id="team2"
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
          id="team3"
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
      <section className="items" id="auctionItems">
        <section className="blenderSection">
          <p>+299$</p>
          <img src={require("./img/container1img/blender.png")} alt="reload" />
        </section>
        <section className="coffeeSection">
          <p>+199$</p>
          <img
            src={require("./img/container1img/coffe-machine.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("coffeePrice").innerText)
              );
            }}
          />
        </section>
        <section className="icecreamSection">
          <p>+89$</p>
          <img
            src={require("./img/container1img/icecream-maker.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("icecreamPrice").innerText)
              );
            }}
          />
        </section>
        <section className="juiceSection">
          <p>+239$</p>
          <img
            src={require("./img/container1img/juice-maker.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("juicePrice").innerText)
              );
            }}
          />
        </section>
        <section className="microwaveSection">
          <p>+399$</p>
          <img
            src={require("./img/container1img/microwave.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("microwavePrice").innerText)
              );
            }}
          />
        </section>
        <section className="popcornSection">
          <p>+42$</p>
          <img
            src={require("./img/container1img/popcorn-maker.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("popcornPrice").innerText)
              );
            }}
          />
        </section>
        <section className="tosterSection">
          <p>+119$</p>
          <img
            src={require("./img/container1img/toster.png")}
            alt="reload"
            onClick={() => {
              setItemPrice(
                parseInt(document.getElementById("tosterPrice").innerText)
              );
            }}
          />
        </section>
      </section>
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <section className="team4-5" id="team4-5">
        <section
          className="team4"
          id="team4"
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
          id="team5"
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
          <button id="auctionFinish" /* onClick={() => auctionFinish()} */>
            Finish
          </button>
        </section>
      </section>
    </section>
  );
}

export default Auction;
