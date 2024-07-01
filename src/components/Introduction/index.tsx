import * as S from "@/styles/elements/styled-components";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { COLORS } from "@/styles/colors";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import profilePic from "../../images/me.jpg";

export function Introduction() {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.ContainerCard backgroundColor={COLORS.gray[900]} width={50}>
      <S.LeftColumnContainer gap={2}>
        <S.ContainerFlex>
          <S.ShyText color={COLORS.gray[800]}>&lt;</S.ShyText>
          <S.HighlightText>THIAGO</S.HighlightText>
          <S.ShyText color={COLORS.gray[800]}>/&gt;</S.ShyText>
        </S.ContainerFlex>
        <TypeAnimation
          sequence={[
            "Welcome!",
            1000,
            "I am Thiago",
            1000,
            "I am developer",
            1000,
            "Have a look at my stuffs! c:",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1rem" }}
        />
        {showButton && (
          <S.ContainerFlex gap={2}>
            <S.CustomButton
              backgroundColor={COLORS.pink[500]}
              onHoverBackground={COLORS.pink[600]}
              onClick={() => router.push(process.env.GITHUB || "")}
            >
              <FaGithub size={20} />
              Github
            </S.CustomButton>
            <S.CustomButton
              backgroundColor={COLORS.blue[500]}
              onHoverBackground={COLORS.blue[600]}
              onClick={() => router.push(process.env.LINKEDIN || "")}
            >
              <FaLinkedin size={20} />
              Linkedin
            </S.CustomButton>
          </S.ContainerFlex>
        )}
      </S.LeftColumnContainer>
      <S.CustomImage
        borderRadius={1}
        src={profilePic}
        alt="developer image"
        height={300}
        width={300}
      />
    </S.ContainerCard>
  );
}
