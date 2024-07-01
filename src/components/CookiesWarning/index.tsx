import * as S from "@/styles/elements/styled-components";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";

export function CookiesWarning() {
  const [isHiding, setIsHiding] = useState<boolean>(false);

  return (
    <S.LeftColumnContainer
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "2rem",
        display: isHiding ? "none" : "flex",
        backgroundColor: "rgba(29, 29, 29, 0.89)",
        width: "30%",
        padding: "2rem",
        borderRadius: ".5rem",
      }}
      gap={2}
    >
      <S.ContainerFlex style={{ justifyContent: "space-between" }}>
        <S.HighlightText>A cookie was found!</S.HighlightText>
        <FiEyeOff
          size={32}
          style={{ cursor: "pointer" }}
          onClick={() => setIsHiding(!isHiding)}
        />
      </S.ContainerFlex>
      <S.Text>
        Cookies are used to give you a better experience with the site.
      </S.Text>
    </S.LeftColumnContainer>
  );
}
