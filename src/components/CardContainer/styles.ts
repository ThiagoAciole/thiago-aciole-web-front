import styled from "styled-components";
import { Box, Card, Flex, Text } from "@radix-ui/themes";

export const StyledBox = styled(Box)`
  margin: 0 auto;
  padding: 6px;
  width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const TitleWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;

export const TitleText = styled(Text)`
  margin-top: 10px;
  margin-bottom: 12px;
  display: block;
  text-align: center;
  font-weight: bold;
`;
