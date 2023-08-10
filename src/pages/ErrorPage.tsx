import styles from "@src/stylesheet/Error.module.scss";
import { CaretLeft } from "react-iconly";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.errorPage}>
      <img src="/images/img-logo.svg" alt="" className={styles.logoImg} />
      <div className={styles.errorLeft}>
        <h3 className={styles.errorHeading}>Oopss....</h3>
        <h3 className={styles.errorSubHeading}>Page not found</h3>
        <p className={styles.errorDesc}>
          This Page doesn`t exist or was removed! We suggest you back to home.
        </p>
        <button
          className={styles.errorBackButton}
          onClick={() => {
            navigate("/");
          }}
        >
          <CaretLeft set="bold" primaryColor="blueviolet" />
          Back to home
        </button>
      </div>
      <div className={styles.errorRight}>
        <img src="/images/img-error.svg" alt="" className={styles.errorImg} />
      </div>
    </div>
  );
};

export default ErrorPage;
