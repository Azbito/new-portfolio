import { RepositoriesProps } from "@/_types/repositories";
import { COLORS } from "@/styles/colors";
import { getIconForLanguage } from "@/styles/elements/tech-icons";
import { useRouter } from "next/router";
import * as S from "@/components/RepositoryCard/styles";

export function RepositoryCard({
  language,
  technology,
  title,
  description,
  link,
}: RepositoriesProps) {
  const router = useRouter();
  const iconComponent = getIconForLanguage(language as string);

  return (
    <S.ContainerCard
      onClick={() => router.push(link)}
      backgroundColor={COLORS.purple[500]}
      onHoverBackgroundColor={COLORS.purple[600]}
      onPressBackgroundColor={COLORS.purple[400]}
      cursor="pointer"
      height={15}
    >
      <S.LeftColumnContainer>
        {iconComponent ? (
          <S.ContainerFlex
            fontSize={3}
            gap={2}
            style={{ justifyContent: "start" }}
          >
            {iconComponent}
            <S.Text>{language}</S.Text>
          </S.ContainerFlex>
        ) : (
          <S.ContainerFlex
            fontSize={3}
            gap={2}
            style={{ justifyContent: "start" }}
          >
            {language}
            {technology}
          </S.ContainerFlex>
        )}
        <S.HighlightText>{title}</S.HighlightText>
        <p>{description}</p>
      </S.LeftColumnContainer>
    </S.ContainerCard>
  );
}
