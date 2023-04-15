import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "../TeamDetails/TeamDetails.css";
import { Context } from "../Context/Context";
import TeamDropdown from "../Team Dropdown/TeamDropdown";
import UpcomingGames from "../UpcomingGames/UpcomingGames";
import { useGetTeamDetailsQuery } from "../../App/Features/Api/apiSlice";

const TeamDetails = () => {
  const { team, setPlayerData, playerData, setPlayerID, setCurrentPlayerName } =
    useContext(Context);

  const { data, error, isLoading } = useGetTeamDetailsQuery(team);

  useEffect(() => {
    setPlayerData(data?.response);
  }, [data]);

  const filterTwoWayPlayers = playerData?.filter(
    (players) => players.birth.date !== null && players.height.feets !== null
  );

  const sortByNumber = filterTwoWayPlayers?.sort(
    (a, b) => a.leagues.standard?.jersey - b.leagues.standard?.jersey
  );

  const ageReformat = (age) => {
    const monthAndYear = age.slice(5, 10);
    const year = age.slice(0, 4);
    return monthAndYear + "-" + year;
  };

  const displayPlayerData = sortByNumber?.map((info) => {
    return (
      <React.Fragment key={info.id}>
        <tr className="player-card">
          <td>
            <Link
              to="/players"
              className="players-link"
              onClick={() => {
                setPlayerID(info.id);
                setCurrentPlayerName(info.firstname + " " + info.lastname);
              }}
            >{`${info.firstname + " " + info.lastname}`}</Link>
          </td>

          <td>{info.leagues.standard ? info.leagues.standard.jersey : ""}</td>
          <td>{info.leagues.standard ? info.leagues.standard.pos : ""}</td>
          <td>{`${
            info.height.feets
              ? info.height.feets + "-" + info.height.inches
              : ""
          }`}</td>
          <td>{`${info.weight.pounds ? info.weight.pounds : ""}`}</td>
          <td>{`${info.birth.date ? ageReformat(info.birth.date) : ""}`}</td>
          <td>{`${info.nba.pro ? info.nba.pro : "R"}`}</td>
          <td>{`${info.nba.start ? info.nba.start : ""}`}</td>
          <td>{info.college ? info.college : ""}</td>
          <td>{info.birth.country ? info.birth.country : ""}</td>
        </tr>
      </React.Fragment>
    );
  });
  if (isLoading) return <Loading />;
  if (error) console.log(error);
  return (
    <>
      <UpcomingGames />
      <section className="max-width-container">
        <div className="player-container">
          <TeamDropdown />
          <table>
            <thead className="table-head">
              <tr>
                <th>Player</th>
                <th>#</th>
                <th>Pos</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Birthdate</th>
                <th>Exp</th>
                <th>Draft YR</th>
                <th>School</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>{displayPlayerData}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
