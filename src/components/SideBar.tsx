import styles from "@src/stylesheet/Sidebar.module.scss";
import { useEffect, useState } from "react";
import * as IconlyPack from "react-iconly";
import { useLocation, useNavigate } from "react-router-dom";
interface SideBarProps {
  children: JSX.Element;
}
const SideBar = ({ children }: SideBarProps) => {
  let { pathname } = useLocation();
  const [selected, setSelected] = useState<string>("/dashboard");
  let navigate = useNavigate();
  useEffect(() => {
    setSelected(pathname);
  }, []);
  const handleClassName = (path: string): CSSModuleClasses[string] => {
    if (pathname.includes(path)) {
      return styles.selectedSidebarBarMenubutton;
    }
    return styles.sidebarBarMenubutton;
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBar}>
        <img src="/images/img-logo.svg" alt="" className={styles.logoImg} />
        <div className={styles.sidebarBarMenu}>
          <button
            className={handleClassName("/dashboard")}
            onClick={() => navigate("/dashboard")}
          >
            <IconlyPack.Category set="light" />
            Dashboard
          </button>
          <button
            className={handleClassName("/buy")}
            onClick={() => navigate("/buy")}
          >
            <IconlyPack.Plus set="light" />
            Buy HLT
          </button>
          <button
            className={handleClassName("/rewards")}
            onClick={() => navigate("/rewards")}
          >
            <IconlyPack.Graph set="light" />
            Pool Rewards
          </button>
          <button
            className={handleClassName("/referral")}
            onClick={() => navigate("/referral")}
          >
            <IconlyPack.People set="light" />
            Referral
          </button>
          <button
            className={handleClassName("/token")}
            onClick={() => navigate("/token")}
          >
            <IconlyPack.Chart set="light" />
            Token Stats
          </button>
          <button
            className={handleClassName("/stack")}
            onClick={() => navigate("/stack")}
          >
            <IconlyPack.Lock set="light" />
            Stack HLT
          </button>
        </div>
        <div className={styles.sidebarBarBottom}>
          <button className={styles.sidebarBarMenubutton}>
            <IconlyPack.User set="light" />
            Account
          </button>
          <button className={styles.sidebarBarMenubutton}>
            <IconlyPack.Setting set="light" />
            Settings
          </button>
        </div>
      </div>
      <div className={styles.sidebarChildren}>{children}</div>
    </div>
  );
};

export default SideBar;
