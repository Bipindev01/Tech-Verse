import axiosInstance from "../api/axiosInstance";

const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data.products;
};

const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

const productService = {
  getProducts,
  getProductById
};


export default productService;