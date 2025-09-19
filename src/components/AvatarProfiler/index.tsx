import { StyledAvatar, AvatarWrapper } from "./styles";

export const AvatarProfiler = () => {
  return (
    <AvatarWrapper>
      <StyledAvatar
        size="9"
        src="/profiler.png"
        alt="Thiago Aciole"
        radius="full"
        fallback="T"
      />
    </AvatarWrapper>
  );
};
