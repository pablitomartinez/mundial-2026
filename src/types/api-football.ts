export type ApiFootballErrorMap = Record<string, string>;

export type ApiFootballEnvelope<TResponse> = {
  get: string;
  parameters: Record<string, string>;
  errors: string[] | ApiFootballErrorMap;
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: TResponse;
};

export type ApiFootballStatusResponse = {
  account: {
    firstname?: string;
    lastname?: string;
    email?: string;
  };
  subscription: {
    plan: string;
    end?: string;
    active: boolean;
  };
  requests: {
    current: number;
    limit_day: number;
  };
};

export type ApiFootballLeagueItem = {
  league: {
    id: number;
    name: string;
  };
  country: {
    name: string;
  };
  seasons?: Array<{
    year: number;
    start: string;
    end: string;
    current: boolean;
  }>;
};

export type ApiFootballLeaguesResponse = ApiFootballLeagueItem[];

export type ApiFootballFixtureItem = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      long: string;
    };
  };
  league: {
    name: string;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
    };
    away: {
      id: number;
      name: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

export type ApiFootballFixturesResponse = ApiFootballFixtureItem[];

export type ApiFootballCountryItem = {
  name: string;
  code?: string;
  flag?: string;
};

export type ApiFootballCountriesResponse = ApiFootballCountryItem[];

export type ApiFootballTeamItem = {
  team: {
    id: number;
    name: string;
    country?: string;
  };
  venue?: {
    name?: string;
    city?: string;
  };
};

export type ApiFootballTeamsResponse = ApiFootballTeamItem[];

export type ApiFootballPlayerItem = {
  player: {
    id: number;
    name: string;
    age?: number;
    nationality?: string;
  };
  statistics?: Array<{
    team?: {
      id?: number;
      name?: string;
    };
  }>;
};

export type ApiFootballPlayersResponse = ApiFootballPlayerItem[];

export type ApiFootballStandingItem = {
  rank: number;
  team: {
    id: number;
    name: string;
  };
  points: number;
  group: string;
};

export type ApiFootballStandingsResponse = Array<{
  league: {
    id: number;
    name: string;
    season: number;
    standings: ApiFootballStandingItem[][];
  };
}>;
