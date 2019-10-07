//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import "./"
import Football from "./components/Football"

function App() {
  const [baseball, setBaseball] = useState(false)
  const [football, setFootball] = useState(true)

  let playBaseball = () => {
    setBaseball(true)
    setFootball(false)
  }
  let playFootball = () => {
    setBaseball(false)
    setFootball(true)
  }
  const sport = () => {
    if (baseball) {
      return <h1>not done with it yet</h1>
    } else if (football) {
      return <Football></Football>
    }
  }
  return (
    <div>
      <button onClick={playBaseball}>Baseball</button>
      <button onClick={playFootball}>Football</button>
      {sport()}
    </div>
  )

}

export default App;
