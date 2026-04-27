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
  const [editingCart, setEditingCart] = useState([]);

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
      cart: editingId ? editingCart : [],
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
    setEditingCart([]);
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
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item._id} className="border rounded p-3 md:p-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="space-y-1">
                <p className="font-semibold text-[#491D0B]">
                  {item.name} - {item.city}
                </p>
                <p className="text-xs text-gray-600">
                  {item.email} | {item.phone} | {item.method} | Total: {item.grandPrice}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Address:</span> {item.address}, {item.city}
                </p>
                <div className="text-sm text-gray-800">
                  <p className="font-medium mb-1">Ordered Mango Items:</p>
                  {item.cart?.length ? (
                    <ul className="space-y-1">
                      {item.cart.map((cartItem, index) => (
                        <li key={`${cartItem.id || cartItem.name}-${index}`} className="text-xs md:text-sm">
                          - {cartItem.name} {cartItem.variety ? `(${cartItem.variety})` : ""} x{cartItem.quantity || 1}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-gray-500">No item details available.</p>
                  )}
                </div>
              </div>
              <div className="space-x-2 shrink-0">
                <button
                  className="px-2 py-1 border rounded"
                  onClick={() => {
                    setEditingId(item._id);
                    setEditingCart(item.cart || []);
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
          </div>
        ))}
      </div>
    </div>
  );
}
