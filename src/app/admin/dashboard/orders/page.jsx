"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  method: "cash",
  grandPrice: "",
};

export default function OrdersAdminPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState("");

  const load = async () => {
    const orders = await api.getOrders();
    setItems(orders || []);
  };

  useEffect(() => {
    load().catch(console.error);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      cart: [],
      getState: [],
      grandPrice: String(form.grandPrice || "0"),
    };
    if (editingId) {
      await api.updateOrder(editingId, payload);
    } else {
      await api.createOrder(payload);
    }
    await load();
    setForm(initialForm);
    setEditingId("");
  };

  const onDelete = async (id) => {
    await api.deleteOrder(id);
    await load();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#491D0B]">Orders CRUD</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input className="border rounded px-3 py-2" placeholder="Customer name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Grand total" value={form.grandPrice} onChange={(e) => setForm({ ...form, grandPrice: e.target.value })} required />
        <select className="border rounded px-3 py-2" value={form.method} onChange={(e) => setForm({ ...form, method: e.target.value })}>
          <option value="cash">Cash</option>
          <option value="bkash">bKash</option>
          <option value="card">Card</option>
        </select>
        <button className="bg-[#C09A44] text-white px-4 py-2 rounded" type="submit">
          {editingId ? "Update" : "Create"}
        </button>
      </form>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item._id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <p className="font-medium">{item.name} - {item.city}</p>
              <p className="text-xs text-gray-600">{item.email} | {item.phone} | {item.method} | Total: {item.grandPrice}</p>
            </div>
            <div className="space-x-2">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => {
                  setEditingId(item._id);
                  setForm({
                    name: item.name || "",
                    email: item.email || "",
                    phone: item.phone || "",
                    address: item.address || "",
                    city: item.city || "",
                    method: item.method || "cash",
                    grandPrice: item.grandPrice || "",
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
