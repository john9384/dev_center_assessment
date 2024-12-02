import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/auth/Login"
import RegisterPage from "./pages/auth/Register"
import HomePage from "./pages/HomePage"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/globalStyles"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
