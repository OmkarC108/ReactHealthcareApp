import React from "react";
import {
  RiNotification3Line,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiAddLine,
  RiSearch2Line,
} from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faNotesMedical,
  faEye,
  faTooth,
  faBone,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import BodyVisualization from "../components/BodyVisualization";
import HealthStatus from "../components/HealthStatus";
import Calendar from "../components/Calendar";
import AppointmentCard from "../components/AppointmentCard";
import ActivityChart from "../components/ActivityChart";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="bg-white rounded-2xl shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Sidebar */}
          <div className="lg:col-span-2 border-r border-gray-100">
            <Sidebar />
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-5 p-4 lg:p-6 bg-sky-100">
            {/* Top Bar with Search and Bell */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="flex-1 relative max-w-3xl">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary bg-white"
                  />
                </div>
                <div className="relative flex-shrink-0">
                  <RiNotification3Line className="text-2xl text-neutral-700 cursor-pointer" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Dashboard Heading and Dropdown Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-neutral-800 mb-4 sm:mb-0">
                Dashboard
              </h1>
              <div className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">
                  This Week
                </span>
                <RiArrowLeftSLine
                  className="text-gray-500 -rotate-90"
                  size={20}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Body Visualization */}
              <div className="md:col-span-12 lg:col-span-6">
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm h-[400px] lg:h-[500px] flex flex-col">
                  <BodyVisualization />
                </div>
              </div>

              {/* Health Status Cards */}
              <div className="md:col-span-12 lg:col-span-6">
                <div className="relative">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
                      <HealthStatus
                        title="Lungs"
                        date="26 Oct 2021"
                        progress={82}
                        color="accent-purple"
                        icon="/dist/assets/lungs.png"
                        isImage={true}
                      />
                    </div>

                    <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
                      <HealthStatus
                        title="Teeth"
                        date="26 Oct 2021"
                        progress={65}
                        color="primary"
                        icon={faTooth}
                        isFontAwesome={true}
                        iconColor="text-gray-500"
                      />
                    </div>

                    <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
                      <HealthStatus
                        title="Bone"
                        date="26 Oct 2021"
                        progress={45}
                        color="accent-orange"
                        icon={faBone}
                        isFontAwesome={true}
                        iconColor="text-gray-500"
                      />
                    </div>

                    <div className="flex justify-end px-6">
                      <button className="flex items-center gap-1 text-secondary text-sm">
                        Details <RiArrowRightSLine />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Chart */}
              <div className="md:col-span-12">
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <h3 className="font-medium text-neutral-800">Activity</h3>
                    <div className="text-sm text-neutral-500">
                      3 appointment on this week
                    </div>
                  </div>
                  <ActivityChart />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 p-4 lg:p-6 border-l border-gray-100">
            {/* Top Icons */}
            <div className="flex items-center justify-end gap-2 mb-6">
              <motion.div
                className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-white"
                whileHover={{ scale: 1.05 }}
              >
                <FontAwesomeIcon icon={faUserDoctor} />
              </motion.div>
              <motion.button
                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white"
                whileHover={{ scale: 1.05 }}
              >
                <RiAddLine />
              </motion.button>
            </div>

            {/* Calendar Section */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <h2 className="font-medium text-lg">October 2021</h2>
                <div className="flex items-center gap-2">
                  <button className="text-neutral-400 hover:text-secondary">
                    <RiArrowLeftSLine />
                  </button>
                  <button className="text-neutral-400 hover:text-secondary">
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>

              <Calendar />
            </div>

            {/* Upcoming Schedule Section */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
              <div className="mt-0">
                <h3 className="font-medium text-lg mb-3">
                  The Upcoming Schedule
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-neutral-500 mb-2">On Thursday</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AppointmentCard
                        title="Health checkup complete"
                        time="11:00 AM"
                        icon={faNotesMedical}
                        color="bg-secondary bg-opacity-10"
                        isFontAwesome={true}
                      />
                      <AppointmentCard
                        title="Ophthalmologist"
                        time="14:00 PM"
                        icon={faEye}
                        color="bg-neutral-200"
                        isFontAwesome={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-neutral-500 mb-2">On Saturday</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AppointmentCard
                        title="Cardiologist"
                        time="12:00 AM"
                        icon={faHeart}
                        color="bg-accent bg-opacity-10"
                        isFontAwesome={true}
                      />
                      <AppointmentCard
                        title="Neurologist"
                        time="16:00 PM"
                        icon={faUserDoctor}
                        color="bg-neutral-200"
                        isFontAwesome={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
