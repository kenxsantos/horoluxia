import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import { LuAsterisk } from "react-icons/lu";
const EditCategory = () => {
  const navigate = useNavigate();
  const [allcheckbox, setCheckbox] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [categoryInput, setCategory] = useState({
    slug: "",
    name: "",
    description: "",
    status: "",
    meta_title: "",
    meta_keyword: "",
    meta_description: "",
  });
  const [error, setError] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/view-category/edit-category/${id}`).then((res) => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
        console.log(categoryInput);
      } else if (res.data.status === 404) {
        new Swal({
          title: "Error",
          text: res.data.message,
          icon: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/view-category");
      }
    });
  }, [id, navigate]);

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...categoryInput, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setProductImage({ banner: e.target.files[0] });
  };
  const handleUpdate = (e) => {
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
    axios
      .post(`/api/view-category/update-category/${id}`, formData)
      .then((res) => {
        if (res.data.status === 200) {
          // setCategory(res.data.category);
          new Swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin/view-category");
          setError([]);
        } else if (res.data.status === 422) {
          new Swal({
            title: "Please fill all required fields",
            text: "",
            icon: "Error",
            showConfirmButton: false,
            timer: 1500,
          });
          setError(res.data.errors);
        } else if (res.data.status === 404) {
          new Swal({
            title: "Error",
            text: res.data.message,
            icon: "Error",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin/view-category");
        }
      },[id, navigate]);
  };
  const handleCheckbox = (e) => {
    e.persist();
    setCheckbox({ ...allcheckbox, [e.target.name]: e.target.checked });
  };
  return (
    <div className="flex md:flex-row w-screen">
      <div>
        <Sidebar />
      </div>
      <div className="m-10 shadow-md">
        <div className="flex justify-between h-24 justify-center items-center px-4 md:px-12 font-sans">
          <h1 className="text-2xl font-semibold">EDIT CATEGORY</h1>
          <div>
            <Link to="/admin/view-category">
              <Button className="flex items-center justify-center bg-matte">
                <IoMdArrowRoundBack className="h-6 w-6 mr-2" />
                BACK
              </Button>
            </Link>
          </div>
        </div>
        <form
          className="bg-white rounded pt-6 pb-8 mb-4 md:flex-row w-full px-24"
          onSubmit={handleUpdate}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col gap-4">
              <div className="w-96">
                <Input
                  label="Slug"
                  name="slug"
                  onChange={handleInput}
                  value={categoryInput.slug}
                />
                <span>{error.slug}</span>
              </div>
              <div className="w-96">
                <Input
                  label="Name"
                  name="name"
                  onChange={handleInput}
                  value={categoryInput.name}
                />
                <span>{error.name}</span>
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
                />
                <span>{error.meta_title}</span>
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
                  value={categoryInput.meta_description}
                />
              </div>
              <div className="w-96">
              <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg[#28282B] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                          name="banner"
                          onChange={handleImage}
                          icon={<LuAsterisk className="text-red-500"/>}
                        />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start  md:flex-row">
            <div className="w-96">
              <Checkbox
                label="Status"
                name="status"
                onChange={handleCheckbox}
                defaultChecked={allcheckbox.featured === 1 ? true : false}
              />
            </div>
            <div className="w-full">
              <Button fullWidth type="submit">
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
