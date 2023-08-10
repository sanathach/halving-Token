import {
  CheckReferralAPI,
  GetTokensAPI,
  ValidateReferralAPI,
} from "@src/api/Post";
import styles from "@src/stylesheet/SuccessPage.module.scss";
import useNotification from "@src/utils/Notification";
import { AddReferralProps, initialAddReferral } from "@src/utils/Props";
import {
  connectAlbedo,
  connectRabet,
  isRabetAvailable,
} from "@src/utils/Stellar/Stellar";
import { Modal } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const SuccessPage = () => {
  let { userId } = useParams();
  const [isReferred, setIsReferred] = useState<boolean>(true);
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
  const [errorPublicKey, setErrorPublicKey] = useState<boolean>(false);
  const [isTrustlineOpen, setIsTrustlineOpen] = useState<boolean>(false);

  const [referralInputs, setReferralInputs] =
    useState<AddReferralProps>(initialAddReferral);
  const navigate = useNavigate();
  let { openNotificationWithIcon, contextHolder } = useNotification();
  console.log(userId);
  useEffect(() => {
    if (userId) {
      fetchAccessToken();
    }
  }, [userId]);
  const fetchAccessToken = async () => {
    const checkIfReffered = await CheckReferralAPI({ id: userId });
    console.log(checkIfReffered, "checkIfReffered");
    if (checkIfReffered.success) {
      setIsReferred(true);
      const response = await GetTokensAPI({ id: userId });
      console.log("response");
      if (response.success) {
        navigate("/dashboard");
      } else {
        openNotificationWithIcon({
          type: "error",
          description: "Unknown error occured",
          message: "Unable to fetch",
        });
      }
      return null;
    } else {
      setIsReferred(false);

      return null;
    }
  };

  useEffect(() => {
    if (referralInputs.publicKey.length > 0 && isActiveButton) {
      if (
        referralInputs.publicKey.length === 56 &&
        referralInputs.publicKey.startsWith("G")
      ) {
        setErrorPublicKey(false);
      } else {
        setErrorPublicKey(true);
      }
    } else {
      setErrorPublicKey(false);
    }
  }, [referralInputs]);
  const handleReferralValidation = async (): Promise<void> => {
    if (referralInputs.referredBy.length > 0) {
      console.log(referralInputs);
      const response = await ValidateReferralAPI({
        referralID: referralInputs.referredBy.toUpperCase(),
      });
      if (response.success) {
        openNotificationWithIcon({
          type: "success",
          description: "Referral Added",
          message: "Valid Referral ID",
        });
        setIsActiveButton(true);
      }
    } else {
      openNotificationWithIcon({
        type: "error",
        description: "Please enter 10 digit Referral ID to continue",
        message: "Invalid Referral ID",
      });
    }
  };
  const showTrustlineModal = () => {
    if (referralInputs.publicKey.length === 0) {
      openNotificationWithIcon({
        type: "error",
        description: "Please enter Public key to continue",
        message: "Invalid Public key",
      });
    } else {
      if (errorPublicKey) {
        openNotificationWithIcon({
          type: "error",
          description: "Please enter correct Public key to continue",
          message: "Invalid Public key",
        });
      } else {
        setIsTrustlineOpen(true);
      }
    }
    setIsTrustlineOpen(true);
  };

  const handleTrustlineModalOk = () => {
    setIsTrustlineOpen(false);
  };

  const handleTrustlineModalCancel = () => {
    setIsTrustlineOpen(false);
  };

  return (
    <div className={styles.successPage}>
      {contextHolder}
      {isReferred ? (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          style={{ height: "200px" }}
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
      ) : (
        <>
          <img src="/images/img-logo.svg" alt="" className={styles.logoImg} />
          <div className={styles.successPageLeft}>
            <div className={styles.successPageTitle}>
              <h1>Welcome to Halving Token.</h1>
              <p>Let’s complete your profile before we get started.</p>
            </div>

            <div className={styles.successPageInput}>
              <p>Enter your referral code</p>
              <input
                type="text"
                placeholder="Referral Code"
                value={referralInputs.referredBy}
                onChange={(e) => {
                  setReferralInputs({
                    ...referralInputs,
                    referredBy: e.target.value,
                  });
                }}
              />
              <button onClick={handleReferralValidation}>Continue</button>
            </div>
            <div className={styles.successPageInput}>
              <input
                type="text"
                placeholder="Enter your Stellar Public Key (Starts with G)"
                value={referralInputs.publicKey}
                onChange={(e) => {
                  setReferralInputs({
                    ...referralInputs,
                    publicKey: e.target.value,
                  });
                }}
                style={{ borderColor: errorPublicKey ? "red" : "" }}
              />
              <p>
                You Stellar Account should be activated and have a minimum
                balance of 3 XLM
              </p>
              <button disabled={!isActiveButton} onClick={showTrustlineModal}>
                Add Trustline to HLT Token
              </button>
            </div>
          </div>
          <div className={styles.successPageRight}>
            <div className={styles.successPageImageContainer}>
              <img src="/images/img-success.png" alt="" />
            </div>
          </div>
        </>
      )}
      <Modal
        title="Connect wallet"
        open={isTrustlineOpen}
        onOk={handleTrustlineModalOk}
        onCancel={handleTrustlineModalCancel}
        className={styles.connectModal}
      >
        {isRabetAvailable() ? (
          <button
            className={styles.connectButton}
            onClick={() => connectRabet(referralInputs.publicKey)}
          >
            <div>
              <img src="/images/img-rabet.svg" alt="" />
            </div>
            Rabet
          </button>
        ) : (
          <button
            className={styles.connectButton}
            onClick={() => window.open("https://rabet.io/")}
          >
            <div>
              <img src="/images/img-rabet.svg" alt="" />
            </div>
            Install Rabet
          </button>
        )}
        <button
          className={styles.connectButton}
          onClick={() => connectAlbedo(referralInputs.publicKey)}
        >
          <div>
            <img src="/images/img-albedo.svg" alt="" />
          </div>
          Albedo
        </button>
      </Modal>
    </div>
  );
};

export default SuccessPage;
