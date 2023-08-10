import { TablePaginationConfig } from "antd";

export interface LoginDataProps {
  email: string;
  password: string;
}
export const initalLoginData: LoginDataProps = {
  email: "sa1@gmail.com",
  password: "acscs",
};
export interface CreateAccountProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export const InitialCreateAccountData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
export const PaginationOptions: TablePaginationConfig = {
  pageSize: 2,
};

export interface LoginAPIProps {
  data: LoginDataProps;
}
export interface UserIDProps {
  id: string | undefined;
}
export interface ReferralIDProps {
  referralID: string | undefined;
}
export const initialAddReferral: AddReferralProps = {
  id: "",
  publicKey: "",
  referredBy: "AAF209F039",
};
export interface AddReferralProps {
  id: string;
  referredBy: string;
  publicKey: string;
}
export interface AddReferralAPIProps {
  id: string | undefined;
  referredBy: string;
  publicKey: string;
}
