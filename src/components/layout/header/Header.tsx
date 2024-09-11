"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { useGetMeQuery } from "@/redux/api/me";
import SearchTracks from "@/components/shared/SearchTracks";

const Header = () => {
  const { data: session } = useGetMeQuery();
  const [close, setClose] = useState<string>("");
  const [user, setUser] = useState<boolean>(false);

  const handleLogin = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const handleLogout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <FaSpotify />
            </Link>
          </div>
          <div className={scss.block}>
            <div className={scss.home}>
              <GoHome />
            </div>

            <div className={scss.search}>
              <div className={scss.sear}>
                <FiSearch />
              </div>
              <SearchTracks />

              {/* <input
                onChange={(e) => setClose(e.target.value)}
                value={close}
                type="text"
                placeholder="Что хочешь включить?"
              /> */}
              {!close.length ? (
                <div className={scss.search_bl}>
                  <div className={scss.slesh}></div>
                  <div className={scss.file}>
                    <IoFileTrayFullOutline />
                  </div>
                </div>
              ) : (
                <IoCloseOutline
                  onClick={() => setClose("")}
                  className={scss.close}
                />
              )}
            </div>
          </div>
          <div className={scss.bellAuth}>
            <button className={scss.btn}>
              <GoBell />
            </button>

            <div className={scss.auth}>
              {session ? (
                <>
                  <div onClick={() => setUser(true)} className={scss.user}>
                    <h5>
                      {session.display_name.slice(0, 1).toLocaleUpperCase()}
                    </h5>
                  </div>

                  {user ? (
                    <div onClick={() => setUser(false)} className={scss.logout}>
                      <div className={scss.accaunt}>
                        <h2>Аккаунт</h2>
                      </div>
                      <h2>Профиль</h2>
                      <div className={scss.premium}>
                        <h2>Переход на Premium</h2>
                      </div>
                      <div className={scss.setting}>
                        <h2>Настройки</h2>
                        <hr />
                      </div>

                      <h2 onClick={handleLogout}>Выйти</h2>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <button className={scss.login} onClick={handleLogin}>
                    LogIn
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
