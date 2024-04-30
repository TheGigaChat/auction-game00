import React, { useState, useEffect } from "react";

function TeamCreation({
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
  usersToTeamNames,
  setUsersToTeamNames,
  team1hook,
  setTeam1hook,
  team2hook,
  setTeam2hook,
  team3hook,
  setTeam3hook,
  team4hook,
  setTeam4hook,
  team5hook,
  setTeam5hook,
  teamNum,
  setTeamNum,
}) {
  const Team = {
    //keys for arr
    user1: "user1",
    user2: "user2",
    id: "teamNum",
    name: "Team Num",
    active: false,
    money: 20000,
    earn: 10,
    total: 0,
    icon: "svg",
  };

  //Choose random users to create a new team
  const allUsers = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ];
  const usersWithoutTeamArray = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ];
  const usersToTeamArr = [];
  const randomUsersToTeam = () => {
    //clear the names in the queue
    setUsersToTeamNames("");
    let j = 1;
    while (j < 100) {
      const randomUserFormula = Math.floor(
        Math.random() * usersWithoutTeamArray.length
      );
      const randomUser = usersWithoutTeamArray[randomUserFormula];
      if (!randomUser[1]) {
        usersToTeamArr.push(randomUser);
        randomUser[1] = true;
        if (usersToTeamArr.length === 2) {
          //set names
          setUsersToTeamNames(usersToTeamArr);
          //delete added users from the usersWithoutTeamArray
          const id1 = usersToTeamArr[0][0];
          const id2 = usersToTeamArr[1][0];
          let userDiv = document.getElementById(`u${id1}`);
          allUsers.map((user) => {
            if (user[0] === id1) {
              usersWithoutTeamArray.splice(id1 - 1, 1);
              //delete HTML users
              userDiv = document.getElementById(`u${id1}`);
              console.log(userDiv);
              userDiv.style.color = "transparent";
            } else if (user[0] === id2) {
              usersWithoutTeamArray.splice(id2 - 1, 1);
              //delete HTML users
              userDiv = document.getElementById(`u${id2}`);
              console.log(userDiv);
              userDiv.style.color = "transparent";
            }
          });
          break;
        }
        j++;
        continue;
      } else {
        j++;
        continue;
      }
    }
  };

  //Create all teams
  const Team1 = [
    "wait..",
    "wait..",
    "team1",
    "Team 1",
    false,
    8500,
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
    8500,
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
    8500,
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
    8500,
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
    8500,
    0,
    "wait..",
    "wait..",
  ];

  const createTeam1 = () => {
    Team1.splice(0, 1, usersToTeamArr[0]);
    Team1.splice(1, 1, usersToTeamArr[1]);
    Team1.splice(4, 1, true);
    setTeam1hook(Team1);
    setTeamNum(1);
  };
  const createTeam2 = () => {
    Team2.splice(0, 1, usersToTeamArr[0]);
    Team2.splice(1, 1, usersToTeamArr[1]);
    Team2.splice(4, 1, true);
    setTeam2hook(Team2);
    setTeamNum(2);
  };
  const createTeam3 = () => {
    Team3.splice(0, 1, usersToTeamArr[0]);
    Team3.splice(1, 1, usersToTeamArr[1]);
    Team3.splice(4, 1, true);
    setTeam3hook(Team3);
    setTeamNum(3);
  };
  const createTeam4 = () => {
    Team4.splice(0, 1, usersToTeamArr[0]);
    Team4.splice(1, 1, usersToTeamArr[1]);
    Team4.splice(4, 1, true);
    setTeam4hook(Team4);
    setTeamNum(4);
  };
  const createTeam5 = () => {
    Team5.splice(0, 1, usersToTeamArr[0]);
    Team5.splice(1, 1, usersToTeamArr[1]);
    Team5.splice(4, 1, true);
    setTeam5hook(Team5);
    setTeamNum(5);
  };

  const createTeam = () => {
    //clear the queue of waiting for a new team
    usersToTeamArr.splice(0, 2);
    //add 2 users to queue of waiting to create a new team
    randomUsersToTeam();
    //check empty teams
    //add users from queue to the first empty team
    //delete the users from the queue
    if (usersToTeamArr.length === 2 && !team1hook[4]) {
      console.log(
        `users for the team 1: user${usersToTeamArr[0][0]}, user${usersToTeamArr[1][0]}`
      );
      createTeam1();
    } else if (usersToTeamArr.length === 2 && !team2hook[4]) {
      console.log(
        `new users for the team2: user${usersToTeamArr[0][0]}, user${usersToTeamArr[1][0]}`
      );
      createTeam2();
    } else if (usersToTeamArr.length === 2 && !team3hook[4]) {
      console.log(
        `new users for the team3: user${usersToTeamArr[0][0]}, user${usersToTeamArr[1][0]}`
      );
      createTeam3();
    } else if (usersToTeamArr.length === 2 && !team4hook[4]) {
      console.log(
        `new users for the team4: user${usersToTeamArr[0][0]}, user${usersToTeamArr[1][0]}`
      );
      createTeam4();
    } else if (usersToTeamArr.length === 2 && !team5hook[4]) {
      console.log(
        `new users for the team5: user${usersToTeamArr[0][0]}, user${usersToTeamArr[1][0]}`
      );
      createTeam5();
      console.log(`All team were created`);
    }
  };

  const input1 = document.getElementById("i1");
  const input2 = document.getElementById("i2");
  const input3 = document.getElementById("i3");
  const input4 = document.getElementById("i4");
  const input5 = document.getElementById("i5");
  const team1Div = document.getElementById("team1Div");
  const team2Div = document.getElementById("team2Div");
  const team3Div = document.getElementById("team3Div");
  const team4Div = document.getElementById("team4Div");
  const team5Div = document.getElementById("team5Div");

  const changeTeam1Name = () => {
    Team1.splice(0, 10);
    for (let a = 0; a < team1hook.length; a++) {
      Team1.push(team1hook[a]);
    }
    team1Div.style.color = "transparent";
    Team1[3] = input1.value;
  };
  const changeTeam1NameImplement = () => {
    setTeam1hook(Team1);
    input1.value = null;
    team1Div.style.color = "white";
  };

  const changeTeam2Name = () => {
    Team2.splice(0, 9);
    for (let a = 0; a < team2hook.length; a++) {
      Team2.push(team2hook[a]);
    }
    team2Div.style.color = "transparent";
    Team2[3] = input2.value;
  };
  const changeTeam2NameImplement = () => {
    setTeam2hook(Team2);
    input2.value = null;
    team2Div.style.color = "white";
  };

  const changeTeam3Name = () => {
    Team3.splice(0, 9);
    for (let a = 0; a < team3hook.length; a++) {
      Team3.push(team3hook[a]);
    }
    team3Div.style.color = "transparent";
    Team3[3] = input3.value;
  };
  const changeTeam3NameImplement = () => {
    setTeam3hook(Team3);
    input3.value = null;
    team3Div.style.color = "white";
  };

  const changeTeam4Name = () => {
    Team4.splice(0, 9);
    for (let a = 0; a < team4hook.length; a++) {
      Team4.push(team4hook[a]);
    }
    team4Div.style.color = "transparent";
    Team4[3] = input4.value;
  };
  const changeTeam4NameImplement = () => {
    setTeam4hook(Team4);
    input4.value = null;
    team4Div.style.color = "white";
  };

  const changeTeam5Name = () => {
    Team5.splice(0, 9);
    for (let a = 0; a < team5hook.length; a++) {
      Team5.push(team5hook[a]);
    }
    team5Div.style.color = "transparent";
    Team5[3] = input5.value;
  };
  const changeTeam5NameImplement = () => {
    setTeam5hook(Team5);
    input5.value = null;
    team5Div.style.color = "white";
  };

  return (
    <section className="teamCreation__section">
      <section className="teams__section1">
        <section className="team">
          <div id="team1Div">
            {team1hook[3] !== null ? `${team1hook[3]}` : null}
          </div>
          <section>
            <input
              type="text"
              id="i1"
              onInput={() => {
                changeTeam1Name();
              }}
            />
            <button
              onClick={() => {
                changeTeam1NameImplement();
              }}
            >
              tName
            </button>
          </section>
        </section>
        <section className="team">
          <div id="team2Div">
            {team2hook[3] !== null ? `${team2hook[3]}` : null}
          </div>
          <section>
            <input
              type="text"
              id="i2"
              onInput={() => {
                changeTeam2Name();
              }}
            />
            <button
              onClick={() => {
                changeTeam2NameImplement();
              }}
            >
              tName
            </button>
          </section>
        </section>
        <section className="team">
          <div id="team3Div">
            {team3hook[3] !== null ? `${team3hook[3]}` : null}
          </div>
          <section>
            <input
              type="text"
              id="i3"
              onInput={() => {
                changeTeam3Name();
              }}
            />
            <button
              onClick={() => {
                changeTeam3NameImplement();
              }}
            >
              tName
            </button>
          </section>
        </section>
      </section>
      <section className="newTeam__section">
        <section>
          <div className="team">{`Team ${teamNum}`}</div>
        </section>
        <section>
          <div className="user">
            {usersToTeamNames[0] ? `${usersToTeamNames[0][2]}` : null}
          </div>
          <div className="user">
            {usersToTeamNames[1] ? `${usersToTeamNames[1][2]}` : null}
          </div>
        </section>
      </section>
      <section className="users__section">
        <section>
          <div id="u1">{user1 ? user1[2] : "wait.."}</div>
          <div id="u2">{user2 ? user2[2] : "wait.."}</div>
          <div id="u3">{user3 ? user3[2] : "wait.."}</div>
          <div id="u4">{user4 ? user4[2] : "wait.."}</div>
          <div id="u5">{user5 ? user5[2] : "wait.."}</div>
        </section>
        <section>
          <div id="u6">{user6 ? user6[2] : "wait.."}</div>
          <div id="u7">{user7 ? user7[2] : "wait.."}</div>
          <div id="u8">{user8 ? user8[2] : "wait.."}</div>
          <div id="u9">{user9 ? user9[2] : "wait.."}</div>
          <div id="u10">{user10 ? user10[2] : "wait.."}</div>
        </section>
      </section>
      <section className="teams__section2">
        <section className="team">
          <div id="team4Div">
            {team4hook[3] !== null ? `${team4hook[3]}` : null}
          </div>
          <section>
            <input
              type="text"
              id="i4"
              onInput={() => {
                changeTeam4Name();
              }}
            />
            <button
              onClick={() => {
                changeTeam4NameImplement();
              }}
            >
              tName
            </button>
          </section>
        </section>
        <section className="team">
          <div id="team5Div">
            {team5hook[3] !== null ? `${team5hook[3]}` : null}
          </div>
          <section>
            <input
              type="text"
              id="i5"
              onInput={() => {
                changeTeam5Name();
              }}
            />
            <button
              onClick={() => {
                changeTeam5NameImplement();
              }}
            >
              tName
            </button>
          </section>
        </section>
        <section>
          <button
            className="teamFinishButton"
            onClick={() => createTeam()} // create new team on the button
          >
            Create Team
          </button>
        </section>
      </section>
      {/* change the button to make a team and as all teams were created change the button to start button */}
    </section>
  );
}

export default TeamCreation;
