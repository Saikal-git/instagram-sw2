"use client";
import { useRefreshAccessTokenMutation } from "@/redux/api/refresh";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const [refreshAccessToken] = useRefreshAccessTokenMutation();

  const checkAccessToken = async () => {
    const getLocalStorage = localStorage.getItem("tokens");
    if (!getLocalStorage) return;

    const { accesTokenExpiration, refreshToken } = JSON.parse(getLocalStorage);

    if (accesTokenExpiration <= Date.now()) {
      console.log("Токен истек, обновляем...");

      try {
        const { data } = await refreshAccessToken(refreshToken);
        localStorage.removeItem("tokens");
        localStorage.setItem("tokens", JSON.stringify(data));
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Токен живой");
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, [pathname]);

  return <>{children}</>;
};

export default SessionProvider;
