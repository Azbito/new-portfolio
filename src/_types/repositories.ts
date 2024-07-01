import { ReactNode } from "react";

export interface RepositoriesProps {
  language?: ReactNode | string | undefined;
  technology?: ReactNode;
  title: string;
  description: string;
  link: string;
}
