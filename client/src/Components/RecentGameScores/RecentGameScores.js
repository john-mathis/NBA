import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { AiFillCaretLeft } from "react-icons/ai";
import "./RecentGameScores.css";
import { useGetRecentGameScoresQuery } from "../../App/Features/Api/apiSlice";

const RecentGameScores = () => {
  const { setLatestGameID } = useContext(Context);
  const [games, setGames] = useState([]);

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const lastDayOfSeason = "2023-04-09";

  const { data } = useGetRecentGameScoresQuery(lastDayOfSeason);

  useEffect(() => {
    setGames(data?.response);
  }, [data]);

  return (
    <>
      <section className="current-games-wrapper">
        <section className="current-games-container">
          {games?.map((info) => {
            return (
              <React.Fragment key={info.id}>
                <Link to="/recent-game-stats">
                  <div
                    className="games-container"
                    onClick={() => {
                      setLatestGameID(info.id);
                    }}
                  >
                    <p className="live-logo">
                      {info.status.long === "In Play"
                        ? `Q${info.periods.current + " " + info.status.clock}`
                        : ""}
                    </p>
                    <div className="away-team game-info">
                      <img
                        className="small-team-logo"
                        src={info.teams.visitors.logo}
                        alt="home team logo"
                      />
                      <p className="small-team-code">
                        {info.teams.visitors.code}
                      </p>
                      <p className="small-team-detail">
                        {info.scores.visitors.points}
                      </p>
                      <span className="game-result">
                        {info.scores.visitors.points >
                        info.scores.home.points ? (
                          <AiFillCaretLeft />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div className="home-team game-info">
                      <img
                        className="small-team-logo"
                        src={info.teams.home.logo}
                        alt="away team logo"
                      />
                      <p className="small-team-code">{info.teams.home.code}</p>
                      <p className="small-team-detail">
                        {info.scores.home.points}
                      </p>
                      <span className="game-result">
                        {info.scores.home.points >
                        info.scores.visitors.points ? (
                          <AiFillCaretLeft />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default RecentGameScores;
