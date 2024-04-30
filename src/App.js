// imports
import { useState } from "react";
import HeroScreen from "./HeroScreen";
import TeamCreation from "./TeamCreation";
import ClosedContainer from "./ClosedContainer";
import Container1 from "./Container1";
import Results from "./Results";
import Timer from "./timer";

function App() {
  const [color, setColor] = useState("snow");
  const [nameAndColor, setNameAndColor] = useState("");
  const [usersToTeamNames, setUsersToTeamNames] = useState("");
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [user3, setUser3] = useState("");
  const [user4, setUser4] = useState("");
  const [user5, setUser5] = useState("");
  const [user6, setUser6] = useState("");
  const [user7, setUser7] = useState("");
  const [user8, setUser8] = useState("");
  const [user9, setUser9] = useState("");
  const [user10, setUser10] = useState("");
  /* const [user11, setUser11] = useState(""); */
  const [teamNum, setTeamNum] = useState("");
  const [timerActiv, setTimerActiv] = useState(false);
  const [winner, setWinner] = useState(false);
  const [End, setEnd] = useState(false);
  const [step, setStep] = useState(100);
  const [curPrice, setCurPrice] = useState(100);
  const [containerPrice, setContainerPrice] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [containerNum, setContainerNum] = useState(1);

  const [team1hook, setTeam1hook] = useState([
    "wait..",
    "wait..",
    "team1",
    null,
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ]);
  const [team2hook, setTeam2hook] = useState([
    "wait..",
    "wait..",
    "team2",
    null,
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ]);
  const [team3hook, setTeam3hook] = useState([
    "wait..",
    "wait..",
    "team3",
    null,
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ]);
  const [team4hook, setTeam4hook] = useState([
    "wait..",
    "wait..",
    "team3",
    null,
    false,
    20000,
    0,
    "wait..",
    "wait..",
  ]);
  const [team5hook, setTeam5hook] = useState([
    "wait..",
    "wait..",
    "team3",
    null,
    false,
    20000,
    0,
    "wait..",
    "wait..",
    "user3 wait..",
  ]);

  return (
    <main className="App">
      <HeroScreen
        color={color}
        setColor={setColor}
        nameAndColor={nameAndColor}
        setNameAndColor={setNameAndColor}
        setUser1={setUser1}
        setUser2={setUser2}
        setUser3={setUser3}
        setUser4={setUser4}
        setUser5={setUser5}
        setUser6={setUser6}
        setUser7={setUser7}
        setUser8={setUser8}
        setUser9={setUser9}
        setUser10={setUser10}
      />
      <TeamCreation
        user1={user1}
        user2={user2}
        user3={user3}
        user4={user4}
        user5={user5}
        user6={user6}
        user7={user7}
        user8={user8}
        user9={user9}
        user10={user10}
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
        usersToTeamNames={usersToTeamNames}
        setUsersToTeamNames={setUsersToTeamNames}
        teamNum={teamNum}
        setTeamNum={setTeamNum}
      />
      <ClosedContainer
        containerNum={containerNum}
        setContainerNum={setContainerNum}
        End={End}
        setEnd={setEnd}
      />
      <Timer
        countdown={countdown}
        setCountdown={setCountdown}
        timerActiv={timerActiv}
        setTimerActive={setTimerActiv}
        setWinner={setWinner}
      />
      <Container1
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
        setContainerNum={setContainerNum}
      />
      <Results
        team1hook={team1hook}
        team2hook={team2hook}
        team3hook={team3hook}
        team4hook={team4hook}
        team5hook={team5hook}
        End={End}
      />
    </main>
  );
}

export default App;
