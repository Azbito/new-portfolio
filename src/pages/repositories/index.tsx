import React, { useState, useEffect } from "react";
import * as S from "@/styles/Repositories";
import { RepositoryCard } from "@/components/RepositoryCard";
import {
  DeveloperProps,
  getAllRepositories,
  getDeveloperInfo,
  getRepositories,
} from "@/_services/github";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import Error from "@/pages/_error";
import { LoadingModal } from "@/components/LoadingModal";
import { useRouter } from "next/router";
import { TPortuguese } from "@/i18n/pt/home";
import { useLanguage } from "@/hooks/useLanguages";
import { TEnglish } from "@/i18n/en/home";
import { LanguageSelect } from "@/components/LanguageSelect";

interface RepositoriesProps {
  initialRepositories: Repository[];
  developerData: DeveloperProps;
  codeError: number;
}

export interface Repository {
  id: number;
  name: string;
  description?: string | null;
  language: string;
  html_url: string;
  created_at: string;
  public_repos: any[];
}

export default function Repositories({
  initialRepositories,
  developerData,
  codeError,
}: RepositoriesProps) {
  const [repositories, setRepositories] =
    useState<Repository[]>(initialRepositories);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [allLanguages, setAllLanguages] = useState<string[]>([]);
  const router = useRouter();
  const { language } = useLanguage();

  if (codeError) {
    return <Error statusCode={codeError} />;
  }

  const fetchRepositories = async (page: number, language: string) => {
    setLoading(true);

    try {
      const fetchedRepositories: Repository[] = await getRepositories(
        "azbito",
        page,
        12
      );

      let filteredRepositories = fetchedRepositories;
      if (language !== "all") {
        filteredRepositories = fetchedRepositories.filter(
          (repo) => repo.language === language
        );
      }

      filteredRepositories.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setRepositories(filteredRepositories);
    } catch (err) {
      console.error("Erro ao buscar repositórios:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllRepositories = async (language: string) => {
    setLoading(true);

    try {
      const fetchedRepositories: Repository[] =
        await getAllRepositories("azbito");

      let filteredRepositories = fetchedRepositories;
      if (language !== "all") {
        filteredRepositories = fetchedRepositories.filter(
          (repo) => repo.language === language
        );
      }

      filteredRepositories.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setRepositories(filteredRepositories);
    } catch (err) {
      console.error("Erro ao buscar repositórios:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllLanguages = async () => {
    try {
      const fetchedRepositories: Repository[] =
        await getAllRepositories("azbito");
      const languages = Array.from(
        new Set(
          fetchedRepositories.map((repo) => repo.language).filter(Boolean)
        )
      );

      setAllLanguages(languages);
    } catch (err) {
      console.error("Erro ao buscar linguagens:", err);
    }
  };

  useEffect(() => {
    if (selectedLanguage === "all") {
      fetchRepositories(currentPage, selectedLanguage);
    } else {
      fetchAllRepositories(selectedLanguage);
    }
  }, [currentPage, selectedLanguage]);

  useEffect(() => {
    fetchAllLanguages();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const language = event.target.value as string;
    setSelectedLanguage(language);
    setCurrentPage(1);
  };

  const humanLanguage = language === "en" ? TEnglish : TPortuguese;

  return (
    <>
      <LanguageSelect />
      <S.CenterColumnContainer>
        <S.FormContainer>
          <S.CustomFormControl>
            <S.CustomLabel id="language-select-label">
              {humanLanguage.languageTitle}
            </S.CustomLabel>
            <Select
              labelId="language-select-label"
              value={selectedLanguage}
              onChange={handleLanguageChange as any}
            >
              <MenuItem value="all">{humanLanguage.all}</MenuItem>
              {allLanguages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </S.CustomFormControl>
        </S.FormContainer>
        <S.GridContainer
          isRepositoryPage
          quantity="1fr"
          style={{
            width: "50%",
            margin: "0 auto",
          }}
        >
          {repositories &&
            repositories.map((item) => (
              <RepositoryCard
                key={item.id}
                title={item.name}
                description={item.description ?? humanLanguage.noDescription}
                language={item.language}
                link={item.html_url}
              />
            ))}
        </S.GridContainer>
        {selectedLanguage === "all" && (
          <S.ContainerFlex margin="5rem 0">
            <S.StyledPagination
              count={Math.ceil(developerData.public_repos / 12)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </S.ContainerFlex>
        )}
        <S.LinkContainer>
          <S.ItalicText>{humanLanguage.marketing}</S.ItalicText>
          <S.Link onClick={() => router.push(process.env.GITHUB || "")}>
            {humanLanguage.clickHere}
          </S.Link>
        </S.LinkContainer>
      </S.CenterColumnContainer>
      {loading && <LoadingModal />}
    </>
  );
}

export async function getStaticProps() {
  let fetchedRepositories: Repository[] = [];
  let fetchedDeveloperData = null;
  let isError = false;
  let codeError = null;

  try {
    const repositories = await getRepositories("azbito");
    const developerData = await getDeveloperInfo("azbito");

    if (Array.isArray(repositories)) {
      repositories.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      fetchedRepositories = repositories;
      fetchedDeveloperData = developerData;
    }
  } catch (error: any) {
    isError = true;
    codeError = error.response.status;
  }

  return {
    props: {
      initialRepositories: fetchedRepositories || [],
      developerData: fetchedDeveloperData || [],
      isError,
      codeError,
    },
  };
}
