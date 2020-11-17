import style from "./style.module.css";
import Link from "next/link";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const path = "";
  return (
    <div>
      <Link href="/">
        <a className={`${path === "/" ? style.active : ""} mr-4`}>Home</a>
      </Link>
      <Link href="/login">
        <a className={`${path === "/login" ? style.active : ""} mr-4`}>Login</a>
      </Link>
      <Link href="/register">
        <a className={`${path === "/register" ? style.active : ""} mr-4`}>
          Register
        </a>
      </Link>
      <span
        onClick={() => {
          router.push("/ddd");
        }}
      >
        dddd
      </span>
    </div>
  );
};

export default Header;
