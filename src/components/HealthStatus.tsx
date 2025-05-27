import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface HealthStatusProps {
  title: string;
  date: string;
  progress: number;
  color: string;
  icon: string | IconDefinition;
  isImage?: boolean;
  isFontAwesome?: boolean;
  iconColor?: string;
}

const HealthStatus = ({
  title,
  date,
  progress,
  color,
  icon,
  isImage = false,
  isFontAwesome = false,
  iconColor = "text-gray-700",
}: HealthStatusProps) => {
  const renderIcon = () => {
    if (isImage) {
      return (
        <img
          src={icon as string}
          alt={title}
          className="w-6 h-6 object-contain"
        />
      );
    }
    if (isFontAwesome) {
      return (
        <FontAwesomeIcon
          icon={icon as IconDefinition}
          className={`${iconColor} w-5 h-5`}
        />
      );
    }
    return <span>{icon as string}</span>;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg flex items-center justify-center text-xl">
          {renderIcon()}
        </div>
        <h3 className="font-medium text-neutral-800">{title}</h3>
      </div>

      <div className="text-sm text-neutral-500">Date: {date}</div>

      <div className="w-full">
        <div
          className={`health-status-bar bg-white h-2 rounded-full overflow-hidden relative`}
        >
          <motion.div
            className={`absolute top-0 left-0 h-full bg-${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthStatus;
