import { FormControl, InputLabel, Pagination } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "./colors";

export const ContainerFlex = styled.div<{
  gap?: number;
  fontSize?: number;
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize}rem;`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

export const ContainerFlexRowStart = styled.div`
  display: flex;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContentContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterColumnContainer = styled.div<{
  gap?: number;
  width?: number;
}>`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.width && `width: ${props.width}%`}
`;

export const StyledPagination = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: COLORS.white,
  },
  "& .MuiPaginationItem-page": {
    "&:hover": {
      backgroundColor: COLORS.black,
    },
    "&.Mui-selected": {
      backgroundColor: COLORS.pink[500],
      color: COLORS.black,
    },
  },
}));

export const GridContainer = styled.div<{
  quantity?: string;
  isRepositoryPage?: boolean;
}>`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: ${(props) =>
    props.quantity ? `${props.quantity}` : "1fr 1fr"};
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  gap: 5rem 0.8rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.isRepositoryPage &&
    `
      @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
      }
  
      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
  
      @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    `}
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
`;

export const ItalicText = styled.p`
  font-style: italic;
  text-align: center;
  margin: 0;
  display: inline;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  gap: 1rem;
`;

export const Link = styled.p`
  color: ${COLORS.blue[500]};
  cursor: pointer;
  margin: 0;
  display: inline;
`;

export const CustomFormControl = styled(FormControl)`
  background-color: ${COLORS.white};
  border-radius: 1rem;
  border: none;
  width: 67.5%;

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
`;

export const CustomLabel = styled(InputLabel)`
  background-color: ${COLORS.purple["500"]};
  color: ${COLORS.white};

  padding: 0 1rem;
  border-radius: 1rem;

  &.Mui-focused {
    color: ${COLORS.white};
  }
`;
