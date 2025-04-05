import { httpClient } from "../http-client";
import { Product, ProductCategory } from "./product-types";

const productClient = {
  getCategories() {
    return httpClient
      .get<ProductCategory[]>("/products/categories")
      .then((res) => res.data);
  },

  getProducts() {
    return httpClient.get<Product[]>("/products").then((res) => res.data);
  },

  getProductById(id: string | number) {
    return httpClient.get<Product>(`/products/${id}`).then((res) => res.data);
  },

  addNewProduct(data: unknown) {
    return httpClient.post(`/products`, data).then((res) => res.data);
  },

  editProduct(id: number | string, data: unknown) {
    return httpClient.put(`/products/${id}`, data).then((res) => res.data);
  },

  deleteProduct(id: string | number) {
    return httpClient.delete(`/products/${id}`).then((res) => res.data);
  },
};

export default productClient;
