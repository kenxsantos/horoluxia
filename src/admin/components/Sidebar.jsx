import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";
import { TbMenuOrder } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineViewHeadline } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useStateContext } from "../../context/ContextProvider";
// import { useStateContext } from '../../context/ContextProvider';
// import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  // const {userToken} = useStateContext();
  // const navigate = useNavigate();
  // if (!userToken) {
  //   navigate("/login");
  // }else{
  //   navigate("/admin/*")
  // }
  const { logout } = useStateContext();
  const menus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: AiOutlineDashboard },
    { name: "CATEGORY", link: "", icon: BiCategoryAlt, margin: true, hr: true },
    { name: "Add Category", link: "/admin/add-category", icon: IoMdAdd },
    {
      name: "View Category",
      link: "/admin/view-category",
      icon: MdOutlineViewHeadline,
    },
    { name: "PRODUCTS", link: "", icon: FaList, margin: true, hr: true },
    { name: "Add Products", link: "/admin/add-product", icon: IoMdAdd },
    {
      name: "View Products",
      link: "/admin/view-product",
      icon: MdOutlineViewHeadline,
    },
    { name: "ORDERS", link: "/admin/view-order", icon: TbMenuOrder },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 h-full">
      <div
        className={`bg-matte min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                (menu?.margin && "mt-5",
                menu?.hr && "pt-8 border-t-2 rounded-none hover:bg-transparent")
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } z-10 text-white absolute left-48 bg-matte font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <Button
            type="submit"
            className="-px-2 flex items-center justify-start gap-4 text-sm text-left bg-transparent sentence"
            onClick={logout}
          >
            <CiLogout className="h-6 w-6 text-center" />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
