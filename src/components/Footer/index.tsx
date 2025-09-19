import { StyledFooterBox, StyledFlex, StyledText } from "./styles";

export const Footer = () => {
  return (
    <StyledFooterBox>
      <StyledFlex>
        <StyledText>© {new Date().getFullYear()} Thiago Aciole</StyledText>
      </StyledFlex>
    </StyledFooterBox>
  );
};
