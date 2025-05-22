// pages/Dashboard.jsx
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Charts from '../components/charts/Charts';

const Dashboard = () => {
  return (
    <div className='px-4'>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* <BarChart
        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
        series={[{ data: [4, 3, 5] }]}
        width={500}
        height={300}
      /> */}
      {/* <Charts/> */}
    </div>
  );
};

export default Dashboard;