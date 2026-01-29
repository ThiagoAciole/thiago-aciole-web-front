import { StyledAvatar, AvatarWrapper } from "./styles";

export const AvatarProfiler = () => {
  return (
    <AvatarWrapper>
      <StyledAvatar
        size="9"
        src="https://avatars.githubusercontent.com/u/64097786?v=4"
        alt="Thiago Aciole"
        radius="full"
        fallback="T"
      />
    </AvatarWrapper>
  );
};
