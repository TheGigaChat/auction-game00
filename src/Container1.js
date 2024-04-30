import React, { useEffect, useState } from "react";
import Winner from "./Winner";
import Auction from "./Auction";
import Container2Default from "./Container2Default";
import Container3Default from "./Container3Default";
import Container4Default from "./Container4Default";
import Container5Default from "./Container5Default";
import Container6Default from "./Container6Default";
import Container7Default from "./Container7Default";
import Container8Default from "./Container8Default";
import Container9Default from "./Container9Default";
import Container10Default from "./Container10Default";
import Container11Default from "./Container11Default";
import Container12Default from "./Container12Default";
import Container13Default from "./Container13Default";
import Container14Default from "./Container14Default";
import Container15Default from "./Container15Default";

function Container1({
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
  setContainerNum,
}) {
  const [auctionFinised, setAuctionFinised] = useState(false);
  const [auctionStarted, setAuctionStarted] = useState(false);
  const [teamName, setTeamName] = useState("Team");

  //toggle Auction section when auction is started
  //toggle Auction section when auction is started
  //toggle Auction section when auction is started
  useEffect(() => {
    if (!auctionStarted) {
      document.getElementById("container1").classList.add("displayNone");
    } else {
      document.getElementById("container1").classList.remove("displayNone");
    }
  }, [auctionStarted]);
  const auctionStart = () => {
    document.getElementById("wrapDefault").classList.add("displayNone");
    setAuctionStarted(true);

    document.getElementById("auctionProps").classList.add("appear");
    document.getElementById("team1-3").classList.add("appear");
    document.getElementById("team4-5").classList.add("appear");
    document.getElementById("teamName").classList.add("appear");
    document.getElementById("team4Earnings").classList.add("green");
    document.getElementById("team5Earnings").classList.add("green");
  };

  //toggle Default section when winner section is finished
  //toggle Default section when winner section is finished
  //toggle Default section when winner section is finished

  useEffect(() => {
    if (auctionFinised) {
      console.log(containerNum);
      document.getElementById("wrapDefault").classList.remove("displayNone");
      document.getElementById("containerWinner").classList.add("displayNone");
      setAuctionFinised(false);
    }
  }, [auctionFinised]);

  return (
    <section className="container1Default" id="container1Default">
      <Auction
        team1hook={team1hook}
        team2hook={team2hook}
        team3hook={team3hook}
        team4hook={team4hook}
        team5hook={team5hook}
        setTeam1hook={setTeam1hook}
        setTeam2hook={setTeam2hook}
        setTeam3hook={setTeam3hook}
        setTeam4hook={setTeam4hook}
        setTeam5hook={setTeam5hook}
        countdown={countdown}
        setCountdown={setCountdown}
        setTimerActiv={setTimerActiv}
        winner={winner}
        setWinner={setWinner}
        step={step}
        setStep={setStep}
        curPrice={curPrice}
        setCurPrice={setCurPrice}
        containerPrice={containerPrice}
        setContainerPrice={setContainerPrice}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        containerNum={containerNum}
        teamName={teamName}
        setTeamName={setTeamName}
      />
      <Winner
        team1hook={team1hook}
        team2hook={team2hook}
        team3hook={team3hook}
        team4hook={team4hook}
        team5hook={team5hook}
        setTeam1hook={setTeam1hook}
        setTeam2hook={setTeam2hook}
        setTeam3hook={setTeam3hook}
        setTeam4hook={setTeam4hook}
        setTeam5hook={setTeam5hook}
        countdown={countdown}
        setCountdown={setCountdown}
        setTimerActiv={setTimerActiv}
        winner={winner}
        setWinner={setWinner}
        step={step}
        setStep={setStep}
        curPrice={curPrice}
        setCurPrice={setCurPrice}
        containerPrice={containerPrice}
        setContainerPrice={setContainerPrice}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        containerNum={containerNum}
        teamName={teamName}
        setTeamName={setTeamName}
        setAuctionStarted={setAuctionStarted}
        setAuctionFinised={setAuctionFinised}
        setContainerNum={setContainerNum}
      />
      <section className="wrapDefault" id="wrapDefault">
        <section className="auctionPropsDefault" id="auctionPropsDefault">
          <p className="step" id="step">
            step: "100"
          </p>
          <div className="teamName" id="teamName">
            "teamName"
          </div>
          <p className="timer" id="timer">
            "Timer"
          </p>
          <p className="curPrice" id="price">
            price: "100"
          </p>
        </section>
        <section className="team1-3Default" id="team1-3Default">
          <section>
            <div>Team 1</div>
            <section>
              <p>"20000" /</p>
              <p>"0"</p>
            </section>
          </section>
          <section>
            <div>Team 2</div>
            <section>
              <p>"20000" /</p>
              <p>"0"</p>
            </section>
          </section>
          <section>
            <div>Team 3</div>
            <section>
              <p>"20000" /</p>
              <p>"0"</p>
            </section>
          </section>
        </section>
        <section className="itemsDefault" id="itemsDefault">
          <section className="blenderSection">
            <p>+299$</p>
            <img
              src={require("./img/container1img/blender.png")}
              alt="reload"
            />
          </section>
          <section className="coffeeSection">
            <p>+199$</p>
            <img
              src={require("./img/container1img/coffe-machine.png")}
              alt="reload"
            />
          </section>
          <section className="icecreamSection">
            <p>+89$</p>
            <img
              src={require("./img/container1img/icecream-maker.png")}
              alt="reload"
            />
          </section>
          <section className="juiceSection">
            <p>+239$</p>
            <img
              src={require("./img/container1img/juice-maker.png")}
              alt="reload"
            />
          </section>
          <section className="microwaveSection">
            <p>+399$</p>
            <img
              src={require("./img/container1img/microwave.png")}
              alt="reload"
            />
          </section>
          <section className="popcornSection">
            <p>+42$</p>
            <img
              src={require("./img/container1img/popcorn-maker.png")}
              alt="reload"
            />
          </section>
          <section className="tosterSection">
            <p>+119$</p>
            <img src={require("./img/container1img/toster.png")} alt="reload" />
          </section>
        </section>
        <Container2Default />
        <Container3Default />
        <Container4Default />
        <Container5Default />
        <Container6Default />
        <Container7Default />
        <Container8Default />
        <Container9Default />
        <Container10Default />
        <Container11Default />
        <Container12Default />
        <Container13Default />
        <Container14Default />
        <Container15Default />
        <section className="team4-5Default" id="team4-5Default">
          <section>
            <div>Team 4</div>
            <section>
              <p>"20000" /</p>
              <p>"0"</p>
            </section>
          </section>
          <section>
            <div>Team 5</div>
            <section>
              <p>"20000" /</p>
              <p>"0"</p>
            </section>
          </section>
          <section id="buttons">
            <button id="auctionButton" onClick={() => auctionStart()}>
              Auction
            </button>
            <button id="auctionFinish">Finish</button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Container1;
