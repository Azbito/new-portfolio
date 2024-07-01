import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import * as S from "@/styles/elements/styled-components";
import { iconsArray } from "@/styles/elements/tech-icons";
import { Introduction } from "@/components/Introduction";
import { mainRepositories } from "@/_utils/mainRepositories";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useRouter } from "next/router";
import { CookiesWarning } from "@/components/CookiesWarning";
import { projects } from "@/_utils/projects";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const slides = [
    {
      width: 1024,
      slidesToShow: 5,
    },
    {
      width: 768,
      slidesToShow: 3,
    },
    { width: 767, slidesToShow: 3 },
  ];

  let initialSlidesToShow = 7;

  slides.forEach((slide) => {
    if (screenWidth <= slide.width) {
      initialSlidesToShow = slide.slidesToShow;
    }
  });

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: initialSlidesToShow,
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
          <S.HighlightText style={{ textAlign: "center" }}>
            Highlighted Repositories
          </S.HighlightText>
          <S.GridContainer>
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
                <>
                  <Image
                    src={item.image}
                    alt="logo"
                    width={200}
                    height={100}
                    style={{ margin: "2rem 0" }}
                  />
                </>
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
