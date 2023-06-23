import React, { useContext, useEffect, useState } from "react";
import "../UpcomingGames/UpcomingGames.css";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useGetUpcomingGamesQuery } from "../../App/Features/Api/apiSlice";

const UpcomingGames = () => {
  const { team, setVersusTeamIDs } = useContext(Context);
  const [scheduledGames, setScheduledGames] = useState([]);
  const { data } = useGetUpcomingGamesQuery(team);

  useEffect(() => {
    setScheduledGames(data?.response);
  }, [data]);

  const filterScheduledGames = scheduledGames?.filter(
    (data) => data.status.long === "Scheduled"
  );

  const nextTenScheduledGames = filterScheduledGames?.slice(0, 10);

  const displayScheduledGames = nextTenScheduledGames?.map((info) => {
    return (
      <Link className="games-link" to="/head-to-head" key={info.id}>
        <div
          className="games-container"
          onClick={() => {
            setVersusTeamIDs(info.teams.home.id + "-" + info.teams.visitors.id);
          }}
        >
          <p>{info.date.start.slice(5, 10)}</p>

          <div className="away-team game-info">
            <img
              className="small-team-logo"
              src={info.teams.visitors.logo}
              alt="team
            logo"
            />
            <p className="small-team-code">{info.teams.visitors.code}</p>
          </div>
          <p className="at-home-logo">@</p>
          <div className="home-team game-info">
            <img
              className="small-team-logo"
              src={info.teams.home.logo}
              alt="team
            logo"
            />
            <p className="small-team-code">{info.teams.home.code}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <h1 className="center-align page-header">Upcoming Games</h1>
      <div className="current-games-container">
        {nextTenScheduledGames?.length > 0
          ? displayScheduledGames
          : "Eliminated from playoff contention"}
      </div>
    </>
  );
};

export default UpcomingGames;
