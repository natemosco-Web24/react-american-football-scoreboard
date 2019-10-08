import React, { useState } from "react"
import "../index.scss"

export default function Baseball() {
    const [ball, setBall] = useState(0)
    const [strike, setStrike] = useState(0)
    const [out, setOut] = useState(0)
    const [homeScore, setHomeScore] = useState(0)
    const [guestScore, setGuestScore] = useState(0)
    const [guestInningScore, setGuestInningScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [homeInningScore, setHomeInningScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [guestRHE, setGuestRHE] = useState([0, 0, 0])
    const [homeRHE, setHomeRHE] = useState([0, 0, 0])

    const currentScore = () => {
        setHomeScore(homeInningScore[0] + homeInningScore[1] + homeInningScore[2] + homeInningScore[3] + homeInningScore[4] + homeInningScore[5] + homeInningScore[6] + homeInningScore[7] + homeInningScore[8] + homeInningScore[9]);
        setGuestScore(guestInningScore[0] + guestInningScore[1] + guestInningScore[2] + guestInningScore[3] + guestInningScore[4] + guestInningScore[5] + guestInningScore[6] + guestInningScore[7] + guestInningScore[8] + guestInningScore[9]);
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
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className="at-bat">
                        <h3>AT BAT</h3>
                        <p>32</p>
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
                        <p>{guestScore}</p>
                        <p>4</p>
                        <p>1</p>
                        <p>{homeScore}</p>
                        <p>8</p>
                        <p>2</p>
                    </div>
                </section>
            </main>
            <main className="controls">
                <div className="left">
                    <button className="general">Ball</button>
                    <button className="general">Strike</button>
                    <button className="general">Outs</button>
                    <button className="general">At Bat</button>
                    <button className="general">Inning Up</button>
                    <button className="general">Inning down</button>
                </div>
                <div className="middle">
                    <button className="guest">inning</button>
                    <button className="guest"></button>
                    <button className="guest"></button>
                    <button className="guest"></button>
                    <button className="guest"></button>
                </div>
                <div className="right">
                    <button className="Home"></button>
                    <button className="Home"></button>
                    <button className="Home"></button>
                    <button className="Home"></button>
                    <button className="Home"></button>
                </div>
            </main>
        </>
    )
}