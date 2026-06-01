import { getWorldCup2022Fixtures } from "@/services/api-football";

const ENDPOINT = "/fixtures?league=1&season=2022";

export default async function Fixtures2022TestPage() {
  const fixtures = await getWorldCup2022Fixtures();
  const visibleFixtures = fixtures.response.slice(0, 30);

  console.log("[API audit]", {
    endpoint: ENDPOINT,
    results: fixtures.results,
    firstRecord: fixtures.response[0] ?? null,
  });

  return (
    <section className="w-full max-w-3xl">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        API-Football fixtures
      </p>
      <h1 className="text-3xl font-semibold tracking-normal">
        Fixtures 2022 Test
      </h1>

      <p className="mt-6 font-medium">
        Total fixtures encontrados: {fixtures.results}
      </p>

      <div className="mt-8 space-y-8">
        {visibleFixtures.map(({ fixture, goals, league, teams }) => (
          <article key={fixture.id} className="border-b pb-8 last:border-b-0">
            <p>Fixture ID: {fixture.id}</p>

            <p className="mt-4">
              {teams.home.name} vs {teams.away.name}
            </p>

            <p className="mt-4">Resultado:</p>
            <p>
              {goals.home ?? "-"} - {goals.away ?? "-"}
            </p>

            <p className="mt-4">Status:</p>
            <p>{fixture.status.short}</p>
            <p>{fixture.status.long}</p>

            <p className="mt-4">Round:</p>
            <p>{league.round}</p>

            <p className="mt-4">Fecha:</p>
            <p>{fixture.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
