import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import profilePic from "../../images/me.jpg";
import { TypeAnimation } from "react-type-animation";
import { COLORS } from "@/styles/colors";
import * as S from "./styles"; // Corrija o caminho de importação conforme necessário
import { useLanguage } from "@/hooks/useLanguages";
import { TEnglish } from "@/i18n/en/home";
import { TPortuguese } from "@/i18n/pt/home";

export function Introduction() {
  const [showButton, setShowButton] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false); // Estado auxiliar para forçar a atualização
  const router = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setForceUpdate((prev) => !prev);
  }, [language]);

  return (
    <S.ContainerCard backgroundColor={COLORS.gray[900]} width={50}>
      <S.LeftColumnContainer gap={2}>
        <S.ContainerFlex style={{ justifyContent: "start" }}>
          <S.ShyText color={COLORS.gray[800]}>&lt;</S.ShyText>
          <S.HighlightText>THIAGO</S.HighlightText>
          <S.ShyText color={COLORS.gray[800]}>/&gt;</S.ShyText>
        </S.ContainerFlex>
        {language === "en" ? (
          <TypeAnimation
            sequence={[
              TEnglish.welcome,
              1000,
              TEnglish.name,
              1000,
              TEnglish.developer,
              1000,
              TEnglish.haveALook,
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1rem" }}
            key={forceUpdate as any}
          />
        ) : (
          <TypeAnimation
            sequence={[
              TPortuguese.welcome,
              1000,
              TPortuguese.name,
              1000,
              TPortuguese.developer,
              1000,
              TPortuguese.haveALook,
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1rem" }}
            key={forceUpdate as any}
          />
        )}
        {showButton && (
          <>
            {language === "en" ? (
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
            ) : (
              <S.ContainerFlexPortuguese gap={2}>
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
              </S.ContainerFlexPortuguese>
            )}
          </>
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
