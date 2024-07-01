import { Button, ButtonProps, Pagination } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { COLORS } from "@/styles/colors";

interface CustomButtonProps extends ButtonProps {
  backgroundColor?: string;
  onHoverBackground?: string;
}

export const ContainerFlex = styled.div<{
  gap?: number;
  fontSize?: number;
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize}rem;`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

export const CustomImage = styled(Image)<{ borderRadius?: number }>`
  && {
    ${(props) =>
      props.borderRadius && `border-radius: ${props.borderRadius}rem;`}
  }
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const ContainerCard = styled.div<{
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onPressBackgroundColor?: string;
  cursor?: string;
  width?: number;
  height?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  padding: 2rem 4rem;
  width: ${(props) => props.width && `${props.width}%`};
  height: 100%;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? props.onHoverBackgroundColor : "transparent"};
  }

  &:active {
    background-color: ${(props) =>
      props.backgroundColor ? props.onPressBackgroundColor : "transparent"};
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    ${CustomImage} {
      order: -1;
      margin-bottom: 1rem;
    }
  }
`;

export const LeftColumnContainer = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${(props) => props.gap && `gap: ${props.gap}rem;`};
`;

export const CenterColumnContainer = styled.div<{
  gap?: number;
  width?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.width && `width: ${props.width}%`}
`;

export const HighlightText = styled.strong`
  letter-spacing: 0.5rem;
  font-size: 2rem;
`;

export const ShyText = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
`;

export const CustomButton = styled(Button)<CustomButtonProps>`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: 0.2s;
    font-family: "JetBrains Mono", sans-serif;
    opacity: 0;
    width: 8rem;

    background-color: ${(props) => props.backgroundColor ?? ""};
    color: white;

    border-radius: 0;

    &:hover {
      background-color: ${(props) => props.onHoverBackground ?? ""};
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 0.5s ease-in-out forwards;
  }
`;

export const CarouselWrapper = styled.div`
  width: 50%;
  .slick-slide {
    transition:
      transform 0.5s,
      opacity 0.5s;
    opacity: 0.5;
  }

  .slick-center {
    opacity: 1;
  }

  .slick-list {
    padding: 0 80px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 0;
  padding: 0;
`;

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

export const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;

export const DividerLine = styled.hr`
  flex-grow: 1;
  height: 1px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const DividerText = styled.b`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;

  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
`;
