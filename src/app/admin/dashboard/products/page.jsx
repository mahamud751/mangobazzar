"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const initialForm = {
  name: "",
  slug: "",
  variety: "",
  description: "",
  price: "",
  originalPrice: "",
  rating: "",
  reviews: "",
  stock: "",
  imagesText: "",
};

export default function ProductsAdminPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState("");

  const load = async () => {
    const [products, categoryData] = await Promise.all([api.getProducts(), api.getCategories()]);
    setItems(products || []);
    setCategories(categoryData || []);
  };

  useEffect(() => {
    load().catch(console.error);
  }, []);

  const resetForm = () => {
    setForm(initialForm);
    setSelectedCategory("");
    setEditingId("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      slug: form.slug,
      variety: form.variety,
      description: form.description,
      price: Number(form.price || 0),
      originalPrice: Number(form.originalPrice || form.price || 0),
      rating: Number(form.rating || 0),
      reviews: Number(form.reviews || 0),
      stock: Number(form.stock || 0),
      images: form.imagesText
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      category: selectedCategory || null,
    };

    if (editingId) {
      await api.updateProduct(editingId, payload);
    } else {
      await api.createProduct(payload);
    }

    await load();
    resetForm();
  };

  const onEdit = (item) => {
    setEditingId(item._id);
    setSelectedCategory(item.category?._id || "");
    setForm({
      name: item.name || "",
      slug: item.slug || "",
      variety: item.variety || "",
      description: item.description || "",
      price: item.price || "",
      originalPrice: item.originalPrice || "",
      rating: item.rating || "",
      reviews: item.reviews || "",
      stock: item.stock || "",
      imagesText: (item.images || []).join(", "),
    });
  };

  const onDelete = async (id) => {
    await api.deleteProduct(id);
    await load();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#491D0B]">Products CRUD</h2>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="border rounded px-3 py-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required />
        <input className="border rounded px-3 py-2" placeholder="Variety" value={form.variety} onChange={(e) => setForm({ ...form, variety: e.target.value })} />
        <select className="border rounded px-3 py-2" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input className="border rounded px-3 py-2" type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input className="border rounded px-3 py-2" type="number" placeholder="Original Price" value={form.originalPrice} onChange={(e) => setForm({ ...form, originalPrice: e.target.value })} />
        <input className="border rounded px-3 py-2" type="number" step="0.1" placeholder="Rating" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} />
        <input className="border rounded px-3 py-2" type="number" placeholder="Reviews" value={form.reviews} onChange={(e) => setForm({ ...form, reviews: e.target.value })} />
        <input className="border rounded px-3 py-2" type="number" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Images (comma separated urls)" value={form.imagesText} onChange={(e) => setForm({ ...form, imagesText: e.target.value })} />
        <textarea className="border rounded px-3 py-2 md:col-span-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="md:col-span-2 flex gap-2">
          <button className="bg-[#C09A44] text-white px-4 py-2 rounded" type="submit">
            {editingId ? "Update Product" : "Create Product"}
          </button>
          {editingId && (
            <button className="border px-4 py-2 rounded" type="button" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Stock</th>
              <th className="py-2">Category</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.stock}</td>
                <td className="py-2">{item.category?.name || "-"}</td>
                <td className="py-2 space-x-2">
                  <button className="px-2 py-1 border rounded" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                  <button className="px-2 py-1 border rounded text-red-600" onClick={() => onDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
