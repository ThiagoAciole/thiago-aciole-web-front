import styled from "styled-components";
import { Button } from "@radix-ui/themes";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gray-6);
  gap: 8px;
`;

export const Spacer = styled.div`
  width: 40px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  text-align: center;
  text-wrap: nowrap;
`;

export const ThemeButton = styled(Button)`
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--gray-12);
  padding: 8px;
  margin: 2px;
`;
