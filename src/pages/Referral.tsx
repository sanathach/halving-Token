import SideBar from "@src/components/SideBar";
import React, { useEffect } from "react";
import styles from "@src/stylesheet/Referral.module.scss";
const Referral = () => {
  useEffect(() => {
    document.title = "Referrals - Halving";
  }, []);
  return (
    <SideBar>
      <div className={styles.referral}>
      </div>
    </SideBar>
  );
};

export default Referral;
