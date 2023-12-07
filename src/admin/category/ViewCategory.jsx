import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Button } from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";
import { Card, Typography } from "@material-tailwind/react";
import axios from "../../api/axios";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useStateContext } from "../../context/ContextProvider";
const ViewCategory = () => {
  const TABLE_HEAD = ["ID", "Name", "Slug", "Status", "Edit", "Delete"];
  const [categoryList, setCategoryList] = useState([]);
  
  const navigate = useNavigate();
  const { user, getUser,setUser, userToken } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      await getUser(setUser);
    };

    if (user?.email === "admin@admin.com" && !userToken) {
      navigate('/login');
    } else {
      navigate('/admin/view-category');
    }

    fetchData();
  }, [setUser, user?.email,userToken, navigate]);
  useEffect(() => {
    axios.get(`/api/view-category`).then(res=>{{
      if(res.status===200){
        setCategoryList(res.data.category)
      }
    }})
  },[]);
  const handleEditClick = (e, id) => {
    e.preventDefault();
    navigate(`edit-category/${id}`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`api/delete-category/${id}`).then(res=> {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Cancelled Successfully",
          icon: "error"
        });
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
          <h1 className="text-2xl font-semibold">VIEW CATEGORIES</h1>
          <div>
            <Link to="/admin/add-category">
            <Button className="flex items-center justify-center bg-matte">
              <IoMdAdd className="h-6 w-6 mr-2" />
              Add Category
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
                      className="border-b bg-matte border-blue-gray-100 text-white p-4 text-center"
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categoryList.map(( item , index) => {
                  const isLast = index === categoryList.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {item.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {item.slug}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.status}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <button type="button" onClick={(e) => handleEditClick(e, item.id)}>
                        <MdEdit className="text-black w-6 h-6"/>
                        </button>       
                      </td>
                      <td className={classes}>
                      <IconButton className="bg-red-600">
                        <MdDelete className="w-4 h-4" onClick={(e) => handleDelete(e, item.id)}/>
                      </IconButton>
                      
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
};
export default ViewCategory;
