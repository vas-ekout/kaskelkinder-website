import { Routes, Route } from "react-router-dom";
import { CssBaseline, styled } from "@mui/material";
import "./style.css";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/HomePage";
import { useGetPagePadding } from "./hooks/useGetPagePadding";
import { Footer } from "./components/footer/Footer";

const PageWrapper = styled("div")(() => ({
  maxWidth: "1900px",
  margin: "0 auto",
}));

const App = () => {
  const { pagePadding } = useGetPagePadding();

  const MainContainer = styled("main")(() => ({
    marginInline: pagePadding,
    paddingBottom: 200,
  }));

  return (
    <CssBaseline>
      <PageWrapper className="page-wrapper">
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainContainer>
        <Footer />
      </PageWrapper>
    </CssBaseline>
  );
};

export default App;
