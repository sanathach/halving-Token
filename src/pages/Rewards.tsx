import SideBar from "@src/components/SideBar";
import { useEffect } from "react";
import styles from "@src/stylesheet/Rewards.module.scss";
import { PaginationOptions } from "@src/utils/Props";

const Rewards = () => {
  useEffect(() => {
    document.title = "Rewards - Halving";
  }, []);

  return (
    <SideBar>
      <div className={styles.rewards}>
      </div>
    </SideBar>
  );
};

export default Rewards;
