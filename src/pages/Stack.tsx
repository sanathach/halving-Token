import SideBar from "@src/components/SideBar";
import React, { useEffect } from "react";
import styles from "@src/stylesheet/Stack.module.scss";
const Stack = () => {
  useEffect(() => {
    document.title = "Stack HLT - Halving";
  }, []);
  return (
    <SideBar>
      <div className={styles.stack}>
      </div>
    </SideBar>
  );
};

export default Stack;
