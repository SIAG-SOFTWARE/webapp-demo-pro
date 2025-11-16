import React, { useState } from "react";

export default function LoginForm({ onLogin }){
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="max-w-sm">
      <input
        className="border p-2 w-full mb-2"
        placeholder="username"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="password"
        type="password"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white p-2 w-full"
        onClick={() => onLogin(user, pw)}
      >
        Login
      </button>
    </div>
  );
}
