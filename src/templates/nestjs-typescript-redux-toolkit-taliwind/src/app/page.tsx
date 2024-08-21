"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>Landing Page!!! <span onClick={() => router.push("/auth/login")}>Click Me</span></div>
  );
}
