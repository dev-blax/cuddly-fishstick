import { AdminSidebar } from "./AdminSidebar";
import "react-quill/dist/quill.snow.css";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className=" bg-gray-200 flex ">
      <AdminSidebar />

      <div className=" px-5 ">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminHome;
