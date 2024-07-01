import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import * as S from "@/styles/elements/styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { iconsArray } from "@/styles/elements/tech-icons";
import { Introduction } from "@/components/Introduction";
import { mainRepositories } from "@/_utils/mainRepositories";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useRouter } from "next/router";
import { CookiesWarning } from "@/components/CookiesWarning";
import { Chip, Divider } from "@mui/material";
import styled from "styled-components";
import { projects } from "@/_utils/projects";
import Image from "next/image";

export default function IconCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 7,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    height: 15,
    centerPadding: "20px",
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <>
      <S.CenterColumnContainer gap={6}>
        <Introduction />
        <S.HighlightText>Technologies</S.HighlightText>
        <S.CarouselWrapper>
          <Slider {...settings}>
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
        </S.CarouselWrapper>
        <S.CenterColumnContainer width={50} gap={4}>
          <S.HighlightText>Highlighted Repositories</S.HighlightText>
          <S.GridContainer quantity={2}>
            {mainRepositories.map((item) => (
              <RepositoryCard
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
          backgroundColor=""
          onHoverBackground=""
          style={{ fontSize: "1rem", width: "50%" }}
          onClick={() => router.push("/repositories")}
        >
          See more
        </S.CustomButton>

        <S.HighlightText>Projects</S.HighlightText>
        <S.DividerContainer style={{ gap: "2rem" }}>
          {projects.map((item) => (
            <>
              <S.ContainerFlex
                key={item.id}
                style={{ flexDirection: "row", width: "100%" }}
              >
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
            </>
          ))}
        </S.DividerContainer>
      </S.CenterColumnContainer>
      <CookiesWarning />
    </>
  );
}
