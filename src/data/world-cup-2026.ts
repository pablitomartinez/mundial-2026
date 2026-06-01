type WorldCupMatch = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  note?: string;
};

export const worldCupData = {
  startDate: "2026-06-11",
  endDate: "2026-07-19",

  argentinaFixtures: [
    {
      id: "argentina-match-1",
      homeTeam: "Argentina",
      awayTeam: "Rival a confirmar",
      date: "2026-06-13",
      time: "A confirmar",
      note: "Fixture oficial pendiente",
    },
  ] satisfies WorldCupMatch[],

  todayMatches: [
    {
      id: "opening-match",
      homeTeam: "Mexico",
      awayTeam: "Rival a confirmar",
      date: "2026-06-11",
      time: "A confirmar",
      note: "Partido inaugural",
    },
    {
      id: "canada-opening",
      homeTeam: "Canada",
      awayTeam: "Rival a confirmar",
      date: "2026-06-12",
      time: "A confirmar",
    },
  ] satisfies WorldCupMatch[],

  featuredMatches: [
    {
      id: "argentina-debut",
      homeTeam: "Argentina",
      awayTeam: "Rival a confirmar",
      date: "2026-06-13",
      time: "A confirmar",
      note: "Debut estimado de Argentina",
    },
    {
      id: "final",
      homeTeam: "Finalista 1",
      awayTeam: "Finalista 2",
      date: "2026-07-19",
      time: "A confirmar",
      note: "Final del Mundial 2026",
    },
  ] satisfies WorldCupMatch[],
};
