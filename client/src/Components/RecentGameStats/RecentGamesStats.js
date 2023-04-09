import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import "../RecentGameStats/RecentGamesStats.css";
import { useGetRecentGameStatsQuery } from "../../App/Features/Api/apiSlice";
import BarChart from "../../App/Features/BarChart";
import SingleGameStats from "../SingleGameStats/SingleGameStats";

const RecentGamesStats = () => {
  const { latestGameID } = useContext(Context);
  const [latestGameStats, setLatestGameStats] = useState([]);
  const { data } = useGetRecentGameStatsQuery(latestGameID);
  const [teamOneScore, setTeamOneScore] = useState("");
  const [teamTwoScore, setTeamTwoScore] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const graphData = await data;
        setLatestGameStats(graphData.response);
        setTeamOneScore(graphData.response[0].statistics[0].points);
        setTeamTwoScore(graphData.response[1].statistics[0].points);
      } catch {}
    };
    fetchData();
  }, [data]);

  const chartData = {
    labels: [
      "Points",
      "Assists",
      "Rebounds",
      "Steals",
      "Blocks",
      "Turnovers",
      "FG%",
      "3P%",
      "FT%",
    ],
    datasets: [
      {
        label: latestGameStats[0]?.team.name,
        data: [
          latestGameStats[0]?.statistics[0].points,
          latestGameStats[0]?.statistics[0].assists,
          latestGameStats[0]?.statistics[0].totReb,
          latestGameStats[0]?.statistics[0].steals,
          latestGameStats[0]?.statistics[0].blocks,
          latestGameStats[0]?.statistics[0].turnovers,
          latestGameStats[0]?.statistics[0].fgp,
          latestGameStats[0]?.statistics[0].tpp,
          latestGameStats[0]?.statistics[0].ftp,
        ],
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 1,
      },
      {
        label: latestGameStats[1]?.team.name,
        data: [
          latestGameStats[1]?.statistics[0].points,
          latestGameStats[1]?.statistics[0].assists,
          latestGameStats[1]?.statistics[0].totReb,
          latestGameStats[1]?.statistics[0].steals,
          latestGameStats[1]?.statistics[0].blocks,
          latestGameStats[1]?.statistics[0].turnovers,
          latestGameStats[1]?.statistics[0].fgp,
          latestGameStats[1]?.statistics[0].tpp,
          latestGameStats[1]?.statistics[0].ftp,
        ],
        backgroundColor: "brown",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h1 className="center-align page-header">Team Comparisons</h1>

      <div className="final-score-container">
        <h3 className="center-align">
          {latestGameStats[0]?.team.name}: {teamOneScore}
        </h3>
        <h3 className="center-align">
          {latestGameStats[1]?.team.name}: {teamTwoScore}
        </h3>
      </div>
      <SingleGameStats />

      <div className="recent-game-stats-container">
        <div
          className="chart-container"
          style={{ position: "relative", width: "100%" }}
        >
          {chartData ? <BarChart chartData={chartData} /> : null}
        </div>
      </div>
    </>
  );
};

export default RecentGamesStats;
