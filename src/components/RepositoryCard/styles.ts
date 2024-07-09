import Image from "next/image";
import styled from "styled-components";

export const CustomImage = styled(Image)<{ borderRadius?: number }>`
  && {
    ${(props) =>
      props.borderRadius && `border-radius: ${props.borderRadius}rem;`}
  }
`;

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

export const HighlightText = styled.strong`
  letter-spacing: 0.5rem;
  font-size: 2rem;
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
  justify-content: space-around;
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
