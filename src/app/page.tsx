import { worldCupData } from "@/data/world-cup-2026";

function getDaysUntilWorldCup() {
  const today = new Date();
  const startDate = new Date(`${worldCupData.startDate}T00:00:00Z`);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.max(
    0,
    Math.ceil((startDate.getTime() - today.getTime()) / millisecondsPerDay),
  );
}

export default function HomePage() {
  const daysUntilWorldCup = getDaysUntilWorldCup();
  const nextArgentinaMatch = worldCupData.argentinaFixtures[0];

  return (
    <section className="w-full space-y-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-normal">
          Football Hub 2026
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          El acompañante del Mundial para lectores argentinos.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Cuenta regresiva</h2>
        <p className="mt-2 text-3xl font-semibold">{daysUntilWorldCup} dias</p>
        <p className="text-muted-foreground">para el inicio del Mundial</p>
      </div>

      {nextArgentinaMatch ? (
        <div>
          <h2 className="text-xl font-semibold">Proximo partido de Argentina</h2>
          <p className="mt-2">
            Argentina vs {nextArgentinaMatch.awayTeam}
          </p>
          <p>
            {nextArgentinaMatch.date} - {nextArgentinaMatch.time}
          </p>
          {nextArgentinaMatch.note ? (
            <p className="text-muted-foreground">{nextArgentinaMatch.note}</p>
          ) : null}
        </div>
      ) : null}

      <div>
        <h2 className="text-xl font-semibold">Hoy se juega</h2>
        <ul className="mt-3 space-y-2">
          {worldCupData.todayMatches.map((match) => (
            <li key={match.id}>
              {match.homeTeam} vs {match.awayTeam} | {match.date} | {match.time}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Partidos destacados</h2>
        <ul className="mt-3 space-y-2">
          {worldCupData.featuredMatches.map((match) => (
            <li key={match.id}>
              {match.homeTeam} vs {match.awayTeam} | {match.date} | {match.time}
              {match.note ? ` | ${match.note}` : ""}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Estado del proyecto</h2>
        <ul className="mt-3 space-y-2">
          <li>API-Football conectada</li>
          <li>Plan Free validado</li>
          <li>Fixtures 2026 restringidos</li>
          <li>Modelo hibrido en construccion</li>
        </ul>
      </div>
    </section>
  );
}
