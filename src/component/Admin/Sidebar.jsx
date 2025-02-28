import { LayoutDashboard, User } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/links";

function Sidebar() {
  return (
    <div className="bg-pink-600 w-48 text-amber-50">
      Sidebar
      <div className="flex flex-col items-center my-12 gap-2">
        {/*Profile */}
        <User size={48} />
        <p>Profile</p>
      </div>
      {/* Navlinks*/}
      {sidebarLink.map((item,index) => {
        return (
          <div key={index}>
            <Link
              className="flex py-2 px-4 gap-2 hover:bg-pink-800 hover:duration-300"
              to={item.link}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
