import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Button } from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";
import { Card, Typography } from "@material-tailwind/react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
const ViewProduct = () => {
  var ProdStatus = '';
  const TABLE_HEAD = ["ID", "Category Name", "Product Name", "Selling Price", "Image", "Edit", "Status"];
  const [viewProduct, setViewProduct] = useState([]);
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
    axios.get(`/api/view-product`).then(res=>{{
      if(res.data.status===200){
        setViewProduct(res.data.products)
      }
    }})
  },[]);


  return (
    <div className="flex md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-screen">
        <div className="flex justify-between h-24 justify-center items-center px-4 md:px-12 font-sans">
          <h1 className="text-2xl font-semibold font-poppins">VIEW PRODUCTS</h1>
          <div>
            <Link to="/admin/add-category">
            <Button className="flex items-center justify-center bg-matte font-poppins">
              <IoMdAdd className="h-6 w-6 mr-2" />
              Add Products
            </Button>
            </Link>
          </div>
        </div>
        <div className="m-10 shadow-md">
          <Card className="md:96">
            <table className="min-w-max table-auto text-center">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b bg-matte border-blue-gray-100 text-white p-4 text-center "
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal leading-none font-poppins"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {viewProduct.map((item, index) => {
                  const isLast = index === viewProduct.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  if(item.status == '0'){
                    ProdStatus = 'Shown';
                  }else if (item.status == '1'){
                    ProdStatus = "Hidden"
                  }
                  return (
                    <tr key={item.id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.category ? item.category.name : 'Others'}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.selling_price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex justify-center "
                        >
                          <img src={`http://localhost:8000/${item.image}`} alt={item.name} width="50px"/>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Link to={`edit-product/${item.id}`}>
                        <button type="button">
                        <MdEdit className="text-black w-6 h-6"/>
                        </button>
                        </Link>   
                      </td>
                      <td className={classes}>
                        {ProdStatus}
                      </td>
                    </tr>
                  );
                })}
               
              </tbody> 
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct