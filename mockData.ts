import { Patient, Doctor, Appointment, MedicalRecord } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    phone: '+1-555-0101',
    email: 'john.smith@email.com',
    address: '123 Main St, City, State 12345',
    bloodType: 'O+',
    emergencyContact: '+1-555-0102',
    admissionDate: '2024-01-15',
    status: 'Active',
    assignedDoctor: 'Dr. Sarah Wilson',
    medicalHistory: [
      {
        id: '1',
        date: '2024-01-15',
        diagnosis: 'Hypertension',
        treatment: 'Medication and lifestyle changes',
        medications: ['Lisinopril', 'Hydrochlorothiazide'],
        doctorName: 'Dr. Sarah Wilson',
        notes: 'Patient responding well to treatment'
      }
    ]
  },
  {
    id: '2',
    name: 'Emily Johnson',
    age: 32,
    gender: 'Female',
    phone: '+1-555-0201',
    email: 'emily.johnson@email.com',
    address: '456 Oak Ave, City, State 12345',
    bloodType: 'A-',
    emergencyContact: '+1-555-0202',
    admissionDate: '2024-01-18',
    status: 'Critical',
    assignedDoctor: 'Dr. Michael Brown',
    medicalHistory: [
      {
        id: '2',
        date: '2024-01-18',
        diagnosis: 'Pneumonia',
        treatment: 'Antibiotic therapy and rest',
        medications: ['Azithromycin', 'Albuterol'],
        doctorName: 'Dr. Michael Brown',
        notes: 'Patient in critical condition, requires monitoring'
      }
    ]
  },
  {
    id: '3',
    name: 'Robert Davis',
    age: 28,
    gender: 'Male',
    phone: '+1-555-0301',
    email: 'robert.davis@email.com',
    address: '789 Pine Rd, City, State 12345',
    bloodType: 'B+',
    emergencyContact: '+1-555-0302',
    admissionDate: '2024-01-20',
    status: 'Discharged',
    assignedDoctor: 'Dr. Lisa Anderson',
    medicalHistory: [
      {
        id: '3',
        date: '2024-01-20',
        diagnosis: 'Fractured wrist',
        treatment: 'Cast application and physiotherapy',
        medications: ['Ibuprofen'],
        doctorName: 'Dr. Lisa Anderson',
        notes: 'Full recovery expected in 6-8 weeks'
      }
    ]
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialization: 'Cardiology',
    phone: '+1-555-1001',
    email: 'sarah.wilson@hospital.com',
    experience: 12,
    patients: 45,
    status: 'Available',
    schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday']
  },
  {
    id: '2',
    name: 'Dr. Michael Brown',
    specialization: 'Pulmonology',
    phone: '+1-555-1002',
    email: 'michael.brown@hospital.com',
    experience: 8,
    patients: 32,
    status: 'Busy',
    schedule: ['Monday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: '3',
    name: 'Dr. Lisa Anderson',
    specialization: 'Orthopedics',
    phone: '+1-555-1003',
    email: 'lisa.anderson@hospital.com',
    experience: 15,
    patients: 28,
    status: 'Available',
    schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday']
  },
  {
    id: '4',
    name: 'Dr. David Martinez',
    specialization: 'Emergency Medicine',
    phone: '+1-555-1004',
    email: 'david.martinez@hospital.com',
    experience: 6,
    patients: 67,
    status: 'Off Duty',
    schedule: ['Monday', 'Tuesday', 'Friday', 'Saturday']
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Smith',
    doctorId: '1',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-01-25',
    time: '10:00 AM',
    type: 'Follow-up',
    status: 'Scheduled',
    notes: 'Hypertension check-up'
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Emily Johnson',
    doctorId: '2',
    doctorName: 'Dr. Michael Brown',
    date: '2024-01-25',
    time: '2:30 PM',
    type: 'Emergency',
    status: 'Scheduled',
    notes: 'Respiratory distress'
  },
  {
    id: '3',
    patientId: '3',
    patientName: 'Robert Davis',
    doctorId: '3',
    doctorName: 'Dr. Lisa Anderson',
    date: '2024-01-24',
    time: '11:15 AM',
    type: 'Consultation',
    status: 'Completed',
    notes: 'Post-surgery check-up'
  }
];