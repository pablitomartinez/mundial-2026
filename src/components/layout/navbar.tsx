import { APP_NAME } from "@/constants/app";

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center px-6">
        <span className="text-base font-semibold">{APP_NAME}</span>
      </nav>
    </header>
  );
}
