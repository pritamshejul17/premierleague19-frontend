import {useState,useEffect} from 'react';
import React from "react";
import TeamLink from './TeamLink.js'

function Home(){
  const[team, setTeam] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('http://localhost:8081/team')
      .then(response => response.json())
      .then(json =>
        setTeam(json),
        setLoading(false));
  }, []);

  team.forEach(t => console.log(t));

  return (
    <div className = "bg-gray-700">
      <div className ="flex justify-evenly ">
          <h1 className = "flex-initial font-medium p-6 text-3xl text-stone-300">Team Info</h1>
      </div>
      <div className = "grid grid-cols-2 grid-rows-10 bg-stone-400 mx-20 p-10" >
          {team.map((item) => {return <TeamLink key={item.id} teamName = {item.teamName} />})}
      </div>
    </div>
  );
}

export default Home;