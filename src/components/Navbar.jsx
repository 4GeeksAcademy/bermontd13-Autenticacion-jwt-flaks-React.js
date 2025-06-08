import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    alert("Sesión cerrada 😎");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/signup">Registro</Link>
      <Link style={styles.link} to="/login">Login</Link>
      <Link style={styles.link} to="/private">Zona Privada</Link>

      {token && (
        <button style={styles.button} onClick={handleLogout}>
          Cerrar sesión
        </button>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: "1rem"
  },
  button: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer"
  }
};

export default Navbar;
