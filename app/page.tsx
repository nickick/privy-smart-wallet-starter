"use client";
import { Buttons } from "./Buttons";
import { Login } from "./Login";
import Providers from "./Provider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Providers>
        <Login />
        <Buttons />
      </Providers>
    </div>
  );
}
