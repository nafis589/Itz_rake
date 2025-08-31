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
    <div className="max-w-sm w-full rounded-3xl bg-white/90 backdrop-blur-md p-3 flex items-center gap-3 border border-gray-100 notification-success" style={{boxShadow: 'var(--shadow-brand)'}}>
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
          <span className="text-[15px] font-semibold text-brand-primary truncate">
            {userName}
          </span>
          <span
            className={`${archivo.className} text-[12px] text-brand-muted whitespace-nowrap`}
          >
            {timeAgo}
          </span>
        </div>
        <p
          className={`${archivo.className} text-[13px] text-brand-secondary leading-snug mt-0.5 truncate`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default TraderNotification;
