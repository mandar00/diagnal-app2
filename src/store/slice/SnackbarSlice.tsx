import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type snackbarState = {
  show: boolean;
  message: string;
  severity: string;
  anchorOrigin?: {
    [key in "vertical" | "horizontal"]: string;
  };
  autoHide?: number;
};

const initialState = {
  show: false,
  message: "",
  severity: "info",
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  autoHide: 7000,
} satisfies snackbarState as snackbarState;

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state:snackbarState,
      action:PayloadAction<snackbarState>
    ) => {
      const {show,severity,message,anchorOrigin,autoHide }=action.payload
      state.show = show
      state.severity =severity
      state.message=message
      anchorOrigin && (state.anchorOrigin =anchorOrigin)
      autoHide && (state.autoHide = autoHide)
    },
  },
});
export const snackbarData = (state)=> state.snackbars;
export default snackbarSlice.reducer;
export const { showSnackbar } = snackbarSlice.actions;
