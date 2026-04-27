const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5003/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    let message = "Request failed";
    try {
      const data = await response.json();
      message = data.message || message;
    } catch {
      // Keep fallback message when no JSON body is returned.
    }
    throw new Error(message);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  getProducts: () => request("/products"),
  getProductById: (id) => request(`/products/${id}`),
  createProduct: (payload) =>
    request("/products", { method: "POST", body: JSON.stringify(payload) }),
  updateProduct: (id, payload) =>
    request(`/products/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteProduct: (id) => request(`/products/${id}`, { method: "DELETE" }),

  getCategories: () => request("/category"),
  createCategory: (payload) =>
    request("/category", { method: "POST", body: JSON.stringify(payload) }),
  updateCategory: (id, payload) =>
    request(`/category/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteCategory: (id) => request(`/category/${id}`, { method: "DELETE" }),

  getOrders: () => request("/order"),
  getOrderById: (id) => request(`/order/${id}`),
  createOrder: (payload) =>
    request("/order", { method: "POST", body: JSON.stringify(payload) }),
  updateOrder: (id, payload) =>
    request(`/order/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteOrder: (id) => request(`/order/${id}`, { method: "DELETE" }),

  getUsers: () => request("/user"),
  createUser: (payload) =>
    request("/user", { method: "POST", body: JSON.stringify(payload) }),
  updateUser: (email, payload) =>
    request(`/user/${email}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteUser: (id) => request(`/user/${id}`, { method: "DELETE" }),
};
