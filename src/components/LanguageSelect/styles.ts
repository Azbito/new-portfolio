import { COLORS } from "@/styles/colors";
import { FormControl } from "@mui/material";
import styled from "styled-components";

export const CustomFormControl = styled(FormControl)`
  background-color: ${COLORS.white};
  border-radius: 1rem;
  border: none;
  right: 2rem;
  top: 1rem;
  position: fixed;

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
