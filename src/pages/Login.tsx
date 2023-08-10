import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Input } from "antd";
import { LoginAPI } from "@src/api/Post";
import styles from "@src/stylesheet/Login.module.scss";
import useNotification from "@src/utils/Notification";
import { initalLoginData, LoginDataProps } from "@src/utils/Props";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginDataProps>(initalLoginData);
  let { openNotificationWithIcon, contextHolder } = useNotification();
  const handleSubmit = async () => {
    const response = await LoginAPI({ data: loginData });
    console.log(response);
    if (response.success) {
      navigate(response.redirectURL);
    } else {
      openNotificationWithIcon({
        type: "error",
        description: "Unable to login!!",
        message: response.message,
      });
    }
  };
  
  return (
    <div className={styles.login}>
      {contextHolder}
      <img src="/images/img-logo.svg" alt="" className={styles.logoImg} />
      <img src="/images/img-login.png" alt="" className={styles.image} />
      <div className={styles.loginContent}>
        <div className={styles.loginContentInner}>
          <h2 className={styles.loginContentInnerh2}>LOGIN</h2>
          <p className={styles.loginContentInnerp}>
            Welcome back! Please enter your details.
          </p>
          <Button
            className={styles.googleLoginButton}
            onClick={() => {
              window.open("http://127.0.0.1:3000/auth/google");
            }}
          >
            <GoogleOutlined />
            Login with Google
          </Button>
          <Divider className={styles.loginDivider}>or</Divider>
          <Input
            placeholder="Email address"
            className={styles.loginInput}
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          /><br></br>
          <div className={styles.loginOption}>
            
            <div className={styles.loginCheckBoxContainer}>
      
              <Checkbox onChange={onChange} className={styles.loginCheckBox} />
              <span className={styles.loginCheckBoxText}> Remember me</span>
            </div>
            <p>Forgot password?</p>
          </div>
          <Button className={styles.localLoginButton} 
          onClick={() => {
                navigate("/dashboard");
              }}

          >
            Log in
          </Button>
          <p className={styles.loginSignupOption}>
            Don’t have an account?
            <span
              onClick={() => {
                navigate("/createaccount");
              }}
            >
              <b>Sign up for free</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
