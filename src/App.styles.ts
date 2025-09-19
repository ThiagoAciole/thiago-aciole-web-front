import styled from "styled-components";
import { Flex, Grid } from "@radix-ui/themes";

export const AppWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  gap: 1.5rem;
`;

export const ContentGrid = styled(Grid)`
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  gap: 1rem;
  width: 100%;
  justify-content: center;
`;
