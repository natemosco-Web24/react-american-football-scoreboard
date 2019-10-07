//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0)
  const [away, setAway] = useState(0)
  const [homeTeam, setHomeTeam] = useState("Home")
  const [awayTeam, setAwayTeam] = useState("Away")
  const setup = () => {
    let homeName = prompt("Home Team Name?", homeTeam)
    let homeScore = prompt("What is the Home Team Score?", home)
    let awayName = prompt("Away Team Name?", awayTeam)
    let awayScore = prompt("What is the Away Team Score?", away)

    if (awayTeam === "Away" && homeTeam === "Home") {
      alert(setHomeTeam(homeName) + setHome(homeScore) + setAwayTeam(awayName) + setAway(awayScore))
    } else {
      alert(setHome(homeScore) + setAway(awayScore))
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home" onClick={() => setup()}>
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHome(home => home + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(home => home + 3)}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(home => home + 1)}>Home 1-Pt Conversion</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(home => home + 2)}>Home 2-Pt Conversion</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAway(away => away + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(away => away + 3)}>Away Field Goal</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(away => away + 1)}>Away 1-Pt Conversion</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(away => away + 2)}>Away 2-Pt Conversion</button>
        </div>
      </section>
    </div>
  );
}

export default App;
