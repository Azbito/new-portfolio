import * as BoxIcon from "react-icons/bi";
import * as FontAwesome from "react-icons/fa";
import * as SimpleIcon from "react-icons/si";
import * as RemixIcon from "react-icons/ri";
import { RepositoriesProps } from "@/_types/repositories";

export const mainRepositories: RepositoriesProps[] = [
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "FindGyms",
    description:
      "A backend application to find near gyms, and checkout, authenticate students according to their real-time position. It was also developped by using SOLID methodology",
    link: "https://github.com/Azbito/nodejs-solid",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "JWT & AWS S3 practice",
    description: "Created in order to practice CRUD, JWT and AWS S3",
    link: "https://github.com/Azbito/forum-jwt-study",
  },
  {
    language: <RemixIcon.RiJavascriptFill />,
    technology: <RemixIcon.RiNextjsFill />,
    title: "AWS Amplify & GraphQL",
    description:
      "Repository to learn more about Amazon services — Amplify with GraphQL",
    link: "https://github.com/Azbito/amplify-graphql-study",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <FontAwesome.FaReact />,
    title: "Starship",
    description:
      "It's an API Rest practice! The API was made by my brother Marcos Roque",
    link: "https://github.com/Azbito/Starship",
  },
];
