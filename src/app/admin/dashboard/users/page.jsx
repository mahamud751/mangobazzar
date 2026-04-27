"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const initialForm = {
  name: "",
  email: "",
  password: "",
  isAdmin: true,
};

export default function UsersAdminPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingEmail, setEditingEmail] = useState("");

  const load = async () => {
    const users = await api.getUsers();
    setItems(users || []);
  };

  useEffect(() => {
    load().catch(console.error);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      isAdmin: Boolean(form.isAdmin),
    };

    if (editingEmail) {
      await api.updateUser(editingEmail, payload);
    } else {
      await api.createUser(payload);
    }
    await load();
    setForm(initialForm);
    setEditingEmail("");
  };

  const onDelete = async (id) => {
    await api.deleteUser(id);
    await load();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#491D0B]">Users CRUD</h2>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <input className="border rounded px-3 py-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required disabled={Boolean(editingEmail)} />
        <input className="border rounded px-3 py-2" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <label className="flex items-center gap-2 px-2">
          <input type="checkbox" checked={form.isAdmin} onChange={(e) => setForm({ ...form, isAdmin: e.target.checked })} />
          Admin
        </label>
        <button className="bg-[#C09A44] text-white px-4 py-2 rounded md:col-span-4 w-fit" type="submit">
          {editingEmail ? "Update User" : "Create User"}
        </button>
      </form>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item._id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-600">{item.email} | {item.isAdmin ? "Admin" : "User"}</p>
            </div>
            <div className="space-x-2">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => {
                  setEditingEmail(item.email || "");
                  setForm({
                    name: item.name || "",
                    email: item.email || "",
                    password: "",
                    isAdmin: Boolean(item.isAdmin),
                  });
                }}
              >
                Edit
              </button>
              <button className="px-2 py-1 border rounded text-red-600" onClick={() => onDelete(item._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
