import { getLeagues } from "@/services/api-football";

const LEAGUE_NAME_KEYWORDS = ["World", "Cup", "FIFA"];

export default async function LeaguesTestPage() {
  const leagues = await getLeagues();

  // Exploramos ligas antes de fixtures porque API-Football requiere el leagueId
  // correcto para consultar partidos sin traer datos ambiguos o irrelevantes.
  const filteredLeagues = leagues.response
    .filter(({ league }) =>
      LEAGUE_NAME_KEYWORDS.some((keyword) =>
        league.name.toLowerCase().includes(keyword.toLowerCase()),
      ),
    )
    .slice(0, 50);

  return (
    <section className="w-full max-w-3xl">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        API-Football leagues
      </p>
      <h1 className="text-3xl font-semibold tracking-normal">Leagues Test</h1>

      {/* El leagueId identificado aca sera el input principal de la proxima fase,
      donde decidiremos si consultar /fixtures o /standings para esa competicion. */}
      <ul className="mt-8 space-y-3 text-base">
        {filteredLeagues.map(({ country, league }) => (
          <li key={`${league.id}-${country.name}`}>
            {league.id} | {league.name} | {country.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
