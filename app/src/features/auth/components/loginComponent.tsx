import React, { useState } from "react";
import { useAuth } from "../authContext";

const LoginComponent: React.FC = () => {
  const { login, register, loading, error } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      await register(email, password);
      alert("Registration successful! Please log in.");
      setIsRegister(false);
    } else {
      await login(email, password);
      alert("Login successful!");
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading
            ? isRegister
              ? "Registering..."
              : "Logging in..."
            : isRegister
            ? "Register"
            : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p
        onClick={() => setIsRegister(!isRegister)}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {isRegister
          ? "Already have an account? Log in"
          : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default LoginComponent;
