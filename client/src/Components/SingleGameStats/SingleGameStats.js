import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import {
  useGetSingleGameStatsQuery,
  useGetTeamsByIdQuery,
} from "../../App/Features/Api/apiSlice";
import StatsTable from "./StatsTable";
const SingleGameStats = () => {
  const { latestGameID } = useContext(Context);
  const { data: gameData, error } = useGetSingleGameStatsQuery(latestGameID);
  const { data: teamData } = useGetTeamsByIdQuery(latestGameID);
  const [gameStats, setGameStats] = useState([]);
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = gameData.response;
        setGameStats(tableData);
        const gameStats = teamData.response;
        setTeamOne(gameStats.map((team) => team.teams.home.name));
        setTeamTwo(gameStats.map((team) => team.teams.visitors.name));
      } catch {}
    };
    fetchData();
  }, [gameData, error, teamData]);

  const teamOneStats = gameStats.filter(
    (stats) => stats.team.name === `${teamOne}`
  );
  const teamTwoStats = gameStats.filter(
    (stats) => stats.team.name === `${teamTwo}`
  );

  return (
    <>
      <h2 className="page-header center-align">{teamOne}</h2>
      <StatsTable props={teamOneStats} />
      <h2 className="page-header center-align">{teamTwo}</h2>
      <StatsTable props={teamTwoStats} />
    </>
  );
};

export default SingleGameStats;
