import React, { useState, useEffect } from "react";
import * as S from "@/styles/elements/styled-components";
import { RepositoryCard } from "@/components/RepositoryCard";
import {
  DeveloperProps,
  getDeveloperInfo,
  getRepositories,
} from "@/_services/github";
import type { GetServerSideProps } from "next";
import { Cookies } from "react-cookie";
import { Pagination } from "@mui/material";
import Error from "@/pages/_error";
import { LoadingModal } from "@/components/LoadingModal";

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

  if (codeError) {
    return <Error statusCode={codeError} />;
  }

  const fetchRepositories = async (page: number) => {
    setLoading(true);

    try {
      const fetchedRepositories: Repository[] = await getRepositories(
        "azbito",
        page,
        12
      );

      fetchedRepositories.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setRepositories(fetchedRepositories);
    } catch (err) {
      console.error("Erro ao buscar repositórios:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories(currentPage);
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <S.CenterColumnContainer>
        <S.ContainerFlex>
          <S.GridContainer
            isRepositoryPage
            quantity="1fr 1fr 1fr"
            style={{
              width: "50%",
            }}
          >
            {repositories &&
              repositories.map((item) => (
                <RepositoryCard
                  key={item.id}
                  title={item.name}
                  description={
                    item.description ??
                    "There's no description, but it looks interesting! c:"
                  }
                  language={item.language}
                  link={item.html_url}
                />
              ))}
          </S.GridContainer>
        </S.ContainerFlex>
        <S.ContainerFlex margin="5rem 0">
          <S.StyledPagination
            count={Math.ceil(developerData.public_repos / 12)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </S.ContainerFlex>
      </S.CenterColumnContainer>
      {loading && <LoadingModal />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = new Cookies(req);
  let fetchedRepositories = [];
  let fetchedDeveloperData = null;
  let isError = false;
  let codeError = null;

  const cookieRepositories = cookies.get("repositories");
  const cookieDeveloper = cookies.get("developer");

  if (cookieRepositories && cookieDeveloper) {
    fetchedRepositories = JSON.parse(cookieRepositories);
    fetchedDeveloperData = JSON.parse(cookieDeveloper);
  } else {
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

        cookies.set("repositories", JSON.stringify(fetchedRepositories), {
          path: "/",
        });
        cookies.set("developer", JSON.stringify(fetchedDeveloperData), {
          path: "/",
        });
      }
    } catch (error: any) {
      isError = true;
      codeError = error.response.status;
    }
  }

  return {
    props: {
      initialRepositories: fetchedRepositories || [],
      developerData: fetchedDeveloperData || [],
      isError,
      codeError,
    },
  };
};
