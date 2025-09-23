import { Footer, Header } from "../components";
import { useTheme } from "../context/ThemeContext";
import { Profiler, Experience, Skills } from "../modules";
import { AppWrapper, ContentGrid } from "./styles";
import { Theme } from "@radix-ui/themes";

export default function App() {
  const { theme } = useTheme();
  return (
    <Theme
      accentColor="gray"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      appearance={theme}
    >
      <Header />
      <AppWrapper>
        <Profiler />
        <ContentGrid>
          <Experience />
          <Skills />
        </ContentGrid>
      </AppWrapper>
      <Footer />
    </Theme>
  );
}
