import { getWorldCupFixtures } from "@/services/api-football";

export default async function FixturesTestPage() {
  let fixtures;

  try {
    fixtures = await getWorldCupFixtures();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown API-Football error.";

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          Fixtures Test
        </h1>
        <p className="mt-6 text-muted-foreground">
          No se encontraron fixtures para World Cup 2026
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{errorMessage}</p>
      </section>
    );
  }

  const visibleFixtures = fixtures.response.slice(0, 20);

  if (fixtures.results === 0) {
    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          Fixtures Test
        </h1>
        <p className="mt-6 text-muted-foreground">
          No se encontraron fixtures para World Cup 2026
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-3xl">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        API-Football fixtures
      </p>
      <h1 className="text-3xl font-semibold tracking-normal">Fixtures Test</h1>

      {/* Inspeccionamos fixtures antes de construir UI para validar ids, fechas,
      estados, equipos y rondas reales que usara la experiencia final. */}
      <p className="mt-6 font-medium">
        Total fixtures encontrados: {fixtures.results}
      </p>

      {/* Estos datos definen la proxima fase: como agrupar partidos por ronda,
      que estados mostrar y que campos son confiables para una vista deportiva. */}
      <div className="mt-8 space-y-6">
        {visibleFixtures.map(({ fixture, league, teams }) => (
          <article key={fixture.id} className="border-b pb-6 last:border-b-0">
            <p>{fixture.id}</p>
            <p>{fixture.date}</p>
            <p className="mt-3">
              {teams.home.name} vs {teams.away.name}
            </p>
            <p className="mt-3">Status: {fixture.status.short}</p>
            <p>Round: {league.round}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
