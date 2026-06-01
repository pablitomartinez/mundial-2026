import { APP_DESCRIPTION, APP_NAME } from "@/constants/app";

export default function HomePage() {
  return (
    <section className="flex w-full flex-col justify-center">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Base inicial
        </p>
        <h1 className="text-4xl font-semibold tracking-normal text-foreground">
          {APP_NAME}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {APP_DESCRIPTION}
        </p>
      </div>
    </section>
  );
}
