import { getPlayersAudit } from "@/services/api-football";

const ENDPOINT = "/players?league=1&season=2022&page=1";

export default async function PlayersTestPage() {
  try {
    const players = await getPlayersAudit();
    const visiblePlayers = players.response.slice(0, 20);

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: players.results,
      firstRecord: players.response[0] ?? null,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">Players Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: {players.results}</p>
        <p className="mt-6">Errores devueltos por API-Football: ninguno</p>
        <ul className="mt-6 space-y-2">
          {visiblePlayers.map(({ player }) => (
            <li key={player.id}>
              {player.id} | {player.name} | {player.nationality ?? "sin pais"}
            </li>
          ))}
        </ul>
        <pre className="mt-6 overflow-auto text-sm">
          {JSON.stringify(visiblePlayers, null, 2)}
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
        <h1 className="text-3xl font-semibold tracking-normal">Players Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: 0</p>
        <p className="mt-6">Plan restriction:</p>
        <p>{message}</p>
      </section>
    );
  }
}
