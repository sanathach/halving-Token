import {
  AddReferralAPIProps,
  LoginAPIProps,
  ReferralIDProps,
  UserIDProps,
} from "@src/utils/Props";
import axios from "axios";

export const LoginAPI = async ({ data }: LoginAPIProps) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:3000/auth/login",
    data: data,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return { ...error, success: false };
    });
  return response;
};
export const GetTokensAPI = async ({ id }: UserIDProps) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:3000/auth/getTokens",
    data: { id: id },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return { ...error, success: false };
    });
  return response;
};
export const CheckReferralAPI = async ({ id }: UserIDProps) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:3000/auth/checkifreferral",
    data: { id: id },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return { ...error, success: false };
    });
  return response;
};
export const AddReferralAPI = async ({
  id,
  referredBy,
  publicKey,
}: AddReferralAPIProps) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:3000/auth/checkifreferral",
    data: {
      userID: id,
      referredBy: referredBy,
      publicKey: publicKey,
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return { ...error, success: false };
    });
  return response;
};
export const ValidateReferralAPI = async ({ referralID }: ReferralIDProps) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:3000/referral/verify",
    data: { referralID: referralID },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return { ...error, success: false };
    });
  return response;
};
