function StatsCard({ title, value }) {
  return (
    <div className="card">
      <p
        style={{
          color: "#666",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>

      <h1>{value}</h1>
    </div>
  );
}

export default StatsCard;