import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import NotfoundPage from "./pages/NotfoundPage";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const OurWorksPage = lazy(() => import("./pages/OurWorksPage"));

function Loading() {
  return <p>Loading ...</p>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-works" element={<OurWorksPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
