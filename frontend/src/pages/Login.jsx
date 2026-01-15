import { useNavigate } from "react-router-dom";
import { mockApi } from "../services/mockApi";
import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await mockApi.login(phone);
    navigate("/daily-log");
  };

  return (
    <div>
      <h2>SiteSync Login</h2>
      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
