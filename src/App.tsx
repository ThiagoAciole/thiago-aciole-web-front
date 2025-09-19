import { Footer } from "./components";
import { Profiler, Experience, Skills } from "./modules";
import { AppWrapper, ContentGrid } from "./App.styles";

export default function App() {
  return (
    <>
      <AppWrapper>
        <Profiler />
        <ContentGrid>
          <Experience />
          <Skills />
        </ContentGrid>
      </AppWrapper>
      <Footer />
    </>
  );
}
