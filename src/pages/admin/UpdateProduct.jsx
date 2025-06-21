import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateProduct } from "../../store/actions/ProductsAction";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { products } = useSelector((state) => state.productReducer);
  const params = useParams();

  const singleproduct = products?.find((p) => p.id == params.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: singleproduct?.title,
      description: singleproduct?.description,
      price: singleproduct?.price,
      image: singleproduct?.image,
      category: singleproduct?.category,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateProductHandler = async (product) => {
    dispatch(asyncUpdateProduct(params.id, product));
    navigate("/admin/manage-products");
  };

  return (
    <div className="w-full min-h-[70vh]  md:min-h-[80vh] flex items-center md:justify-center">
      <div className="flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <h1 className="text-4xl font-bold md:text-5xl tracking-tight">
          Update product
        </h1>

        <form
          className="flex items-end flex-col gap-4 md:gap-7"
          onSubmit={handleSubmit(UpdateProductHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="title">Product title</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("title", {
                required: "Product title is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              type="text"
              placeholder="Enter product title here"
              id="title"
              name="title"
            />
            {errors.title && (
              <small className="text-red-500">{errors.title.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="price">Product price</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("price", {
                required: "Product price is required",
                min: { value: 1, message: "Price must be positive" },
                validate: (value) =>
                  Number.isInteger(Number(value)) ||
                  "Only whole numbers allowed",
              })}
              type="text"
              placeholder="Enter product price here"
              id="price"
              name="price"
            />
            {errors.price && (
              <small className="text-red-500">{errors.price.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="description">Product description</label>
            <textarea
              className="bg-[#ebe8e1] p-2 outline-0 resize-none"
              {...register("description", {
                required: "Product description is required",
                minLength: { value: 10, message: "Minimum 10 characters" },
              })}
              type="text"
              placeholder="Enter product description here"
              id="description"
              name="description"
            />
            {errors.description && (
              <small className="text-red-500">
                {errors.description.message}
              </small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="category">Product category</label>
            <select
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("category")}
              type="text"
              id="category"
              name="category"
            >
              <option value="men's clothing">Men's Clothing</option>
              <option value="woman's clothing">Woman's Clothing</option>
              <option value="kid's clothing">Kid's Clothing</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="image">Product image</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("image", {
                required: "Product image URL is required",
              })}
              type="url"
              placeholder="Enter product's image url"
              id="image"
              name="image"
            />
            {errors.image && (
              <small className="text-red-500">{errors.image.message}</small>
            )}
          </div>

          <button
            className="px-5 py-2 rounded-lg bg-black text-white hover:scale-95 duration-200"
            type="submit"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
