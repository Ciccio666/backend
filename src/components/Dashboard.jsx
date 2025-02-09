import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://f8133c25-84d9-4eb8-8542-0833f7f7ce08-00-1cmjya03svdv8.janeway.replit.dev";

const Dashboard = () => {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetchHealthData();
  }, []);

  const fetchHealthData = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/`);
      setHealthData(data);
    } catch (error) {
      console.error("Error fetching system health:", error);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">📊 System Health Dashboard</h1>
      {healthData && (
        <p className="mt-4">{healthData.status}</p>
      )}
    </div>
  );
};

export default Dashboard;
