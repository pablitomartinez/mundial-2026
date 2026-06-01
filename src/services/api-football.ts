import type {
  ApiFootballEnvelope,
  ApiFootballLeaguesResponse,
  ApiFootballStatusResponse,
} from "@/types/api-football";

type FootballFetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

function getApiFootballConfig() {
  const apiKey = process.env.API_FOOTBALL_KEY;
  const baseUrl = process.env.API_FOOTBALL_BASE_URL;

  // Las variables de entorno mantienen credenciales y URLs fuera del codigo fuente.
  // No usamos NEXT_PUBLIC_* porque esta API Key debe vivir unicamente en el servidor.
  if (!apiKey) {
    throw new Error("Missing API_FOOTBALL_KEY environment variable.");
  }

  if (!baseUrl) {
    throw new Error("Missing API_FOOTBALL_BASE_URL environment variable.");
  }

  return {
    apiKey,
    baseUrl: baseUrl.replace(/\/$/, ""),
  };
}

function hasApiErrors<TResponse>(data: ApiFootballEnvelope<TResponse>) {
  if (Array.isArray(data.errors)) {
    return data.errors.length > 0;
  }

  return Object.keys(data.errors).length > 0;
}

export async function footballFetch<TResponse>(
  endpoint: `/${string}`,
  options: FootballFetchOptions = {},
): Promise<ApiFootballEnvelope<TResponse>> {
  const { apiKey, baseUrl } = getApiFootballConfig();

  // Centralizar las llamadas evita duplicar headers, manejo de errores y URL base
  // cuando el proyecto empiece a sumar nuevos endpoints.
  const response = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      "x-apisports-key": apiKey,
    },
    cache: options.cache ?? "no-store",
    next: options.next,
  });

  if (!response.ok) {
    throw new Error(`API-Football request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as ApiFootballEnvelope<TResponse>;

  if (hasApiErrors(data)) {
    throw new Error("API-Football returned an error response.");
  }

  return data;
}

export async function getApiStatus() {
  // Esta funcion se consume desde Server Components para no exponer la API Key
  // ni depender de CORS o logica de cliente en el navegador.
  return footballFetch<ApiFootballStatusResponse>("/status");
}

export async function getLeagues() {
  return footballFetch<ApiFootballLeaguesResponse>("/leagues");
}

export async function getLeagueById(leagueId: number) {
  return footballFetch<ApiFootballLeaguesResponse>(`/leagues?id=${leagueId}`);
}
