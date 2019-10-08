import React, { useState } from "react";
import "../index.scss";

export default function Baseball() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [out, setOut] = useState(0);
    const [atBat, setAtBat] = useState(0);
    const [currentInning, setCurrentInning] = useState(1)
    // const [homeHits, sethomeHit] = useState(0);
    // const [guestHits, setGuestHits] = useState(0);
    // const [homeScore, setHomeScore] = useState(0);
    // const [guestScore, setGuestScore] = useState(0);
    const [guestInningScore, setGuestInningScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [homeInningScore, setHomeInningScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [guestRHE, setGuestRHE] = useState([0, 0, 0]);
    const [homeRHE, setHomeRHE] = useState([0, 0, 0]);

    const inningUp = () => {
        if (currentInning == 10) {
            return null
        } else {
            setCurrentInning(currentInning => currentInning + 1)
        }
        document.querySelector(`.inning${currentInning}`).style.backgroundColor = "#5a5a0f"
    }
    const inningDown = () => {
        if (currentInning == 1) {
            return null
        } else {
            setCurrentInning(currentInning => currentInning - 1)
        }
        document.querySelector(`.inning${currentInning}`).style.backgroundColor = "#5a5a0f"
    }
    const currentScore = () => {

        setHomeRHE(homeRHE[0] = homeInningScore[0] + homeInningScore[1] + homeInningScore[2] + homeInningScore[3] + homeInningScore[4] + homeInningScore[5] + homeInningScore[6] + homeInningScore[7] + homeInningScore[8] + homeInningScore[9]);
        setGuestRHE(guestRHE[0] = guestInningScore[0] + guestInningScore[1] + guestInningScore[2] + guestInningScore[3] + guestInningScore[4] + guestInningScore[5] + guestInningScore[6] + guestInningScore[7] + guestInningScore[8] + guestInningScore[9]);
    }

    return (
        <>
            <main className="baseball-scoreboard">
                <section className="top">
                    <div className="time">
                        <h3>TIME</h3>
                        <p>2:08</p>
                    </div>
                    <div className="current">
                        <h3>BALL</h3>
                        <h3>STRIKE</h3>
                        <h3>OUT</h3>
                        <p>{ball}</p>
                        <p>{strike}</p>
                        <p>{out}</p>
                    </div>
                    <div className="at-bat">
                        <h3>AT BAT</h3>
                        <p>{atBat}</p>
                    </div>
                </section>
                <section className="bottom">
                    <div className="teams">
                        <h2>Guest</h2>
                        <h2>Home</h2>
                    </div>
                    <div className="innings">
                        <p className="inning1">01</p>
                        <p className="inning2">02</p>
                        <p className="inning3">03</p>
                        <p className="inning4">04</p>
                        <p className="inning5">05</p>
                        <p className="inning6">06</p>
                        <p className="inning7">07</p>
                        <p className="inning8">08</p>
                        <p className="inning9">09</p>
                        <p className="inning10">10</p>
                        <p className="runs">1</p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs">1</p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                    </div>
                    <div className="totals">
                        <p>RUNS</p>
                        <p>HITS</p>
                        <p>ERR</p>
                        <p>{guestRHE[0]}</p>
                        <p>{guestRHE[1]}</p>
                        <p>{guestRHE[2]}</p>
                        <p>{homeRHE[0]}</p>
                        <p>{homeRHE[1]}</p>
                        <p>{homeRHE[2]}</p>
                    </div>
                </section>
            </main>
            <main className="controls">
                <div className="left">

                    <button className="general" onClick={() => { setBall(0); setStrike(0); setOut(0) }}>Reset Ball/Strike/Outs</button>
                    <button className="general" onClick={() => { setBall(ball => ball + 1) }}>Ball</button>
                    <button className="general" onClick={() => { setStrike(strike => strike + 1) }}>Strike</button>
                    <button className="general" onClick={() => { setOut(out => out + 1) }}>Outs</button>
                    <button className="general" onClick={() => { setAtBat(atBat => atBat + 1) }}>At Bat</button>
                    <button className="general" onClick={() => { inningUp() }}>Inning Up</button>
                    <button className="general" onClick={() => { inningDown() }}>Inning down</button>
                </div>
                <div className="middle">
                    <button className="guest">Guest Run +</button>
                    <button className="guest">Guest Run -</button>
                    <button className="guest">Guest Hit +</button>
                    <button className="guest">Guest Hit -</button>
                    <button className="guest">Guest Error +</button>
                    <button className="guest">Guest Error -</button>
                </div>
                <div className="right">
                    <button className="Home">Home Run +</button>
                    <button className="Home">Home Run -</button>
                    <button className="Home">Home Hit +</button>
                    <button className="Home">Home Hit -</button>
                    <button className="Home">Home Error +</button>
                    <button className="Home">Home Error -</button>
                </div>
            </main>
        </>
    )
}