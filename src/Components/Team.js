import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import React from "react";
function Team() {
    
    const[match, setMatch] = useState({});
    const{ id } = useParams();
    console.log(id);
    useEffect(
        () => {
        fetch(`http://localhost:8081/team/${id}`)
        .then(response => response.json())
        .then(json => setMatch(json))
        .catch(error => console.log(error));
    }, []);

    console.log(match);

    return (
        <>
            <div className = "bg-gray-700 text-white h-screen overflow-hidden">
                <h1 className = "text-white text-5xl ml-6 p-4 mt-4">{id}</h1>
                <div className = "flex justify-center text-2xl p-4 mb-8 border-y mt-4 border-blacks ">
                    <h1 className = "ml-20"> Matches Played : {match.matchesPlayed} </h1>
                    <h1 className = "ml-20"> Matches Won : {match.wins} </h1>
                    <h1 className = "ml-20"> Country : England </h1>
                    <h1 className = "ml-20"> Season 2018/19 </h1>
                </div>   
                <h1 className = "m-2 p-4 text-2xl text-center"> RECENT MATCHES</h1>
                <div className = "flex justify-center text-2xl">
                    {match.matches?.map((m) => {
                            return <div className = "ml-10 p-10 rounded-lg bg-stone-400 text-black">
                            <h1 className = "p-2">Home Team : {m.homeTeam}</h1>
                            <h1 className = "p-2">Away Team : {m.awayTeam}</h1>
                            <h2 className = "p-2">Scoreline</h2>
                            <h1 className = "p-2">{m.homeTeam} {m.homeTeamGoals} : {m.awayteamGoals} {m.awayTeam} </h1>
                            <h1 className = "p-2">{m.date}</h1>
                            <h1 className = "p-2">Refree : {m.refreee}</h1>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Team;