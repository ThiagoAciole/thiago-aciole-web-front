import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { useTheme } from "../../context/ThemeContext";
import { HeaderWrapper, Spacer, ThemeButton } from "./styles";
import { LogoDark, LogoLight } from "../../assets";
export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <Spacer />
      <img
        src={theme === "dark" ? LogoDark : LogoLight}
        alt="Logo dark"
        width={120}
      />
      <ThemeButton variant="soft" onClick={toggleTheme}>
        {theme === "dark" ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
      </ThemeButton>
    </HeaderWrapper>
  );
}
