import React, { useEffect, useState, End } from "react";

function Results({
  team1hook,
  team2hook,
  team3hook,
  team4hook,
  team5hook,
  End,
  setEnd,
}) {
  //temporary data
  const team1 = ["Lohi", 310];
  const team2 = ["EEE", 11340];
  const team3 = ["team3", 3530];
  const team4 = ["team4", 302];
  const team5 = ["team5", 345];

  //constant data
  const [Team1, setTeam1] = useState(["Lohi", 310]);
  const [Team2, setTeam2] = useState(["EEE", 11340]);
  const [Team3, setTeam3] = useState(["team3", 3530]);
  const [Team4, setTeam4] = useState(["team4", 302]);
  const [Team5, setTeam5] = useState(["team5", 345]);
  const winnersArr = [Team1, Team2, Team3, Team4, Team5];
  let winnersArrSorted = [Team1, Team2, Team3, Team4, Team5];

  const setWinner = () => {
    //change team1 props
    team1.splice(0, 1, team1hook[3]);
    const total1 = team1hook[5] + team1hook[6];
    team1.splice(1, 2, total1);
    setTeam1(team1);

    //change team2 props
    team2.splice(0, 1, team2hook[3]);
    const total2 = team2hook[5] + team2hook[6];
    team2.splice(1, 2, total2);
    setTeam2(team2);

    //change team3 props
    team3.splice(0, 1, team3hook[3]);
    const total3 = team3hook[5] + team3hook[6];
    team3.splice(1, 2, total3);
    setTeam3(team3);

    //change team4 props
    team4.splice(0, 1, team4hook[3]);
    const total4 = team4hook[5] + team4hook[6];
    team4.splice(1, 2, total4);
    setTeam4(team4);

    //change team5 props
    team5.splice(0, 1, team5hook[3]);
    const total5 = team5hook[5] + team5hook[6];
    team5.splice(1, 2, total5);
    setTeam5(team5);
  };

  useEffect(() => {
    if (End) {
      setWinner();
    }
  }, [End]);

  //sort
  winnersArrSorted = winnersArr.sort((a, b) => a[1] - b[1]).reverse();

  return (
    <section className="results">
      <table>
        <caption>Results</caption>
        <tbody>
          <tr>
            <th>Place</th>
            <th>Team</th>
            <th>Total</th>
          </tr>
          <tr id="top1">
            <th>#1</th>
            <td>{winnersArrSorted[0][0]}</td>
            <td>{winnersArrSorted[0][1]}</td> {/* //total */}
          </tr>
          <tr>
            <th id="top2">#2</th>
            <td>{winnersArrSorted[1][0]}</td>
            <td>{winnersArrSorted[1][1]}</td> {/* //total */}
          </tr>
          <tr>
            <th id="top3">#3</th>
            <td>{winnersArrSorted[2][0]}</td>
            <td>{winnersArrSorted[2][1]}</td> {/* //total */}
          </tr>
          <tr>
            <th>#4</th>
            <td>{winnersArrSorted[3][0]}</td>
            <td>{winnersArrSorted[3][1]}</td> {/* //total */}
          </tr>
          <tr>
            <th>#5</th>
            <td>{winnersArrSorted[4][0]}</td>
            <td>{winnersArrSorted[4][1]}</td> {/* //total */}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Results;
