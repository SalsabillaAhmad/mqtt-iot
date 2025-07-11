"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarUtama() {
  const pathname = usePathname();
  const dashboardpertama = pathname?.startsWith("/dashboard");

  if (dashboardpertama) return null;

  return (
    <header className="bg-amber-300 shadow p-4 flex justify-between items-center">
      <h1>MQTT Smarthome IoT</h1>
      <nav className="space-x-4">
        <Link href="/">Beranda</Link>
        <Link href="/tentang">Tentang</Link>
        <Link href="/login">Login</Link>
        <Link href="/daftar">Daftar</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
