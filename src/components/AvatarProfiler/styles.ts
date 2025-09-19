import styled, { keyframes } from "styled-components";
import { Avatar } from "@radix-ui/themes";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 2px;

  background: linear-gradient(-45deg, #510ed7, #2d47fe, #b700ff, #b75ad7);
  background-size: 400% 400%;
  animation: ${gradient} 8s ease infinite;
`;

export const StyledAvatar = styled(Avatar)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: black;
`;
