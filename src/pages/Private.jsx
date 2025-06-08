import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const [msg, setMsg] = useState("Cargando...");
  const navigate = useNavigate();
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("No tienes sesión activa, compa.");
      navigate("/login");
      return;
    }

    fetch(`${backendURL}/api/private`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Token inválido o expirado");
        return res.json();
      })
      .then((data) => {
        setMsg(data.msg || "Bienvenido a la zona privada 🚀");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Sesión inválida. Redirigiendo...");
        sessionStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h2>Zona Protegida 🛡️</h2>
      <p>{msg}</p>
    </div>
  );
};

export default Private;
