import Image from "next/image";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import { Button, ButtonProps } from "@mui/material";

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

export const ContainerFlexPortuguese = styled.div<{
  gap?: number;
  fontSize?: number;
  margin?: string;
}>`
  display: flex;
  align-items: center;

  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize}rem;`}
    ${(props) => props.margin && `margin: ${props.margin};`}
`;

export const ShyText = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
`;

export const HighlightText = styled.strong`
  letter-spacing: 0.5rem;
  font-size: 2rem;
`;

export const CustomImage = styled(Image)<{ borderRadius?: number }>`
  && {
    ${(props) =>
      props.borderRadius && `border-radius: ${props.borderRadius}rem;`}
  }
`;

export const CustomButton = muiStyled(Button)<CustomButtonProps>`
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
