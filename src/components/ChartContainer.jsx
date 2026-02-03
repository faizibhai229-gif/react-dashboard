import React from 'react';

const ChartContainer = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="h-80">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;