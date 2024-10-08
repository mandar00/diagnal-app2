import React, { useRef, useState } from "react";
import CustomColorTextFeild from "../CustomColorTextFeild/CustomColorTextFeild";
import { Theme } from "../../styles/Theme";

interface DebouncedInputProps {
  onChange: (searchValue: string) => void;
  debounceTime: number;
  placeholder: string;
  autoComplete: string;
}
const DebouncedInput = (props: DebouncedInputProps) => {
  const { onChange, debounceTime, placeholder, autoComplete } = props;
  const [searchValue, setSearchValue] = useState<string>("");

  let timeRef = useRef(null);

  const debouncedOnChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // clear timeout if input exists
    clearTimeout(timeRef.current);

    const searchValue = event.target.value;
    setSearchValue(searchValue);

    //trigger search after debouncetime 
    timeRef.current = setTimeout(() => {
      onChange(searchValue);
    }, debounceTime);

  };

  return (
    <CustomColorTextFeild
      Color={Theme.colors.primary.light}
      autoComplete={autoComplete}
      label={placeholder}
      onChange={debouncedOnChange}
      variant="standard"
      value={searchValue}
      fullWidth
    />
  );
};
export default DebouncedInput;
