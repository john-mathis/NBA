import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { useGetPlayerDetailsQuery } from "../../App/Features/Api/apiSlice";
import PlayerStatsTable from "../PlayerStatsTable/PlayerStatsTable";

const Players = () => {
  const [playerStats, setPlayerStats] = useState([]);

  const { playerID, currentPlayerName } = useContext(Context);

  const { data, error, isLoading } = useGetPlayerDetailsQuery(playerID);

  useEffect(() => {
    setPlayerStats(data?.response);
    console.log(data);
  }, [data]);

  const filterLastTenGameStats = playerStats?.slice(
    playerStats.length - 10,
    playerStats.length
  );

  const displayPlayerStats = filterLastTenGameStats?.map((info) => {
    return (
      <tr key={info.game.id}>
        <td>{info.points}</td>
        <td>{info.fgm}</td>
        <td>{info.fga}</td>
        <td>{info.fgp}</td>
        <td>{info.tpm}</td>
        <td>{info.tpa}</td>
        <td>{info.tpp}</td>
        <td>{info.ftm}</td>
        <td>{info.fta}</td>
        <td>{info.ftp}</td>
        <td>{info.offReb}</td>
        <td>{info.defReb}</td>
        <td>{info.totReb}</td>
        <td>{info.assists}</td>
        <td>{info.steals}</td>
        <td>{info.blocks}</td>
        <td>{info.turnovers}</td>
        <td>{info.pFouls}</td>
        <td>{info.plusMinus}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 className="center-align page-header">
        {currentPlayerName} LAST 10 GAMES
      </h1>
      <PlayerStatsTable playerStats={displayPlayerStats} />
    </>
  );
};

export default Players;
