"use cliet";
import { BiMessageRoundedDots } from "react-icons/bi";
import scss from "./Footer.module.scss";
import { CgInstagram } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { LuPlusSquare } from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/api/auth";

const Footer = () => {
  const { data } = useGetMeQuery();
  const navBarIcons = [
    {
      icons: <GoHomeFill />,

      href: "/",
    },

    {
      icons: <MdOutlineExplore />,
      href: "",
    },
    {
      icons: <CgInstagram />,
      href: "/create",
    },
    {
      icons: <LuPlusSquare />,
      href: "",
    },
    {
      icons: <BiMessageRoundedDots />,
      href: "",
    },
  ];
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          {navBarIcons.map((el,idx) => (
            <Link href={el.href} key={idx}>
              <span>{el.icons}</span>
            </Link>
          ))}
          <Link className={scss.profile} href={"/profile"}>
            {" "}
            <img src={data?.profile.photo} alt="img" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
