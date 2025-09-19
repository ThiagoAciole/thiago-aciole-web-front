import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramLine,
} from "@remixicon/react";

export interface SocialLink {
  href: string;
  icon: React.ElementType;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/thiago-aciole/",
    icon: RiLinkedinFill,
  },
  {
    href: "https://github.com/ThiagoAciole",
    icon: RiGithubFill,
  },
  {
    href: "https://www.instagram.com/thiago.aciole/",
    icon: RiInstagramLine,
  },
];
