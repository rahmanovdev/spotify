import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MyMediatek from "./myMediatek/MyMediatek";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.container}>
        <div className={scss.Home}>
          <MyMediatek />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
