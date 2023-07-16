import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ListMovie from "./Components/ListMovie";
import DetailMovie from "./Components/DetailMovie";
import NotFoundPage from "./Pages/404Page";
import TabsMovie from "./Components/TabsMovie";
import Footer from "./Components/Footer";
import Spinner from "./Components/Spinner";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list-movie" element={<ListMovie />} />
          <Route path="/tabs-movie" element={<TabsMovie />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
