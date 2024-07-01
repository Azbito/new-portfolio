import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as BoxIcon from "react-icons/bi";
import * as Bootstrap from "react-icons/bs";
import * as SimpleIcon from "react-icons/si";
import * as RemixIcon from "react-icons/ri";

interface TechIconsProps {
  [key: string]: JSX.Element;
}

const TechIcons: TechIconsProps = {
  JavaScript: <RemixIcon.RiJavascriptFill />,
  TypeScript: <BoxIcon.BiLogoTypescript />,
  "C++": <BoxIcon.BiLogoCPlusPlus />,
  Dart: <SimpleIcon.SiDart />,
  Lua: <SimpleIcon.SiLua />,
  Python: <FontAwesome.FaPython />,
  ReactJS: <FontAwesome.FaReact />,
  NextJS: <RemixIcon.RiNextjsFill />,
  AssemblyX86: <SimpleIcon.SiAssemblyscript />,
  VueJS: <FontAwesome.FaVuejs />,
  Electron: <SimpleIcon.SiElectron />,
  NodeJS: <FontAwesome.FaNodeJs />,
  Fastify: <SimpleIcon.SiFastify />,
  Prisma: <SimpleIcon.SiPrisma />,
  SQL: <Bootstrap.BsFiletypeSql />,
  GraphQL: <BoxIcon.BiLogoGraphql />,
  Redux: <BoxIcon.BiLogoRedux />,
  SCSS: <FontAwesome.FaSass />,
  StyledComponents: <SimpleIcon.SiStyledcomponents />,
  TailwindCSS: <SimpleIcon.SiTailwindcss />,
  Firebase: <BoxIcon.BiLogoFirebase />,
  MongoDB: <BoxIcon.BiLogoMongodb />,
  PostgreSQL: <BoxIcon.BiLogoPostgresql />,
  AWS: <FontAwesome.FaAws />,
};

export const iconsArray = Object.entries(TechIcons).map(
  ([techName, iconComponent], index) => ({
    techName,
    iconComponent,
  })
);

export const getIconForLanguage = (language: string): JSX.Element | null => {
  return TechIcons[language] || null;
};
