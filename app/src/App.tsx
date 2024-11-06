import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./features/auth/authContext";
import LoginComponent from "./features/auth/components/loginComponent";
import RegisterComponent from "./features/auth/components/registerComponent";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
