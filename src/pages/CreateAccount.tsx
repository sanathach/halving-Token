import { GoogleOutlined } from "@ant-design/icons";
import OtpInput from "@src/components/OTPInput";
import styles from "@src/stylesheet/CreateAccount.module.scss";
import { CreateAccountProps, InitialCreateAccountData } from "@src/utils/Props";
import { Button, Divider, Input } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [createAccountData, setCreateAccountData] =
    useState<CreateAccountProps>(InitialCreateAccountData);
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [verify, setVerify] = useState<boolean>(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const controls = useAnimation();
  useEffect(() => {
    if (verify) {
      controls.start({
        x: -200,
        transition: { duration: 3, delay: 2 },
      });
    }
  }, [verify]);
  return (
    <div className={styles.createAccount}>
      <img src="/images/img-logo.svg" alt="" className={styles.logoImg} />
      <img src="/images/img-create.png" alt="" className={styles.image} />
      <div className={styles.createAccountContent}>
        {verify ? (
          <motion.div className={styles.verifyAccountContentInner}>
            <h2 className={styles.verifyAccountContentInnerh2}>Verify email</h2>
            <p className={styles.verifyAccountContentInnerp}>
              We have sent OTP to your email address. Please enter the OTP to
              verify
            </p>

            <OtpInput setOtp={setOtp} value={otp} valueLength={6} />
            <br></br>
            <Button className={styles.localLoginButton}>Verify</Button>
            <div className={styles.verifyAccountOption}>
              <p
                onClick={() => {
                  setVerify(false);
                }}
              >
                <b>Back</b>
              </p>
              <p><b>Resend OTP</b></p>
            </div>
          </motion.div>
        ) : (
          <div className={styles.createAccountContentInner}>
            {" "}
            <h2 className={styles.createAccountContentInnerh2}>
              Create an account
            </h2>
            <p className={styles.createAccountContentInnerp}>
              Let's get started!
            </p>
            <div className={styles.createAccountInputNameContainer}>
              <Input
                placeholder="First Name"
                className={styles.createAccountInputName}
                value={createAccountData.firstName}
                onChange={(e) => {
                  setCreateAccountData({
                    ...createAccountData,
                    firstName: e.target.value,
                  });
                }}
              />
              <Input
                placeholder="Last Name"
                className={styles.createAccountInputName}
                value={createAccountData.lastName}
                onChange={(e) => {
                  setCreateAccountData({
                    ...createAccountData,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
            <Input
              placeholder="Email address"
              className={styles.createAccountInput}
              value={createAccountData.email}
              onChange={(e) => {
                setCreateAccountData({
                  ...createAccountData,
                  email: e.target.value,
                });
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              className={styles.createAccountInput}
              value={createAccountData.password}
              onChange={(e) => {
                setCreateAccountData({
                  ...createAccountData,
                  password: e.target.value,
                });
              }}
            />
            <br></br>
            <Button
              className={styles.localLoginButton}
              onClick={() => {
                console.log(createAccountData);
                setVerify(true);
              }}
            >
              Create account
            </Button>
            <Divider className={styles.createAccountDivider}>or</Divider>
            <Button className={styles.googleLoginButton}>
              <GoogleOutlined />
              Login with Google
            </Button>
            <p className={styles.createAccountSignupOption}>
             Already have an account?
              <span
                onClick={() => {
                  navigate("/");
                  // reroute("");
                }}
              >
                <b>Log in</b>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
