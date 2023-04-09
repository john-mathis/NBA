import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
  "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
};

export const nbaDataApi = createApi({
  reducerPath: "nbaData",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api-nba-v1.p.rapidapi.com/" }),

  endpoints: (builder) => ({
    getRecentGameScores: builder.query({
      query: (today) => ({
        url: "games",
        headers: headers,
        params: { date: today },
      }),
    }),

    getCurrentTeams: builder.query({
      query: () => ({
        url: "teams",
        headers: headers,
      }),
    }),

    getConferenceStandings: builder.query({
      query: (league, season = "2022") => ({
        url: "standings",
        headers: headers,
        params: {
          season: season,
          league: league,
        },
      }),
    }),

    getTeamDetails: builder.query({
      query: (team, season = "2022") => ({
        url: "players",
        headers: headers,
        params: { team: team, season: season },
      }),
    }),

    getHeadtoHeadData: builder.query({
      query: (versusTeamIDs) => ({
        url: "games",
        headers: headers,
        params: { h2h: versusTeamIDs },
      }),
    }),

    getUpcomingGames: builder.query({
      query: (team, season = "2022") => ({
        url: "games",
        headers: headers,
        params: { season: season, team: team },
      }),
    }),

    getPlayerDetails: builder.query({
      query: (id, season = "2022") => ({
        url: "players/statistics",
        headers: headers,
        params: {
          id: id,
          season: season,
        },
      }),
    }),

    getSingleGameStats: builder.query({
      query: (latestGameID) => ({
        url: "players/statistics",
        headers: headers,
        params: { game: latestGameID },
      }),
    }),

    getRecentGameStats: builder.query({
      query: (latestGameID) => ({
        url: "games/statistics",
        headers: headers,
        params: { id: latestGameID },
      }),
    }),

    getTeamsById: builder.query({
      query: (latestGameID) => ({
        url: "games",
        headers: headers,
        params: { id: latestGameID },
      }),
    }),
  }),
});

export const {
  useGetRecentGameScoresQuery,
  useGetCurrentTeamsQuery,
  useGetConferenceStandingsQuery,
  useGetTeamDetailsQuery,
  useGetHeadtoHeadDataQuery,
  useGetUpcomingGamesQuery,
  useGetPlayerDetailsQuery,
  useGetSingleGameStatsQuery,
  useGetRecentGameStatsQuery,
  useGetTeamsByIdQuery,
} = nbaDataApi;
