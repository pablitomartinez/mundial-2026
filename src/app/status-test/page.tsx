import { getStatusAudit } from "@/services/api-football";

const ENDPOINT = "/status";

export default async function StatusTestPage() {
  try {
    const status = await getStatusAudit();
    const { requests, subscription } = status.response;
    const availableRequests = requests.limit_day - requests.current;

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: status.results,
      firstRecord: status.response,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">Status Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: {status.results}</p>
        <p>Plan: {subscription.plan}</p>
        <p>Requests consumidos: {requests.current}</p>
        <p>Requests disponibles: {availableRequests}</p>
        <p>Limite diario: {requests.limit_day}</p>
        <p className="mt-6">Errores devueltos por API-Football: ninguno</p>
        <pre className="mt-6 overflow-auto text-sm">
          {JSON.stringify(status.response, null, 2)}
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
        <h1 className="text-3xl font-semibold tracking-normal">Status Test</h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: 0</p>
        <p className="mt-6">Plan restriction:</p>
        <p>{message}</p>
      </section>
    );
  }
}
