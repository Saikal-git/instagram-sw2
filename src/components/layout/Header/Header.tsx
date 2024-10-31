"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { useGetMeQuery } from "@/redux/api/auth";
import instagramLogo from "../../../assets/image/Instagram Logo.png";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import { GoSearch } from "react-icons/go";
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href={"/"}>
            {" "}
            <Image src={instagramLogo} alt="img" />
          </Link>
          <div className={scss.search}>
            <div className={scss.block_input}>
              <input type="text" placeholder="search" />
              <span>
                <GoSearch />
              </span>
            </div>
          </div>
          <div className={scss.contact}>
            <Link href="/sign-in">Вxод</Link>
            <Link href="/sign-up">Регистрация</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
