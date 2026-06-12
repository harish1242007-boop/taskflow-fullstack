function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>TaskFlow</h2>

      <button
        onClick={logout}
        style={{
          background: "white",
          color: "#2563eb",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;