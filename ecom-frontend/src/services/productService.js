import axiosInstance from "../api/axiosInstance";

const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data.products;
};

const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data.product;
};

const addProduct = async (productData, token) => {
  const response = await axiosInstance.post(
    "/products",
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.product;
};

const updateProduct = async (id, productData, token) => {
  const response = await axiosInstance.put(
    `/products/${id}`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.product;
};

const deleteProduct = async (id, token) => {
  const response = await axiosInstance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const productService = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};


export default productService;