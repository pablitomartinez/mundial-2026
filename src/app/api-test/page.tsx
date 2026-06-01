import { getApiStatus } from "@/services/api-football";

export default async function ApiTestPage() {
  const status = await getApiStatus();
  const { requests, subscription } = status.response;
  const availableRequests = requests.limit_day - requests.current;

  return (
    <section className="w-full max-w-2xl">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        API-Football status
      </p>
      <h1 className="text-3xl font-semibold tracking-normal">API Test</h1>

      <dl className="mt-8 space-y-4 text-base">
        <div>
          <dt className="text-sm text-muted-foreground">Plan</dt>
          <dd className="font-medium">{subscription.plan}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">
            Estado de suscripción
          </dt>
          <dd className="font-medium">
            {subscription.active ? "Activa" : "Inactiva"}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Requests consumidos</dt>
          <dd className="font-medium">{requests.current}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Requests disponibles</dt>
          <dd className="font-medium">{availableRequests}</dd>
        </div>
      </dl>
    </section>
  );
}
