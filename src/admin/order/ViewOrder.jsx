import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Card, Typography } from "@material-tailwind/react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { ContextProvider } from "../../context/ContextProvider";
const ViewOrder = () => {
  const TABLE_HEAD = [
    "ID",
    "First Name",
    "Last Name",
    "Contact",
    "Email",
    "Amount",
    "Payment",
  ];
  const [viewOrder, setViewOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Orders";
    axios.get(`/api/view-order`).then((res) => {
      {
        if (res.data.status === 200) {
          setViewOrder(res.data.orders);
          console.log(res.data.orders);
        }
      }
    });
  }, []);

  return (
    <div className="flex md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-screen">
        <div className="flex justify-between h-24 justify-center items-center px-4 md:px-12 font-sans">
          <h1 className="text-2xl font-semibold font-poppins">VIEW ORDERS</h1>
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
                {viewOrder.map((item, index) => {
                  const isLast = index === viewOrder.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={item.index}>
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
                          {item.firstname}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.lastname}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.contact}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex justify-center "
                        >
                          {item.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex justify-center "
                        >
                          {item.total_amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex justify-center "
                        >
                          {item.payment_mode}
                        </Typography>
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

export default ViewOrder;
