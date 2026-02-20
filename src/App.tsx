import { CssBaseline, Divider, styled } from "@mui/material";
import "./style.css";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/HomePage";
import { useGetPagePadding } from "./hooks/useGetPagePadding";
import { Footer } from "./components/footer/Footer";
import { ConceptPage } from "./pages/ConceptPage";
import { TeamPage } from "./pages/TeamPage";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { InitiativePage } from "./pages/InitiativePage";
import { ContactPage } from "./pages/ContactPage";

const PageWrapper = styled("div")(() => ({
  maxWidth: "1900px",
  margin: "0 auto",
}));

const App = () => {
  const { pagePadding } = useGetPagePadding();

  const MainContainer = styled("main")(() => ({
    marginInline: pagePadding,
    paddingBottom: 200,
    minHeight: "calc(100vh - 400px)",
    display: "flex",
    flexDirection: "column",
    gap: 100,
  }));

  return (
    <CssBaseline>
      <PageWrapper className="page-wrapper">
        <ScrollToTopButton />
        <Header id="home" />
        <MainContainer>
          <section>
            <HomePage />
          </section>
          <Divider />
          <section id="concept">
            <ConceptPage />
          </section>
          <Divider />
          <section id="team">
            <TeamPage />
          </section>
          <Divider />
          <section id="facilities">
            <FacilitiesPage />
          </section>
          <Divider />
          <section id="parents-initiative">
            <InitiativePage />
          </section>
          <Divider />
          <section id="contact">
            <ContactPage />
          </section>
        </MainContainer>
        <Footer />
      </PageWrapper>
    </CssBaseline>
  );
};

export default App;
