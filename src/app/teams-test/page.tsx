import { getTeamsAudit } from "@/services/api-football";

const ENDPOINT = "/teams?league=1&season=2022";

export default async function TeamsTestPage() {
  try {
    const teams = await getTeamsAudit();
    const visibleTeams = teams.response.slice(0, 20);

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: teams.results,
      firstRecord: teams.response[0] ?? null,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">Teams Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: {teams.results}</p>
        <p className="mt-6">Errores devueltos por API-Football: ninguno</p>
        <ul className="mt-6 space-y-2">
          {visibleTeams.map(({ team }) => (
            <li key={team.id}>
              {team.id} | {team.name} | {team.country ?? "sin pais"}
            </li>
          ))}
        </ul>
        <pre className="mt-6 overflow-auto text-sm">
          {JSON.stringify(visibleTeams, null, 2)}
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
        <h1 className="text-3xl font-semibold tracking-normal">Teams Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: 0</p>
        <p className="mt-6">Plan restriction:</p>
        <p>{message}</p>
      </section>
    );
  }
}
