import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "../../api/axios";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Tabs } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiContactsFill } from "react-icons/ri";
import { GrFormViewHide } from "react-icons/gr";
import {
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { MdError } from "react-icons/md";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const AddProduct = () => {
  const [error_list, setErrors] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { user, getUser,setUser } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      await getUser(setUser);
    };

    if (user?.email === "admin@admin.com") {
      navigate('admin/*');
    } else {
      navigate('/login');
    }

    fetchData();
  }, [setUser, user?.email, navigate]);

  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategoryList(res.data.category);
      }
    });
  }, []);

  const [productInput, setProductInput] = useState({
    category_id: "",
    slug: "",
    name: "",
    description: "",

    meta_title: "",
    meta_keyword: "",
    meta_description: "",
    selling_price: "",
    original_price: "",
    brand: "",
    quantity: "",
    featured: "",
    popular: "",
    status: "",
  });

  const handleInput = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProductImage({ image: e.target.files[0] });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", productImage.image);
    formData.append("category_id", productInput.category_id);
    formData.append("name", productInput.name);
    formData.append("slug", productInput.slug);
    formData.append("description", productInput.description);

    formData.append("meta_title", productInput.meta_title);
    formData.append("meta_keyword", productInput.meta_keyword);
    formData.append("meta_description", productInput.meta_description);

    formData.append("selling_price", productInput.selling_price);
    formData.append("original_price", productInput.original_price);
    formData.append("brand", productInput.brand);
    formData.append("quantity", productInput.quantity);
    formData.append("featured", productInput.featured);
    formData.append("status", productInput.status);
    formData.append("popular", productInput.popular);

    axios.post(`/api/store-product`, formData).then(res => {
      if (res.data.status === 200) {
        new Swal({
          title: "Success",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setProductInput({...productInput,
          category_id: "",
          slug: "",
          name: "",
          description: "",
          meta_title: "",
          meta_keyword: "",
          meta_description: "",
          selling_price: "",
          original_price: "",
          brand: "",
          quantity: "",
          featured: "",
          popular: "",
          status: "",
        });
        setErrors([]);
      } else if (res.data.status === 422) {
        new Swal({
          title: "Error",
          text: "Please fill all required fields",
          icon: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
        setMessage('Please fill all required fields');
        setErrors(res.data.errors);
      }
    });
  };
  return (
    <div className="flex md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-screen">
        <div className="flex justify-between h-24 justify-center items-center px-4 md:px-12 font-sans">
          <h1 className="text-2xl font-semibold">ADD PRODUCTS</h1>
          <div>
            <Link to="/admin/view-product">
              <Button className="flex items-center justify-center bg-matte">
                <GrFormViewHide className="h-6 w-6 mr-2" />
                View Products
              </Button>
            </Link>
          </div>
        </div>
        <div className="m-10 shadow-md">
          <div className="flex flex-wrap">
            <div className="w-full">
              {message && (
                 <div className="flex justify-center bg-red-500 p-2 text-white font-semibold text-center text-lg font-sans mb-2">
                    <MdError size={25} className="mr-2" />
                      {message}
                  </div>
              )}
              <form action="" onSubmit={handleSubmitProduct}>
                <Tabs
                  aria-label="Full width tabs"
                  style="fullWidth"
                  className=""
                >
                  <Tabs.Item active title="Home" icon={FaHome}>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <div className="flex flex-col gap-4">
                        <div className="w-96">
                          <select
                            label="Select Category"
                            name="category_id"
                            onChange={handleInput}
                            value={productInput.category_id} 
                            
                            className="rounded-md w-full border-gray-300 text-gray-500 appearance-none focus:border-black"           
                          >
                            <option value="Select Category" className="mb-2">Select Category</option>
                            {categoryList.map((item) => {
                              return (
                                <option value={item.id} key={item.id} >
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                          <span className="text-red-500">{error_list.category_id}</span>
                        </div>
                        <div className="w-96 grid">
                          <Input
                            label="Slug"
                            name="slug"
                            onChange={handleInput}
                            value={productInput.slug}
                            icon={<LuAsterisk className="text-red-500" />}
                          />
                          <span  className="text-red-500">{error_list.slug}</span>
                        </div>
                        <div className="w-96">
                          <Input
                            label="Name"
                            name="name"
                            onChange={handleInput}
                            value={productInput.name}
                            icon={<LuAsterisk className="text-red-500"/>}
                          />
                          <span className="text-red-500">{error_list.name}</span>
                        </div>
                        <div className="w-96">
                          <Textarea
                            label="Description"
                            name="description"
                            onChange={handleInput}
                            value={productInput.description}
                          />
                        </div>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title="SEO Tags" icon={CgProfile}>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <div className="flex flex-col gap-4">
                        <div className="w-96">
                          <Input
                            label="Meta Title"
                            name="meta_title"
                            onChange={handleInput}
                            value={productInput.meta_title}
                            icon={<LuAsterisk className="text-red-500"/>}
                          />
                          <span className="text-red-500">{error_list.meta_title}</span>
                        </div>
                        <div className="w-96">
                          <Input
                            label="Meta Keyword"
                            name="meta_keyword"
                            onChange={handleInput}
                            value={productInput.meta_keyword}
                          />
                        </div>
                        <div className="w-96">
                          <Textarea
                            label="Meta Description"
                            name="meta_description"
                            onChange={handleInput}
                            value={productInput.meta_description}
                          />
                        </div>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title="Other Details" icon={RiContactsFill}>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Input
                          label="Selling Price"
                          name="selling_price"
                          onChange={handleInput}
                          value={productInput.selling_price}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
                        <span className="text-red-500">{error_list.selling_price}</span>
                      </div>
                      <div>
                        <Input
                          label="Brand"
                          name="brand"
                          onChange={handleInput}
                          value={productInput.brand}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
                        <span className="text-red-500">{error_list.brand}</span>
                      </div>
                      <div>
                        <Input
                          label="Quantity"
                          name="quantity"
                          onChange={handleInput}
                          value={productInput.quantity}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
                        <span className="text-red-500">{error_list.quantity}</span>
                      </div>
                      <div>
                        <Input
                          label="Original Price"
                          name="original_price"
                          onChange={handleInput}
                          value={productInput.original_price}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
                        <span className="text-red-500">{error_list.original_price}</span>
                      </div>

                      <div className="col-span-2">
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg[#28282B] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                          name="image"
                          onChange={handleImage}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
                        <span className="text-red-500">{error_list.image}</span>
                      </div>
                      <div>
                        <Checkbox
                          label="Featured"
                          name="featured"
                          onChange={handleInput}
                          value={productInput.featured}
                        />
                      </div>
                      <div>
                        <Checkbox
                          label="Popular"
                          name="popular"
                          onChange={handleInput}
                          value={productInput.popular}
                        />
                      </div>
                      <div>
                        <Checkbox
                          label="Status"
                          name="status"
                          onChange={handleInput}
                          value={productInput.status}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-4 justify-center">
                        <div className="w-96 text-center">
                          <Button fullWidth type="submit">
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
