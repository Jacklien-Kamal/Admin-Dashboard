// pages/Dashboard.jsx
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* <BarChart
        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
        series={[{ data: [4, 3, 5] }]}
        width={500}
        height={300}
      /> */}
    </div>
  );
};

export default Dashboard;