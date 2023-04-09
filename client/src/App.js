import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Standings from "./Components/Standings/Standings";
import { Routes, Route } from "react-router-dom";
import Requests from "./Components/Requests/Requests";
import { Context } from "./Components/Context/Context";
import Teams from "./Components/Teams/Teams";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import RecentGamesStats from "./Components/RecentGameStats/RecentGamesStats";
import Players from "./Components/Players/Players";
import HeadToHead from "./Components/HeadToHead/HeadToHead";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Careers from "./Components/Careers/Careers";
import Sponsors from "./Components/Sponsors/Sponsors";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  // Global State
  const [playerData, setPlayerData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [latestGameID, setLatestGameID] = useState("");
  const [playerID, setPlayerID] = useState([]);
  const [currentPlayerName, setCurrentPlayerName] = useState("");
  const [team, setTeam] = useState(27);
  const [season, setSeason] = useState("2022");
  const [search, setSearch] = useState(Requests.fetchTeams);
  const [versusTeamIDs, setVersusTeamIDs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Context.Provider
      value={{
        playerData,
        setPlayerData,
        teamData,
        setTeamData,
        latestGameID,
        setLatestGameID,
        playerID,
        setPlayerID,
        currentPlayerName,
        setCurrentPlayerName,
        team,
        setTeam,
        season,
        setSeason,
        search,
        setSearch,
        versusTeamIDs,
        setVersusTeamIDs,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teamdetails" element={<TeamDetails />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/recent-game-stats" element={<RecentGamesStats />} />
        <Route path="/players" element={<Players />} />
        <Route path="/head-to-head" element={<HeadToHead />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
    </Context.Provider>
  );
};

export default App;
