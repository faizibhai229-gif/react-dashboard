import React from 'react';
import ChartContainer from './ChartContainer';
import DataTable from './DataTable';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { salesData, userData, productData } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="dashboard-grid">
        <ChartContainer title="Sales Performance">
          <BarChart data={salesData} />
        </ChartContainer>
        
        <ChartContainer title="User Growth">
          <LineChart data={userData} />
        </ChartContainer>
        
        <ChartContainer title="Product Distribution">
          <PieChart data={productData} />
        </ChartContainer>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Transaction Data</h2>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;