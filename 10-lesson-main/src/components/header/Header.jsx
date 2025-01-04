import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="max-w-[600px] px-4 m-auto">
          <header>
            <ul className="flex justify-between py-3">
              <li>
                <NavLink
                  to="/create"
                  className="text-black font-medium text-base cursor-pointer"
                >
                  Create-user
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink
                  to="/users"
                  className="text-black font-medium text-base cursor-pointer"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
