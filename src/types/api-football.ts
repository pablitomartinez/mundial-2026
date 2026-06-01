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
