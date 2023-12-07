import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
const AddCategory = () => {
  const navigate = useNavigate();
  const { user, getUser,setUser, userToken } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      await getUser(setUser);
    };

    if (user?.email === "admin@admin.com" && !userToken) {
      navigate('/login');
    } else {
      navigate('/admin/add-category');
    }

    fetchData();
  }, [setUser, user?.email, navigate]);
  const [allcheckbox, setCheckbox] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [error_list, setErrors] = useState([]);
  const [categoryInput, setCategory] = useState({
    slug: "",
    name: "",
    description: "",
    status: "",
    meta_title: "",
    meta_keyword: "",
    meta_description: "",
  });

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...categoryInput, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setProductImage({ banner: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", categoryInput.name);
    formData.append("slug", categoryInput.slug);
    formData.append("description", categoryInput.description);
    formData.append("banner", productImage.banner);
    formData.append("meta_title", categoryInput.meta_title);
    formData.append("meta_keyword", categoryInput.meta_keyword);
    formData.append("meta_description", categoryInput.meta_description);
    formData.append("status", allcheckbox.status ? "1" : "0");
    axios.post(`/api/store-category`, formData).then((res) => {
      if (res.data.status === 200) {
        new Swal({
          title: "Success",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setCategory({
          slug: "",
          name: "",
          description: "",
          status: "",
          meta_title: "",
          meta_keywords: "",
          meta_description: "",
        });
        setErrors([]);
      }else if (res.data.status === 400) {
        new Swal({
          title: "Error",
          text: "Please fill all required fields",
          icon: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
        setErrors(res.data.errors);
      }
    });
  };
  const handleCheckbox = (e) =>{
    e.persist();
    setCheckbox({ ...allcheckbox, [e.target.name]:e.target.checked});
  }
  return (
    <div className="flex md:flex-row w-screen">
      <div>
        <Sidebar />
      </div>
      <div className="m-10 shadow-md">
        <div className="text-center flex justify-center">
          <h2 className="text-4xl font-semibold font-sans">ADD CATEGORY</h2>
        </div>
        <form
          className="bg-white rounded pt-6 pb-8 mb-4 md:flex-row w-full px-24"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col gap-4">
              <div className="w-96 relative">
                <Input
                  label="Slug"
                  name="slug"
                  onChange={handleInput}
                  value={categoryInput.slug}
                  icon={<LuAsterisk className="text-red-500" />}
                />
                <span className="text-red-500">{error_list.slug}</span>
              </div>
              <div className="w-96">
                <Input
                  label="Name"
                  name="name"
                  onChange={handleInput}
                  value={categoryInput.name}
                  icon={<LuAsterisk className="text-red-500" />}
                />
                <span className="text-red-500">{error_list.name}</span>
              </div>
              <div className="w-96">
                <Textarea
                  label="Description"
                  name="description"
                  onChange={handleInput}
                  value={categoryInput.description}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-96">
                <Input
                  label="Meta Title"
                  name="meta_title"
                  onChange={handleInput}
                  value={categoryInput.meta_title}
                  icon={<LuAsterisk className="text-red-500" />}
                />
                <span className="text-red-500">{error_list.meta_title}</span>
              </div>
              <div className="w-96">
                <Input
                  label="Meta Keyword"
                  name="meta_keyword"
                  onChange={handleInput}
                  value={categoryInput.meta_keyword}
                />
              </div>
              <div className="w-96">
                <Textarea
                  label="Description"
                  name="meta_description"
                  onChange={handleInput}
                  value={categoryInput.meta_description || ""}
                />
              </div>
            </div>
            <div className="w-96">
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg[#28282B] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                name="banner"
                onChange={handleImage}
                icon={<LuAsterisk className="text-red-500" />}
              />
              <span className="text-red-500">{error_list.banner}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start  md:flex-row">
            <div className="w-96">
              <Checkbox
                label="Show"
                name="status"
                onChange={handleCheckbox}
                          defaultChecked={allcheckbox.status === 1 ? true : false}
              />
            </div>
            <div className="w-full">
              <Button fullWidth type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
