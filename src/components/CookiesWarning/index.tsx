import * as S from "@/styles/Home";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export function CookiesWarning() {
  const [isHiding, setIsHiding] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.LeftColumnContainer
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "2rem",
        display: isHiding ? "none" : "flex",
        backgroundColor: "rgba(29, 29, 29, 0.89)",
        padding: "2rem",
        borderRadius: ".5rem",
        width: windowWidth <= 767 ? "75%" : "auto",
      }}
      gap={2}
    >
      <S.ContainerFlex style={{ justifyContent: "space-between" }}>
        <S.HighlightText>A cookie was found!</S.HighlightText>
        <FaTimes
          style={{ cursor: "pointer", fontSize: "2rem" }}
          onClick={() => setIsHiding(!isHiding)}
        />
      </S.ContainerFlex>
      <S.Text>
        Cookies are used to give you a better experience with the site.
      </S.Text>
    </S.LeftColumnContainer>
  );
}
