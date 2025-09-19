import styled from "styled-components";
import { Flex, Text } from "@radix-ui/themes";

export const ProfilerWrapper = styled(Flex)`
  gap: 1rem; /* equivalente a gap="4" */
  flex-direction: column;
  padding: 4px;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const NameWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.25rem;
`;

export const NameText = styled(Text)`
  font-weight: bold;
  font-size: 1.5rem; 
`;

export const IdText = styled(Text)`
  color: gray;
  font-size: 0.875rem; 
`;

export const DescriptionText = styled(Text)`
  color: gray;
  max-width: 400px;
  font-size: clamp(0.875rem, 2vw, 1rem); 
`;

export const InfoWrapper = styled(Flex)`
  gap: 1rem; 
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const InfoItem = styled(Flex)`
  gap: 0.5rem;
  align-items: center;
`;

export const InfoText = styled(Text)`
  color: gray;
  font-size: 0.875rem; 
`;
