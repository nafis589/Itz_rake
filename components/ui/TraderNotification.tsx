import React from "react";
import Image from "next/image";

interface NotificationProps {
  avatarUrl?: string;
  userName?: string;
  message?: string;
  timeAgo?: string;
}

const TraderNotification: React.FC<NotificationProps> = ({
  avatarUrl = "/boucle.svg", // Avatar par défaut
  userName = "John Doe",
  message = "Waouh 😍 Rake est un excellent trader, sa formation m’a vraiment aidé !",
  timeAgo = "il y a 5 min",
}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-gray-200">
      {/* Avatar */}
      <Image
        src={avatarUrl}
        alt={userName}
        width={10}
        height={10}
        className="w-10 h-10 rounded-full object-cover border"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-900">
            {userName}
          </span>
          <span className="text-xs text-gray-500">{timeAgo}</span>
        </div>
        <p className="text-sm text-gray-700 leading-snug">{message}</p>
      </div>
    </div>
  );
};

export default TraderNotification;
