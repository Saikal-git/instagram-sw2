"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { usePathname } from "next/navigation";
import NavBar from "./navBar/NavBar";

interface ILayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/sign-in":
      case "/sign-up":
        setIsAuthPage(true);
        break;
      default:
        setIsAuthPage(false);
        break;
    }
  }, [pathname]);
  return (
    <div className={scss.LayoutSite}>
      <div className={scss.block1}>
        <NavBar />
      </div>
      {!isAuthPage && <Header />}
      <div className={scss.block2}>{children}</div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default LayoutSite;
