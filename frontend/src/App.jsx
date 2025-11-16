import React, { useState } from "react";
import { login, getStats } from "./api";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

export default function App(){
  const [token, setToken] = useState("");
  const [stats, setStats] = useState(null);

  async function handleLogin(username, password){
    const { access_token } = await login(username, password);
    setToken(access_token);
    const data = await getStats(access_token);
    setStats(data);
  }

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">SIAG Webapp Demo PRO</h1>
      {!token 
        ? <LoginForm onLogin={handleLogin} />
        : <Dashboard stats={stats} />}
    </div>
  );
}
