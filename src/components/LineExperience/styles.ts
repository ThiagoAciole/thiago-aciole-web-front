import styled from "styled-components";
import { Avatar, Flex, Text } from "@radix-ui/themes";

export const ExperienceWrapper = styled(Flex)`
  gap: 1rem;
  align-items: center;
`;

export const CompanyAvatar = styled(Avatar)`
  align-self: center;
`;

export const InfoWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

export const HeaderWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CompanyName = styled(Text)`
  font-weight: bold;
  font-size: 1rem;
`;

export const DateText = styled(Text)`
  color: gray;
  font-size: 0.75rem;
  white-space: nowrap;
  font-style: italic;
`;

export const JobText = styled(Text)`
  color: gray;
  font-size: 0.875rem;
`;
