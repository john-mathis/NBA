import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import "../HeadToHead/HeadToHead.css";
import { useGetHeadtoHeadDataQuery } from "../../App/Features/Api/apiSlice";

const HeadToHead = () => {
  const { versusTeamIDs } = useContext(Context);
  const [headToHeadStats, setHeadToHeadStats] = useState([]);

  const { data } = useGetHeadtoHeadDataQuery(versusTeamIDs);

  useEffect(() => {
    setHeadToHeadStats(data?.response);
  }, [data]);

  const filterRegularSeasonMatchups = headToHeadStats?.filter(
    (info) => info.league === "standard"
  );

  const filterGamesByYear = filterRegularSeasonMatchups?.sort(
    (a, b) => a.id - b.id
  );

  const filterLastTenGames = filterGamesByYear?.slice(-7);

  const dateReformat = (age) => {
    const monthAndYear = age.slice(5, 10);
    const year = age.slice(0, 4);
    return monthAndYear + "-" + year;
  };

  console.log(filterLastTenGames);

  const displayLastTenGameStats = filterLastTenGames?.map((info) => {
    return (
      <div className="game-container" key={info.id}>
        <p className="game-date left-align text-body">
          {dateReformat(info.date.start)}
        </p>
        <div className="away-team game-info">
          <img
            className="small-team-logo"
            src={info.teams.visitors.logo}
            alt="team logo"
          />
          <p>{info.teams.visitors.name}</p>
          <p>{info.scores.visitors.points}</p>
        </div>

        <div className="home-team game-info">
          <img
            className="small-team-logo"
            src={info.teams.home.logo}
            alt="team logo"
          />
          <p>{info.teams.home.name}</p>
          <p>{info.scores.home.points}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="center-align page-header">Previous Matchups</h1>
      <section className="matchup-container">{displayLastTenGameStats}</section>
    </>
  );
};

export default HeadToHead;
