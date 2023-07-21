import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ListMovie from "./Components/ListMovie";
import DetailMovie from "./Components/DetailMovie";
import NotFoundPage from "./Pages/404Page";
import TabsMovie from "./Components/TabsMovie";
import Footer from "./Components/Footer";
import Spinner from "./Components/Spinner";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout contentPage={<HomePage />} />} />
          <Route
            path="/login"
            element={<Layout contentPage={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<Layout contentPage={<RegisterPage />} />}
          />
          <Route path="/list-movie" element={<ListMovie />} />
          <Route path="/tabs-movie" element={<TabsMovie />} />
          <Route
            path="/detail/:id"
            element={<Layout contentPage={<DetailMovie />} />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
