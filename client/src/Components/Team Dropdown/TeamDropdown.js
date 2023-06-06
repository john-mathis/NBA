import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";

import "../Team Dropdown/TeamDropdown.css";
const PlayersDropdown = () => {
  return (
    <>
      <div className="dropdown-container">
        <TeamDropdown />
      </div>
    </>
  );
};

const TeamDropdown = () => {
  const { team, setTeam } = useContext(Context);
  const navigate = useNavigate();

  const handleTeamSwitch = (e) => {
    setTeam(e.target.value);
    navigate(`/teamdetails/${team}`);
  };

  return (
    <select value={team} onChange={handleTeamSwitch}>
      <option value={27}>76ers</option>
      <option value={21}>Bucks</option>
      <option value={6}>Bulls</option>
      <option value={7}>Cavaliers</option>
      <option value={2}>Celtics</option>
      <option value={16}>Clippers</option>
      <option value={19}>Grizzlies</option>
      <option value={1}>Hawks</option>
      <option value={20}>Heat</option>
      <option value={5}>Hornets</option>
      <option value="Jazz">Jazz</option>
      <option value={30}>Kings</option>
      <option value={24}>Knicks</option>
      <option value={17}>Lakers</option>
      <option value={26}>Magic</option>
      <option value={8}>Mavericks</option>
      <option value={4}>Nets</option>
      <option value={9}>Nuggets</option>
      <option value={15}>Pacers</option>
      <option value={23}>Pelicans</option>
      <option value={10}>Pistons</option>
      <option value={31}>Spurs</option>
      <option value={14}>Rockets</option>
      <option value={28}>Suns</option>
      <option value={25}>Thunder</option>
      <option value={22}>Timberwolves</option>
      <option value={29}>Trail Blazers</option>
      <option value={11}>Warriors</option>
      <option value="Wizards">Wizards</option>
    </select>
  );
};

export default PlayersDropdown;
