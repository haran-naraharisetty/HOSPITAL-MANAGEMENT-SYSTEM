import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';
import AppointmentList from './components/AppointmentList';
import { mockPatients, mockDoctors, mockAppointments } from './data/mockData';
import { DashboardStats } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Calculate dashboard statistics
  const stats: DashboardStats = {
    totalPatients: mockPatients.length,
    totalDoctors: mockDoctors.length,
    todayAppointments: mockAppointments.filter(
      apt => apt.date === new Date().toISOString().split('T')[0]
    ).length,
    emergencyCases: mockPatients.filter(patient => patient.status === 'Critical').length
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} />;
      case 'patients':
        return <PatientList patients={mockPatients} />;
      case 'doctors':
        return <DoctorList doctors={mockDoctors} />;
      case 'appointments':
        return <AppointmentList appointments={mockAppointments} />;
      default:
        return <Dashboard stats={stats} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;