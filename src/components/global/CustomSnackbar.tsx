import { Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSnackbar, snackbarData } from "../../store/slice/SnackbarSlice";

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const SnackbarData = useSelector(snackbarData);
  const { show, message, autoHide, anchorOrigin } = SnackbarData;
  
  const handleCloseSnackbar = () => {
    //clear the message and reset everything to default
    dispatch(
      showSnackbar({
        show: false,
        severity: "success",
        message: "",
        autoHide: 0,
      })
    );
  };

  return (
    <>
      <Snackbar
        open={show}
        autoHideDuration={autoHide}
        message={message}
        anchorOrigin={anchorOrigin}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};
export default CustomSnackbar;
