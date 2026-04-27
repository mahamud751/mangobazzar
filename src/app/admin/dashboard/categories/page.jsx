"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function CategoriesAdminPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [banner, setBanner] = useState("");
  const [editingId, setEditingId] = useState("");

  const load = async () => {
    const categories = await api.getCategories();
    setItems(categories || []);
  };

  useEffect(() => {
    load().catch(console.error);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, banner, img: [] };
    if (editingId) {
      await api.updateCategory(editingId, payload);
    } else {
      await api.createCategory(payload);
    }
    await load();
    setName("");
    setBanner("");
    setEditingId("");
  };

  const onDelete = async (id) => {
    await api.deleteCategory(id);
    await load();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#491D0B]">Categories CRUD</h2>
      <form onSubmit={onSubmit} className="flex flex-wrap gap-2">
        <input className="border rounded px-3 py-2" placeholder="Category name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="border rounded px-3 py-2 min-w-80" placeholder="Banner url (optional)" value={banner} onChange={(e) => setBanner(e.target.value)} />
        <button className="bg-[#C09A44] text-white px-4 py-2 rounded" type="submit">
          {editingId ? "Update" : "Create"}
        </button>
      </form>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item._id} className="flex items-center justify-between border rounded px-3 py-2">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-600">{item.products?.length || 0} products</p>
            </div>
            <div className="space-x-2">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => {
                  setEditingId(item._id);
                  setName(item.name || "");
                  setBanner(item.banner || "");
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
