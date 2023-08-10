import SideBar from "@src/components/SideBar";
import React, { useEffect } from "react";
import styles from "@src/stylesheet/Buy.module.scss";
const BuyHLT = () => {
  useEffect(() => {
    document.title = "BUY HLT - Halving";
  }, []);
  return (
    <SideBar>
      <div className={styles.buy}>
      </div>
    </SideBar>
  );
};

export default BuyHLT;
