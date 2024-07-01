import { NextPageContext } from "next";
import * as S from "@/styles/elements/styled-components";
import Image from "next/image";
import CryingKitten from "@/images/cat.gif";
import { useRouter } from "next/router";

interface ErrorProps {
  statusCode: number;
}

function Error({ statusCode }: ErrorProps) {
  const router = useRouter();

  const errorMessages: { [key: number]: string } = {
    404: "Oops! Page not found.",
    403: "Oh, you did too many requests. Please, have a break.",
    500: "Internal server error. Please try again later.",
  };

  const errorMessage =
    errorMessages[statusCode] || "An unknown error occurred.";

  return (
    <S.CenterColumnContainer gap={2}>
      <S.HighlightText>Oh... That's a shame...</S.HighlightText>
      <S.HighlightText>{errorMessage}</S.HighlightText>
      <Image src={CryingKitten} alt="Crying kitten" width={300} height={300} />
      <S.CustomButton onClick={() => router.back()}>Go back</S.CustomButton>
    </S.CenterColumnContainer>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
