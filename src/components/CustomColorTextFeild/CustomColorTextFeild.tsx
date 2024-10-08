import { createTheme, ThemeProvider } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField/TextField";
import React from "react";

type CssTextFieldProps = {
  Color: string;
} & TextFieldProps;

const CustomColorTextFeild = (props: CssTextFieldProps, ref) => {
  const { Color, ...otherProps } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: Color,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TextField
        autoFocus
        focused
        sx={{ input: { color: Color, fontSize: { sm: "3vw", xs: "4vw" } } }}
        {...otherProps}
      />
    </ThemeProvider>
  );
};
export default CustomColorTextFeild;
