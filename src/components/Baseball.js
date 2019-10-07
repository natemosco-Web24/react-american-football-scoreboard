import React, { useState } from "react"

export default function Baseball() {

    return (
        <main className="scoreboard">
            <section className="top">
                <div className="time">
                    <h3>TIME</h3>
                    <p>2:08</p>
                </div>
                <div className="current">
                    <h3>BALL</h3>
                    <h3>STRIKE</h3>
                    <h3>OUT</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="at-bat">
                    <h3>AT BAT</h3>
                    <p></p>
                </div>
            </section>
            <section className="bottom">
                <div className="teams">
                    <h2>Guest</h2>
                    <h2>Home</h2>
                </div>
                <div className="innings">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <div>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
                        <p className="runs"></p>
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
                </div>
                <div className="totals">
                    <p>RUNS</p>
                    <p>HITS</p>
                    <p>ERR</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </section>
        </main>
    )
}