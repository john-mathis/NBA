import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import "../Teams/Teams.css";
import { useGetCurrentTeamsQuery } from "../../App/Features/Api/apiSlice";
import Loading from "../Loading/Loading";

const Teams = () => {
  const { setTeam, setTeamData, teamData } = useContext(Context);
  const { data } = useGetCurrentTeamsQuery();

  useEffect(() => {
    setTeamData(data?.response);
  }, [data]);

  // Filtering API response to teams that are NBA franchises only.
  const nbaTeams = teamData?.filter(
    (teams) => teams.nbaFranchise === true && teams.allStar === false
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="uppercase center-align page-header">teams</h1>
      <div className="teams-container">
        {nbaTeams?.map((info) => {
          return (
            <React.Fragment key={info.id}>
              <Link to="/teamdetails" className="">
                <div
                  className="team-card"
                  onClick={() => {
                    setTeam(info.id);
                  }}
                >
                  <img className="team-logo" src={info.logo} alt="team logo" />
                  <p className="team-name nav-link">{info.name}</p>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
