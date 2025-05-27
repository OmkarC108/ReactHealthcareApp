import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: string | IconDefinition;
  color: string;
  isFontAwesome?: boolean;
}

const AppointmentCard = ({
  title,
  time,
  icon,
  color,
  isFontAwesome = false,
}: AppointmentCardProps) => {
  return (
    <motion.div
      className="appointment-card shadow-card bg-sky-50"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-neutral-800">{title}</h4>
          <p className="text-sm text-neutral-500">{time}</p>
        </div>
        <div
          className={`${color} w-8 h-8 rounded-lg flex items-center justify-center`}
        >
          {isFontAwesome ? (
            <FontAwesomeIcon
              icon={icon as IconDefinition}
              className="text-red-500"
            />
          ) : (
            <span>{icon as string}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentCard;
