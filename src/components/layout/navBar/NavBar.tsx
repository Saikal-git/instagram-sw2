import scss from "./NavBar.module.scss";
import Image from "next/image";
import instagramLogo from "../../../assets/image/Instagram Logo.png";
import { useGetMeQuery } from "@/redux/api/auth";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuPlusSquare } from "react-icons/lu";
import { MdFavoriteBorder, MdOutlineExplore } from "react-icons/md";
import { CgInstagram } from "react-icons/cg";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

const NavBar = () => {
  const { data } = useGetMeQuery();
  const navBarIcons = [
    {
      icons: <GoHomeFill />,
      name: "Home",
      href: "/",
    },
    {
      icons: <FiSearch />,
      name: "Search",
      href: "",
    },
    {
      icons: <MdOutlineExplore />,
      name: "Explore",
      href: "",
    },
    {
      icons: <CgInstagram />,
      name: "Reels",
      href: "",
    },
    {
      icons: <BiMessageRoundedDots />,
      name: "Messages",
      href: "",
    },
    {
      icons: <MdFavoriteBorder />,
      name: "Notifications",
      href: "",
    },
    {
      icons: <LuPlusSquare />,
      name: "Create",
      href: "/create",
    },
  ];
  return (
    <div className={scss.NavBar}>
      <div className={scss.content}>
        <Link href={"/"}>
          {" "}
          <Image
            className={scss.instagram}
            src={instagramLogo}
            alt="instagram"
          />
          <span className={scss.insta}>
            <CgInstagram />
          </span>
        </Link>
        <div className={scss.icons}>
          {navBarIcons.map((item, index) => (
            <Link key={index} href={item.href}>
              <span>{item.icons}</span>
              <h1>{item.name}</h1>
            </Link>
          ))}
          <Link className={scss.profile} href={"/profile"}>
            {" "}
            <img src={data?.profile.photo} alt="img" />
            <h1>Profile</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
