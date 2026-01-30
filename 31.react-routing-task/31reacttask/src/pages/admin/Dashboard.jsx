import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={statBox}>
          <h3>Total Products</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{data.length}</p>
        </div>
        <div style={statBox}>
          <h3>Total Stock</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {data.reduce((acc, curr) => acc + curr.stock, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

const statBox = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#f8f9fa",
  border: "1px solid #dee2e6",
  borderRadius: "8px"
};

export default Dashboard;