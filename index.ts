export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  address: string;
  bloodType: string;
  emergencyContact: string;
  admissionDate: string;
  status: 'Active' | 'Discharged' | 'Critical';
  assignedDoctor: string;
  medicalHistory: MedicalRecord[];
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  experience: number;
  patients: number;
  status: 'Available' | 'Busy' | 'Off Duty';
  schedule: string[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'Consultation' | 'Follow-up' | 'Emergency' | 'Surgery';
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  notes?: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  medications: string[];
  doctorName: string;
  notes: string;
}

export interface DashboardStats {
  totalPatients: number;
  totalDoctors: number;
  todayAppointments: number;
  emergencyCases: number;
}