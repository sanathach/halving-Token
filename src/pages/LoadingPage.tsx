import styles from "@src/stylesheet/LoadingScreen.module.scss";
import { motion } from "framer-motion";
const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className={styles.loadingPageLogo}
      >
        <defs>
          <style>{".cls-1{fill:#2baae2;}.cls-2{fill:#fff;}"}</style>
        </defs>
        <motion.path
          className="cls-1"
          d="M95.32,9.76H32.68L1.37,64l31.31,54.24H95.32L126.63,64ZM93.4,114.92H34.6L5.2,64,34.6,13.08H93.4L122.8,64Z"
          initial={{
            pathLength: 0,
            rotate: 0,
          }}
          animate={{
            pathLength: 1,
            rotate: 360,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <polygon
          className="cls-1"
          points="90.61 17.91 37.39 17.91 10.78 64 37.39 110.09 90.61 110.09 117.22 64 90.61 17.91"
        />
        <path
          className="cls-2"
          d="M44.23,76.35a18.4,18.4,0,0,1,2.35-8.17,18.12,18.12,0,0,1,5.62-6.09V62a21.85,21.85,0,0,1,5.5-2.87,18.92,18.92,0,0,1,6.3-1,7.78,7.78,0,0,0,3.15-.64,8.59,8.59,0,0,0,2.59-1.71,7.83,7.83,0,0,0,1.75-2.55,7.75,7.75,0,0,0,.64-3.15V35.47H83.77V52a17.42,17.42,0,0,1-2.59,8.41A18.3,18.3,0,0,1,75,66.47a12.86,12.86,0,0,1-2.87,1.59A19.6,19.6,0,0,1,64,69.82a7.75,7.75,0,0,0-3.15.64,8.22,8.22,0,0,0-4.34,4.34A7.75,7.75,0,0,0,55.87,78V92.53H44.23ZM56,35.47V58A20.23,20.23,0,0,0,49,62.09a19.88,19.88,0,0,0-4.79,6.45V35.47ZM72.13,92.53V70A20.46,20.46,0,0,0,79,65.91a20.1,20.1,0,0,0,4.79-6.37v33Z"
        />
      </svg>
    </div>
  );
};

export default LoadingPage;
