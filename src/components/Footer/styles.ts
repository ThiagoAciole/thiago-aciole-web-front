import styled from "styled-components";
import { Box, Flex, Text } from "@radix-ui/themes";

export const StyledFooterBox = styled(Box)`
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--gray-6);
`;

export const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Text)`
  font-size: 0.875rem;
  color: gray;
`;
