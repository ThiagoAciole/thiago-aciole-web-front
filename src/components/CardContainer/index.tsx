import type { ReactNode } from "react";
import { StyledBox, StyledCard, TitleWrapper, TitleText } from "./styles";

interface CardContainerProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export const CardContainer = ({
  children,
  title,
  icon,
}: CardContainerProps) => {
  return (
    <StyledBox>
      <StyledCard size="2">
        {title && (
          <TitleWrapper>
            {icon}
            <TitleText size="4">{title}</TitleText>
          </TitleWrapper>
        )}
        {children}
      </StyledCard>
    </StyledBox>
  );
};
