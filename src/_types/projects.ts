import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProjectsProps {
  id: number;
  image?: StaticImageData;
  name: string;
  description: string;
  used_technologies: ReactNode[];
  public_link?: string;
}
