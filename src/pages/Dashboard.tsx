import SideBar from "@src/components/SideBar";
import React, { useEffect } from "react";
import styles from "@src/stylesheet/Dashboard.module.scss";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Halving";
  }, []);
  return (
    <SideBar>
      <div className={styles.dashboard}>
      </div>
    </SideBar>
  );
};

export default Dashboard;
