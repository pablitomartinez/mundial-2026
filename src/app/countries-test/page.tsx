import { getCountriesAudit } from "@/services/api-football";

const ENDPOINT = "/countries";

export default async function CountriesTestPage() {
  try {
    const countries = await getCountriesAudit();
    const visibleCountries = countries.response.slice(0, 20);

    console.log("[API audit]", {
      endpoint: ENDPOINT,
      results: countries.results,
      firstRecord: countries.response[0] ?? null,
    });

    return (
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-normal">
          Countries Test
        </h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: {countries.results}</p>
        <p className="mt-6">Errores devueltos por API-Football: ninguno</p>
        <ul className="mt-6 space-y-2">
          {visibleCountries.map((country) => (
            <li key={country.name}>
              {country.name} | {country.code ?? "sin codigo"}
            </li>
          ))}
        </ul>
        <pre className="mt-6 overflow-auto text-sm">
          {JSON.stringify(visibleCountries, null, 2)}
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
          Countries Test
        </h1>
        <p className="mt-6">Endpoint utilizado: {ENDPOINT}</p>
        <p>Cantidad de resultados: 0</p>
        <p className="mt-6">Plan restriction:</p>
        <p>{message}</p>
      </section>
    );
  }
}
