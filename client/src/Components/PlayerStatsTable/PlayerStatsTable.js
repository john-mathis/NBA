import React from "react";
import "../PlayerStatsTable/PlayerStatsTable";

const PlayerStatsTable = ({ playerStats }) => {
  return (
    <div className="player-container center-align">
      <table>
        <thead className="table-head">
          <tr>
            <th>PTS</th>
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
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>{playerStats}</tbody>
      </table>
    </div>
  );
};

export default PlayerStatsTable;
