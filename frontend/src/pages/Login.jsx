import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Page from "../components/Page";
import { mockApi } from "../services/mockApi";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!phone) return alert("Enter phone number");
    await mockApi.login(phone);
    navigate("/daily-log");
  };

  return (
    <Page
      title="SiteSync Login"
      subtitle="Secure access for site reporting"
    >
      <input
        className="w-full border rounded-xl p-3 mb-4"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-emerald-700 text-white p-3 rounded-xl font-semibold"
      >
        Login
      </button>
    </Page>
  );
}
