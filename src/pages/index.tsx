import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Fragment, useEffect, useState } from "react";
import * as S from "@/styles/Home";
import { Introduction } from "@/components/Introduction";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useRouter } from "next/router";
import { CookiesWarning } from "@/components/CookiesWarning";
import Image from "next/image";
import {
  projects as EnglishProjects,
  mainRepositories as mainEnglishRepositories,
  TEnglish,
} from "@/i18n/en/home";
import {
  mainRepositories as mainPortugueseRepositories,
  projects as PortugueseProjects,
  TPortuguese,
} from "@/i18n/pt/home";
import { useLanguage } from "@/hooks/useLanguages";
import { iconsArray } from "@/styles/elements/tech-icons";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";
import { LanguageSelect } from "@/components/LanguageSelect";

export default function Home() {
  const router = useRouter();
  const { language, setLanguageToEnglish, setLanguageToPortuguese } =
    useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLaptopG = useMediaQuery("(min-width: 1440px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1439px)");
  const isPhone = useMediaQuery("(max-width: 767px)");

  const settingsLapTopG = {
    centerMode: true,
    infinite: true,
    slidesToShow: 9,
    speed: 500,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 1500,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const settingsTablet = {
    centerMode: true,
    infinite: true,
    slidesToShow: 7,
    focusOnSelect: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const settingsPhone = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const humanLanguage = language === "en" ? TEnglish : TPortuguese;
  const mainRepositories =
    language === "en" ? mainEnglishRepositories : mainPortugueseRepositories;
  const project = language === "en" ? EnglishProjects : PortugueseProjects;

  return (
    <>
      <LanguageSelect />

      <S.CenterColumnContainer gap={6}>
        <Introduction />
        <S.HighlightText>{humanLanguage.technologiesTitle}</S.HighlightText>
        <S.CarouselWrapper>
          {isPhone && (
            <Slider {...settingsPhone}>
              {iconsArray.map(({ techName, iconComponent }, index) => (
                <S.IconContainer key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "4rem",
                    }}
                  >
                    {iconComponent}
                    {index === currentSlide && <S.Text>{techName}</S.Text>}
                  </div>
                </S.IconContainer>
              ))}
            </Slider>
          )}
          {isLaptopG && (
            <Slider {...settingsLapTopG}>
              {iconsArray.map(({ techName, iconComponent }, index) => (
                <S.IconContainer key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "4rem",
                    }}
                  >
                    {iconComponent}
                    {index === currentSlide && <S.Text>{techName}</S.Text>}
                  </div>
                </S.IconContainer>
              ))}
            </Slider>
          )}
          {isTablet && (
            <Slider {...settingsTablet}>
              {iconsArray.map(({ techName, iconComponent }, index) => (
                <S.IconContainer key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "4rem",
                    }}
                  >
                    {iconComponent}
                    {index === currentSlide && <S.Text>{techName}</S.Text>}
                  </div>
                </S.IconContainer>
              ))}
            </Slider>
          )}
        </S.CarouselWrapper>
        <S.CenterColumnContainer width={50} gap={4}>
          <S.HighlightText style={{ textAlign: "center" }}>
            {humanLanguage.highlightTitle}
          </S.HighlightText>
          <S.GridContainer>
            {mainRepositories.map((item) => (
              <RepositoryCard
                key={item.title}
                title={item.title}
                description={item.description}
                language={item.language}
                technology={item.technology}
                link={item.link}
              />
            ))}
          </S.GridContainer>
        </S.CenterColumnContainer>
        <S.CustomButton
          style={{ fontSize: "1rem", width: "50%" }}
          onClick={() => router.push("/repositories")}
        >
          {humanLanguage.seeMore}
        </S.CustomButton>
        <S.HighlightText>{humanLanguage.projectsTitle}</S.HighlightText>
        <S.DividerContainer style={{ gap: "2rem" }}>
          {project.map((item) => (
            <Fragment key={item.id}>
              <S.ContainerFlex style={{ flexDirection: "row", width: "100%" }}>
                <S.DividerLine />
                <S.DividerText
                  onClick={() =>
                    item.public_link && router.push(item.public_link)
                  }
                >
                  {item.name}
                </S.DividerText>
                <S.DividerLine />
              </S.ContainerFlex>

              {item.image && (
                <Image
                  src={item.image}
                  alt="logo"
                  width={200}
                  height={100}
                  style={{ margin: "2rem 0" }}
                />
              )}

              <S.ContainerFlex fontSize={3} gap={2}>
                {item.used_technologies}
              </S.ContainerFlex>
              <S.Text style={{ textAlign: "center", width: "50%" }}>
                {item.description.split("<br><br>").map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    <br />
                    <br />
                  </Fragment>
                ))}
              </S.Text>
            </Fragment>
          ))}
        </S.DividerContainer>
      </S.CenterColumnContainer>
    </>
  );
}
