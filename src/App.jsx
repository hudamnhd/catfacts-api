import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CatBreeds, ErrorPage } from "./pages";
import { Navbar } from "./components";
import { AppProvider } from "./store";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catbreeds/:page" element={<CatBreeds />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
