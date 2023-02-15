
import React from "react";
import Home from './Components/Home.js';
import { Routes, Route } from "react-router-dom"
import Team from './Components/Team.js'



function App() {

  return (
      <>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path  = "/:id" element = {<Team />} />
        </Routes>
      </>
    );
}

export default App;
