import SideBar from "@src/components/SideBar";
import React, { useEffect } from "react";
import styles from "@src/stylesheet/Token.module.scss";
const Token = () => {
  useEffect(() => {
    document.title = "Token stats - Halving";
  }, []);
  return (
    <SideBar>
      <div className={styles.token}>
      </div>
    </SideBar>
  );
};

export default Token;
