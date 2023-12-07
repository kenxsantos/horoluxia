import React from "react";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../api/axios";
const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const [productInput, setProductInput] = useState({
    category_id: "",
  });

  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategoryList(res.data.category);
      }
    });
  }, []);
  return (
    <select
      label="Select Category"
      name="category_id"
      onChange={handleInput}
      value={productInput.category_id}
      className="rounded-md w-full border-none text-gray-500 appearance-none focus:border-none focus:outline-none"
    >
      <option value="Select Category" className="mb-2">
        Select Category
      </option>
      {categoryList.map((item) => {
        return (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Categories;
