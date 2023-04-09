import React, { useEffect, useState } from "react";
import { useGetConferenceStandingsQuery } from "../../App/Features/Api/apiSlice";
import "../Standings/Standings.css";
import StandingsTable from "./StandingsTable";

const Standings = () => {
  const [teamStandings, setTeamStandings] = useState([]);
  const [league] = useState("standard");
  const { data } = useGetConferenceStandingsQuery(league);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = await data;
        setTeamStandings(tableData.response);
      } catch {}
    };
    fetchData();
  }, [data]);

  const filterWesternConfrenceTeams = teamStandings?.filter(
    (teams) => teams.conference.name === "west"
  );
  const filterEasternConfrenceTeams = teamStandings?.filter(
    (teams) => teams.conference.name === "east"
  );

  filterWesternConfrenceTeams?.sort(
    (a, b) => Number(a.conference.rank) - Number(b.conference.rank)
  );

  filterEasternConfrenceTeams?.sort(
    (a, b) => Number(a.conference.rank) - Number(b.conference.rank)
  );

  return (
    <>
      <h2 className="center-align page-header">Eastern Conference</h2>
      {<StandingsTable props={filterEasternConfrenceTeams} />}
      <h2 className="center-align page-header">Western Conference</h2>
      {<StandingsTable props={filterWesternConfrenceTeams} />}
    </>
  );
};

export default Standings;
