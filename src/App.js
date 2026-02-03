import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
      </header>
      <main className="p-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;