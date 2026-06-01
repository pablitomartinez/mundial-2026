import { getStandingsAudit } from "@/services/api-football";

const ENDPOINT = "/standings?league=1&season=2022";

export default async function StandingsTestPage() {
  try {
    const standings = await getStandingsAudit();
    const visibleStandings = standings.response.slice(0, 20);
    const firstStanding = standings.response[0]?.league.standings[0]?.[0] ?? null;

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: standings.results,
      firstRecord: firstStanding,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          Standings Test
        </h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: {standings.results}</p>
        <p className="mt-6">Errores devueltos por API-Football: ninguno</p>
        <pre className="mt-6 overflow-auto text-sm">
          {JSON.stringify(visibleStandings, null, 2)}
        </pre>
      </section>
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: 0,
      firstRecord: null,
      error: message,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          Standings Test
        </h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: 0</p>
        <p className="mt-6">Plan restriction:</p>
        <p>{message}</p>
      </section>
    );
  }
}
