import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Breeds, Error } from "./pages";
import { Navbar } from "./components";
import { AppProvider } from "./context";
import { Suspense } from "react";
import Loading from "./components/Loading";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Router>
          <Navbar />
          <Suspense fallback={<Loading />}></Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catbreeds" element={<Breeds />} />
            <Route path="/catbreeds/:page" element={<Breeds />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
