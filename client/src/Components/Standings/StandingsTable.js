import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const StandingsTableHead = () => {
  return (
    <thead className="table-head">
      <tr>
        <th>TEAM</th>
        <th>W</th>
        <th>L</th>
        <th>WIN %</th>
        <th>GB</th>
        <th>HOME</th>
        <th>AWAY</th>
        <th>LAST10</th>
        <th>STREAK</th>
      </tr>
    </thead>
  );
};

const StandingsTableBody = ({ props }) => {
  const { setTeam } = useContext(Context);
  return (
    <>
      <tbody>
        {props.map((props) => {
          return (
            <tr className="team-data" key={props?.team.name}>
              <td className="team-info">
                {props?.conference.rank}
                <Link
                  to={`/teamdetails/${props.team.nickname}`}
                  onClick={() => {
                    setTeam(props.team.id);
                  }}
                  className="team-info"
                >
                  <img
                    className="team-img"
                    src={props?.team.logo}
                    alt="team logo"
                  />
                  <p className="team-name-long">{props?.team.name}</p>
                  <p className="team-name-short">{props?.team.nickname}</p>
                </Link>
              </td>

              <td>{props?.division.win}</td>
              <td>{props?.division.loss}</td>
              <td>{props?.win.percentage}</td>
              <td>{props?.gamesBehind ? props.gamesBehind : "--"} </td>
              <td>{`${props?.win.home + "-" + props?.loss.home}`}</td>
              <td>{`${props?.win.away + "-" + props?.loss.away}`}</td>
              <td>{`${props?.win.lastTen + "-" + props?.loss.lastTen}`}</td>
              <td>{`${
                props?.winStreak ? "W" + props?.streak : "L" + props?.streak
              }`}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

const StandingsTable = ({ props }) => {
  return (
    <table className="standings-table">
      <StandingsTableHead />
      <StandingsTableBody props={props} />
    </table>
  );
};

export default StandingsTable;
