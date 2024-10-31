"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import SessionProvider from "@/providers/SessionProvider";
import { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <SessionProvider>{children}</SessionProvider>
    </ReduxProvider>
  );
};

export default LayoutClient;
