"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/admin/dashboard/products", label: "Products" },
  { href: "/admin/dashboard/categories", label: "Categories" },
  { href: "/admin/dashboard/orders", label: "Orders" },
  { href: "/admin/dashboard/users", label: "Users" },
];

export default function AdminDashboardLayout({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedState =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem("admin-authenticated")
        : null;

    if (savedState === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin@gmail.com";
    const validPassword = "123456!1";

    if (email.trim() === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      window.sessionStorage.setItem("admin-authenticated", "true");
      setError("");
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <section className="min-h-screen bg-[#f9f7f3]">
      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-6 space-y-4"
          >
            <h2 className="text-2xl font-semibold text-[#491D0B]">Admin Login</h2>
            <p className="text-sm text-gray-600">
              Sign in to access dashboard.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border rounded px-3 py-2"
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#C09A44] text-white rounded px-4 py-2"
            >
              Login
            </button>
          </form>
        </div>
      )}
      {isAuthenticated && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#491D0B]">Admin Dashboard</h1>
            <p className="text-gray-600">Manage products, categories, orders and users.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
            <aside className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 h-fit">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-[#491D0B] hover:bg-[#f4e9d2]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">{children}</div>
          </div>
        </div>
      )}
    </section>
  );
}
