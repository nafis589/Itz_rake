import React from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";

interface NotificationProps {
  avatarUrl?: string;
  userName?: string;
  message?: string;
  timeAgo?: string;
}
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const TraderNotification: React.FC<NotificationProps> = ({
  avatarUrl = "/boucle.svg",
  userName = "John Doe",
  message = "Waouh 😍 Rake est un excellent trader, sa formation m’a vraiment aidé !",
  timeAgo = "il y a 5 min",
}) => {
  return (
    <div className="max-w-sm w-full rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-3 flex items-center gap-3 border border-white/40">
      {/* Avatar */}
      <Image
        src={avatarUrl}
        alt={userName}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
        unoptimized
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <span className="text-[15px] font-semibold text-gray-900 truncate">
            {userName}
          </span>
          <span
            className={`${archivo.className} text-[12px] text-gray-500 whitespace-nowrap`}
          >
            {timeAgo}
          </span>
        </div>
        <p
          className={`${archivo.className} text-[13px] text-gray-800 leading-snug mt-0.5 truncate`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default TraderNotification;
