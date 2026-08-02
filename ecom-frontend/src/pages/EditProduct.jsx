import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleProduct, editProduct } from "../redux/slices/productSlice";

function EditProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    discountPrice: "",
    stock: "",
    image: "",
    isDeal: false,
    isNewArrival: false,
    featured: false,
  });

  useEffect(() => {
    const loadProduct = async () => {
      const product = await dispatch(fetchSingleProduct(id)).unwrap();

      setFormData({
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand || "",
        price: product.price,
        discountPrice: product.discountPrice || "",
        stock: product.stock,
        image: product.image,
        isDeal: product.isDeal || false,
        isNewArrival: product.isNewArrival || false,
        featured: product.featured || false,
      });
    };

    loadProduct();
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        editProduct({
          id,
          productData: formData,
        }),
      ).unwrap();

      alert("Product Updated Successfully!");

      navigate("/admin/products");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="discountPrice"
          placeholder="Discount Price"
          value={formData.discountPrice}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded h-32"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">Select Category</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Headphones">Headphones</option>
          <option value="Smartwatches">Smartwatches</option>
          <option value="Cameras">Cameras</option>
          <option value="Monitors">Monitors</option>
          <option value="Standalone Consoles">Standalone Consoles</option>
        </select>

        <input
          type="text"
          name="brand"
          placeholder="Brand (Apple, Samsung, Sony...)"
          value={formData.brand}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isDeal"
              checked={formData.isDeal}
              onChange={handleChange}
            />
            Deal Product
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isNewArrival"
              checked={formData.isNewArrival}
              onChange={handleChange}
            />
            New Arrival
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Product
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
