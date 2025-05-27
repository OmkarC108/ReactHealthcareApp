import React from "react";
import { motion } from "framer-motion";
import {
  RiDashboardLine,
  RiHistoryLine,
  RiCalendarLine,
  RiUserHeartLine,
  RiBarChartBoxLine,
  RiMessage3Line,
  RiCustomerService2Line,
  RiSettings5Line,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="h-full py-8 px-4 flex flex-col">
      <div className="mb-10 ml-2">
        <h1 className="text-xl font-bold">
          <span className="text-primary">Health</span>care.
        </h1>
      </div>

      <div className="text-sm font-medium text-neutral-400 mb-3 ml-2">
        General
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <motion.a
              href="#"
              className="nav-item active"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiDashboardLine className="text-xl" /> Dashboard
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiHistoryLine className="text-xl" /> History
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiCalendarLine className="text-xl" /> Calendar
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiUserHeartLine className="text-xl" /> Appointments
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiBarChartBoxLine className="text-xl" /> Statistics
            </motion.a>
          </li>
        </ul>

        <div className="text-sm font-medium text-neutral-400 mb-3 ml-2 mt-8">
          Tools
        </div>
        <ul className="space-y-2">
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiMessage3Line className="text-xl" /> Chat
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className="nav-item"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RiCustomerService2Line className="text-xl" /> Support
            </motion.a>
          </li>
        </ul>

        <div className="mt-16">
          <motion.a
            href="#"
            className="nav-item"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <RiSettings5Line className="text-xl" /> Setting
          </motion.a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
