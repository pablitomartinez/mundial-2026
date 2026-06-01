import { getLeagueById } from "@/services/api-football";

const WORLD_CUP_LEAGUE_ID = 1;

export default async function WorldCupTestPage() {
  const leagues = await getLeagueById(WORLD_CUP_LEAGUE_ID);
  const worldCup = leagues.response[0];

  if (!worldCup) {
    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          World Cup Test
        </h1>
        <p className="mt-4 text-muted-foreground">
          No se encontro informacion para league=1.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-3xl">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        API-Football league detail
      </p>
      <h1 className="text-3xl font-semibold tracking-normal">
        {worldCup.league.name}
      </h1>
      <p className="mt-2 text-muted-foreground">
        League ID: {worldCup.league.id} | Country: {worldCup.country.name}
      </p>

      {/* Las temporadas disponibles definen el parametro season que necesitaremos
      en la proxima llamada a /fixtures o /standings para el Mundial. */}
      <div className="mt-8">
        <h2 className="text-lg font-medium">Temporadas disponibles</h2>
        <ul className="mt-4 space-y-2 text-base">
          {worldCup.seasons?.map((season) => (
            <li key={season.year}>
              {season.year} | {season.start} - {season.end}
              {season.current ? " | Current" : ""}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
