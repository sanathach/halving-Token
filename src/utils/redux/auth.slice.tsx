import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@src/utils/redux/store";

interface AuthState {
  isAuthorized: boolean;
  accessToken: string;
}
const initialState: AuthState = {
  isAuthorized: false,
  accessToken: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.isAuthorized = true;
      state.accessToken = action.payload;
    },
    Logout: (state) => {
      state.isAuthorized = false;
      state.accessToken = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { Login, Logout } = authSlice.actions;
export const checkIfAuth = (state: RootState) => state.auth.isAuthorized;
export const checkAccessToken = (state: RootState) => state.auth.accessToken;
export default authSlice.reducer;
