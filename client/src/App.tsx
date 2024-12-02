import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import HomePage from "./pages/landing/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";


const App = () => {
  return (
      <Router>
          <Routes>
              {/* Public Routes (with Header and Footer) */}
              <Route
                  path="/"
                  element={
                      <MainLayout>
                          <HomePage />
                      </MainLayout>
                  }
              />
              {/* Authentication Routes (without Header and Footer) */}
              <Route
                  path="/login"
                  element={
                      <AuthLayout>
                          <LoginPage />
                      </AuthLayout>
                  }
              />
              <Route
                  path="/register"
                  element={
                      <AuthLayout>
                          <RegisterPage />
                      </AuthLayout>
                  }
              />
          </Routes>
      </Router>
  );
};

export default App;
