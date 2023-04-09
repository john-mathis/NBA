import React from "react";

const StatsTableHead = () => {
  return (
    <thead className="table-head">
      <tr>
        <th>PLAYER</th>
        <th>MIN</th>
        <th>FGM</th>
        <th>FGA</th>
        <th>FG%</th>
        <th>3PM</th>
        <th>3PA</th>
        <th>3P%</th>
        <th>FTM</th>
        <th>FTA</th>
        <th>FTP</th>
        <th>OREB</th>
        <th>DREB</th>
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
        <th>TOV</th>
        <th>PF</th>
        <th>PTS</th>
        <th>+/-</th>
      </tr>
    </thead>
  );
};

const StatsTableBody = ({ props }) => {
  return (
    <tbody>
      {props.map((props) => {
        return (
          <tr key={props?.player.id}>
            <td>{props?.player.firstname + " " + props?.player.lastname}</td>
            <td>{props?.min}</td>
            <td>{props?.fgm}</td>
            <td>{props?.fga}</td>
            <td>{props?.fgp}</td>
            <td>{props?.tpm}</td>
            <td>{props?.tpa}</td>
            <td>{props?.tpp}</td>
            <td>{props?.ftm}</td>
            <td>{props?.fta}</td>
            <td>{props?.ftp}</td>
            <td>{props?.offReb}</td>
            <td>{props?.defReb}</td>
            <td>{props?.totReb}</td>
            <td>{props?.assists}</td>
            <td>{props?.steals}</td>
            <td>{props?.blocks}</td>
            <td>{props?.turnovers}</td>
            <td>{props?.pFouls}</td>
            <td>{props?.points}</td>
            <td>{props?.plusMinus}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

const StatsTable = ({ props }) => {
  return (
    <table className="player-container center-align">
      <StatsTableHead />
      <StatsTableBody props={props} />
    </table>
  );
};

export default StatsTable;
