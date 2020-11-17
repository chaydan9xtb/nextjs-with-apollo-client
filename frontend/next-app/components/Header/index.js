import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="container">
      <div className="py-4 flex items-center">
        <div className="logo w-1/12">
          <img src="/images/header/logo.png"></img>
        </div>
        <div className={`${styles.input_search} w-5/12`}>
          <input
            type="text"
            placeholder="Search for anything"
            className={`${styles.text_search} w-full rounded-3xl h-8 px-4`}
          ></input>
        </div>
        <div className="w-1/2 text-center">
          <Link href="/register">
            <a
              className={`${
                pathname === "/register" ? styles.active : ""
              } mr-8`}
            >
              Sign up
            </a>
          </Link>
          <Link href="/login">
            <a className={`${pathname === "/login" ? styles.active : ""} mr-8`}>
              Login
            </a>
          </Link>
          <span className="mr-12">Cart</span>
          <span className="mr-12 py-2 px-8 border border-red-600 rounded-3xl text-red-600">
            Sell
          </span>
        </div>
      </div>
      <div className="py-6">
        <Link href="/">
          <a
            className={`${styles.text_menu} ${
              pathname === "/" ? styles.active : ""
            } mr-8`}
          >
            Home
          </a>
        </Link>
        <Link href="/women">
          <a
            className={`${styles.text_menu} ${
              pathname === "/women" ? styles.active : ""
            } mr-8`}
          >
            Women
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Men
          </a>
        </Link>
        <Link href="/Men">
          <a
            className={`${styles.text_menu} ${
              pathname === "/Men" ? styles.active : ""
            } mr-8`}
          >
            Men
          </a>
        </Link>
        <Link href="/Kids">
          <a
            className={`${styles.text_menu} ${
              pathname === "/Kids" ? styles.active : ""
            } mr-8`}
          >
            Kids
          </a>
        </Link>
        <Link href="/Games-toys">
          <a
            className={`${styles.text_menu} ${
              pathname === "/Game" ? styles.active : ""
            } mr-8`}
          >
            Games & toys
          </a>
        </Link>
        <Link href="/Sports">
          <a
            className={`${styles.text_menu} ${
              pathname === "/Sports" ? styles.active : ""
            } mr-8`}
          >
            Sports & outdoor
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Electronics
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Vehicles
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Office & stationaries
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Music & Arts
          </a>
        </Link>
        <Link href="/beauty">
          <a
            className={`${styles.text_menu} ${
              pathname === "/beauty" ? styles.active : ""
            } mr-8`}
          >
            Others
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
