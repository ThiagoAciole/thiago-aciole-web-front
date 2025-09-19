import styled from "styled-components";
import { Flex, Text, Progress } from "@radix-ui/themes";

export const SkillWrapper = styled(Flex)`
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

export const InfoWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-bottom: 4px;
`;

export const StackText = styled(Text)`
  color: gray;
  font-size: 0.875rem;
`;

export const SkillProgress = styled(Progress)`
  width: 100%;

`;
