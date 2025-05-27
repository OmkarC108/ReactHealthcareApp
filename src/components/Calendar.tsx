import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];
const timeSlots = {
  0: ["10:00", "11:00", "12:00"],
  1: ["08:00", "09:00", "10:00"],
  2: ["12:00", "---", "13:00"],
  3: ["10:00", "11:00", "---"],
  4: ["---", "14:00", "15:00"],
  5: ["12:00", "14:00", "15:00"],
  6: ["09:00", "10:00", "11:00"],
};

const appointments = [
  {
    day: 1,
    time: "09:00-11:00",
    title: "Dentist",
    doctor: "Dr. Cameron Williamson",
    icon: <FontAwesomeIcon icon={faTooth} className="text-white-500" />,
  },
  {
    day: 2,
    time: "11:00-12:00",
    title: "Physiotherapy\nAppointment",
    doctor: "Dr. Kevin Djones",
    icon: (
      <img
        src="/assets/muscle.png"
        alt="Muscle"
        className="w-5 h-5 object-contain"
      />
    ),
  },
];

const Calendar = () => {
  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((day, index) => (
          <div key={day} className="text-center">
            <div className="text-sm text-neutral-600 mb-1">{day}</div>
            <motion.div
              className={clsx(
                "calendar-cell",
                index === 1 && "bg-sky-100 text-secondary font-medium"
              )}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-medium">{dates[index]}</div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-6">
        {days.map((_, dayIndex) => (
          <div
            key={`times-${dayIndex}`}
            className={clsx(
              "flex flex-col gap-0.5 items-center",
              dayIndex === 1 && "bg-sky-50 rounded-md py-1"
            )}
          >
            {timeSlots[dayIndex].map((time, index) => (
              <motion.div
                key={`${dayIndex}-${time}`}
                className={clsx(
                  "calendar-time text-center text-xs",
                  time === "---" && "text-neutral-300",
                  dayIndex === 1 && time === "09:00" && "active",
                  dayIndex === 2 && time === "12:00" && "active bg-secondary"
                )}
                whileHover={time !== "---" ? { scale: 1.05 } : {}}
              >
                {time}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {appointments.map((appointment, index) => (
          <motion.div
            key={index}
            className={clsx(
              "appointment-card shadow-card relative inline-flex flex-col min-w-[200px] max-w-fit",
              index === 0 ? "bg-secondary text-white" : "bg-neutral-100"
            )}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-4 right-4">
              <span className={index === 0 ? "text-white" : "text-gray-500"}>
                {appointment.icon}
              </span>
            </div>
            <div className="pr-8">
              <h4 className="font-medium mb-1 whitespace-pre-line">
                {appointment.title}
              </h4>
              <div className="text-sm mb-1 whitespace-nowrap">
                {appointment.time}
              </div>
              <div
                className={clsx(
                  "text-sm whitespace-nowrap",
                  index === 0 ? "text-white opacity-80" : "text-neutral-500"
                )}
              >
                {appointment.doctor}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
