'use client';

import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Building2,
    Search,
    Award,
    CheckCircle2,
} from 'lucide-react';
import styles from './StudentPlacementRecords.module.css';

export interface PlacementRecord {
    sNo: number;
    name: string;
    program: 'B.Pharm' | 'Pharm.D';
    batch: '2025-2026' | '2024-2025' | 'Pharm.D';
    batchLabel: string;
    company: string;
    position: string;
    salary: string;
    salaryType: 'monthly' | 'annual' | 'higher_studies';
    location?: string;
}

const allPlacementRecords: PlacementRecord[] = [
    // --- B-PHARMACY 2025-2026 BATCH (23 records) ---
    {
        sNo: 1,
        name: 'Chandrakala',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Modren (Motocem)',
        position: 'Quality Control (QC)',
        salary: '₹14,500 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 2,
        name: 'Vijaya Bhaskar',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hetero Drugs Ltd.',
        position: 'Production',
        salary: '₹16,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 3,
        name: 'Obulesu',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hetero Drugs Ltd.',
        position: 'Production',
        salary: '₹16,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 4,
        name: 'Pavan Kumar',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hetero Drugs Ltd.',
        position: 'Data Entry & Documentation',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 5,
        name: 'Prasanthi',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hospital Division',
        position: 'Hospital Pharmacist',
        salary: '₹15,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 6,
        name: 'Neeraja',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hospital Division',
        position: 'Hospital Pharmacist',
        salary: '₹15,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 7,
        name: 'Bindu Priya',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Hospital Division',
        position: 'Hospital Pharmacist',
        salary: '₹15,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 8,
        name: 'J. Savani',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Modren',
        position: 'Quality Control (QC)',
        salary: '₹16,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 9,
        name: 'B. Indra Kumar',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 10,
        name: 'Shiva Kumar',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 11,
        name: 'Ramesh Babu',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 12,
        name: 'Nagarjuna',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 13,
        name: 'Akash',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 14,
        name: 'Phanendra',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 15,
        name: 'Paramdhaman',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 16,
        name: 'Gunavardhan',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 17,
        name: 'Ganesh',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 18,
        name: 'Thaneja',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 19,
        name: 'Lavanya',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 20,
        name: 'Pavithra',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Optival Health Solutions (MedPlus)',
        position: 'Hospital / Retail Pharmacist',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 21,
        name: 'Raja',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Modren',
        position: 'Quality Control (QC)',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 22,
        name: 'Padmalatha',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'Modren',
        position: 'Quality Control (QC)',
        salary: '₹24,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 23,
        name: 'Chandramouli',
        program: 'B.Pharm',
        batch: '2025-2026',
        batchLabel: 'B.Pharm (2025–2026)',
        company: 'GreenTech',
        position: 'Quality Assurance (QA)',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },

    // --- B-PHARMACY 2024-2025 BATCH (25 records) ---
    {
        sNo: 24,
        name: 'B. Srivishnu',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Apollo Pharmacy',
        position: 'Hospital Pharmacist',
        salary: '₹15,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 25,
        name: 'Bontha Hemanth Kumar Reddy',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'MedPlus',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 26,
        name: 'Boya Sai Sandhya',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Sonic',
        position: 'Medical Representative (MR)',
        salary: '₹25,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 27,
        name: 'Daali Kalyani',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Omega Healthcare',
        position: 'Medical Coding Executive',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 28,
        name: 'D. Manjunatha',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'MedPlus',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 29,
        name: 'D. Anand Kumar',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Hetero Drugs Ltd.',
        position: 'Quality Control (QC)',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 30,
        name: 'D. Kamya Mishra',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Sonic',
        position: 'Medical Representative (MR)',
        salary: '₹70,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 31,
        name: 'G. Sreenivasulu',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'MedPlus',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 32,
        name: 'K. Mukesh Kumar',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'MedPlus',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 33,
        name: 'Kaki Vinay',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Apollo Pharmacy',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 34,
        name: 'Kambam Sailaja',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Mahadev Pharmacy',
        position: 'Hospital Pharmacist',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 35,
        name: 'Kamsani Vikas',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Global Hospital',
        position: 'Hospital Pharmacist',
        salary: '₹23,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 36,
        name: 'Katam Rajesh',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Giyan Pharma',
        position: 'Production Executive',
        salary: '₹18,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 37,
        name: 'M. Lakshmi',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Hetero Drugs Ltd.',
        position: 'Quality Control (QC)',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 38,
        name: 'Parla Sekhar',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Hetero Drugs Ltd.',
        position: 'Quality Control (QC)',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 39,
        name: 'P. Khaja Jameer',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Sai Reka Pharma',
        position: 'Hospital Pharmacist',
        salary: '₹18,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 40,
        name: 'Potla Srividya',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Hetero Drugs Ltd.',
        position: 'Quality Assurance (QA)',
        salary: '₹25,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 41,
        name: 'Reddy Sai Teja',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Cleveland Pharma',
        position: 'Production Executive',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 42,
        name: 'S. Divyabhavani',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'QCode Healthcare Solutions',
        position: 'Medical Coding Specialist',
        salary: '₹25,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 43,
        name: 'Shaik Abdur Raqeeb',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'QCode Healthcare Solutions',
        position: 'Medical Coding Specialist',
        salary: '₹25,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 44,
        name: 'Syed Rubeena',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Sai Reka Pharma',
        position: 'Hospital Pharmacist',
        salary: '₹18,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 45,
        name: 'Talluru Hemasri',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Therdose Pharma',
        position: 'Production Executive',
        salary: '₹20,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 46,
        name: 'Thirumalasetty Poornima',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Global Hospital',
        position: 'Hospital Pharmacist',
        salary: '₹23,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 47,
        name: 'V. Mounika',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Hetero Drugs Ltd.',
        position: 'Quality Assurance (QA)',
        salary: '₹25,000 / month',
        salaryType: 'monthly',
    },
    {
        sNo: 48,
        name: 'V. Yuva Santhosh',
        program: 'B.Pharm',
        batch: '2024-2025',
        batchLabel: 'B.Pharm (2024–2025)',
        company: 'Cleveland Pharma',
        position: 'Production Executive',
        salary: '₹30,000 / month',
        salaryType: 'monthly',
    },

    // --- PHARM.D STUDENT PLACEMENTS (19 records) ---
    {
        sNo: 49,
        name: 'S. Hemanth',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Veda Hospital, Nellore',
        position: 'Duty Doctor (Assistant Physician)',
        salary: '₹6,00,000 / annum (₹6.0 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 50,
        name: 'D. Dhayavathi',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Naurvi Hospital, Vellore',
        position: 'Clinical Pharmacist',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Vellore',
    },
    {
        sNo: 51,
        name: 'K. Hemanth',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Malla Reddy Hospital, Hyderabad',
        position: 'Duty Doctor',
        salary: '₹3,50,000 / annum (₹3.5 LPA)',
        salaryType: 'annual',
        location: 'Hyderabad',
    },
    {
        sNo: 52,
        name: 'V. Sheela Rani',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'KBRH Orthopedics Hospital, Nellore',
        position: 'Duty Doctor',
        salary: '₹2,40,000 / annum (₹2.4 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 53,
        name: 'P. V. Hemanth',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Ravi Clinic, Nellore',
        position: 'Duty Doctor (Assistant Physician)',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 54,
        name: 'S. Karthik',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Coventry University, UK',
        position: 'Master’s – Pharmacology & Drug Discovery',
        salary: 'Higher Studies (UK)',
        salaryType: 'higher_studies',
        location: 'United Kingdom',
    },
    {
        sNo: 55,
        name: 'P. Karthik Reddy',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'SASTRA College of Pharmaceutical Sciences',
        position: 'Assistant Professor',
        salary: '₹2,50,000 / annum (₹2.5 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 56,
        name: 'D. Raju',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Medicover Hospital, Nellore',
        position: 'Duty Medical Officer (DMO)',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 57,
        name: 'T. Sai Kumar',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'KIMS Hospital, Nellore',
        position: 'Assistant Physician',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 58,
        name: 'Dr. Aravind Kumar',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Megha Hospital, Hyderabad',
        position: 'Clinical Pharmacist',
        salary: '₹6,00,000 / annum (₹6.0 LPA)',
        salaryType: 'annual',
        location: 'Hyderabad',
    },
    {
        sNo: 59,
        name: 'V. Shyamala',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Vijaya Multi-Speciality Hospital',
        position: 'Duty Medical Officer',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Hyderabad',
    },
    {
        sNo: 60,
        name: 'Tadimalla Pranavi',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Practise Growth Consultancy (WFH)',
        position: 'Healthcare Excel Analyst',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Hyderabad',
    },
    {
        sNo: 61,
        name: 'Sk. Sheema',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'B-Live Hospital, Nellore',
        position: 'Duty Doctor',
        salary: '₹4,50,000 / annum (₹4.5 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 62,
        name: 'G. Tulasi Prasad',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'KIMS Hospital, Nellore',
        position: 'Assistant Physician',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 63,
        name: 'P. Soumya',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Medicover Hospital, Nellore',
        position: 'Assistant Physician',
        salary: '₹2,40,000 / annum (₹2.4 LPA)',
        salaryType: 'annual',
        location: 'Nellore',
    },
    {
        sNo: 64,
        name: 'G. Sony',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Mohan Babu University',
        position: 'Full-time PhD Research Scholar',
        salary: 'Doctoral Fellowship',
        salaryType: 'higher_studies',
        location: 'Tirupati',
    },
    {
        sNo: 65,
        name: 'G. Chelsy Eunica',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'KIMS Hospital, Anantapur',
        position: 'Duty Doctor',
        salary: '₹3,00,000 / annum (₹3.0 LPA)',
        salaryType: 'annual',
        location: 'Anantapur',
    },
    {
        sNo: 66,
        name: 'Dr. N. Vijay Kumar',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Palnadu Hospital, Piduguralla',
        position: 'Duty Medical Officer (DMO)',
        salary: '₹2,40,000 / annum (₹2.4 LPA)',
        salaryType: 'annual',
        location: 'Piduguralla',
    },
    {
        sNo: 67,
        name: 'S. Jennifer',
        program: 'Pharm.D',
        batch: 'Pharm.D',
        batchLabel: 'Pharm.D (Doctor of Pharmacy)',
        company: 'Clinical Research Institute, Hyderabad',
        position: 'Adv. Diploma – Clinical Research & PV',
        salary: 'Higher Studies & PG Diploma',
        salaryType: 'higher_studies',
        location: 'Hyderabad',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function StudentPlacementRecords() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedBatch, setSelectedBatch] = useState<'all' | '2025-2026' | '2024-2025' | 'Pharm.D'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecords = useMemo(() => {
        return allPlacementRecords.filter((rec) => {
            const matchesBatch = selectedBatch === 'all' || rec.batch === selectedBatch;
            const term = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !term ||
                rec.name.toLowerCase().includes(term) ||
                rec.company.toLowerCase().includes(term) ||
                rec.position.toLowerCase().includes(term) ||
                rec.batchLabel.toLowerCase().includes(term);

            return matchesBatch && matchesSearch;
        });
    }, [selectedBatch, searchTerm]);

    const count2026 = allPlacementRecords.filter((r) => r.batch === '2025-2026').length;
    const count2025 = allPlacementRecords.filter((r) => r.batch === '2024-2025').length;
    const countPharmD = allPlacementRecords.filter((r) => r.batch === 'Pharm.D').length;

    return (
        <section className={styles.sectionWrap} id="placement-records" aria-label="Student Placement Records">
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.eyebrow}>
                        <Award size={13} className={styles.eyebrowIcon} />
                        <span>VERIFIED GRADUATE OUTCOMES &bull; OFFICIAL CLIENT DIRECTORY</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Student Placement Records &amp; Batch Rosters</h2>
                    <p className={styles.sectionSubtext}>
                        Official placement records for B.Pharmacy and Pharm.D cohorts recruited across multinational pharmaceutical corporations, super-specialty hospital networks, and clinical healthcare enterprises.
                    </p>
                </motion.div>

                {/* KPI Metrics Strip */}
                <motion.div
                    className={styles.metricsStrip}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                >
                    <div className={styles.metricCard}>
                        <span className={styles.metricVal}>67+</span>
                        <span className={styles.metricLabel}>Total Placed Scholars</span>
                    </div>
                    <div className={styles.metricCard}>
                        <span className={styles.metricVal}>₹8.40 LPA</span>
                        <span className={styles.metricLabel}>Highest Annual Package</span>
                    </div>
                    <div className={styles.metricCard}>
                        <span className={styles.metricVal}>₹30,000</span>
                        <span className={styles.metricLabel}>Core Retail / Hospital Starting/Mo</span>
                    </div>
                    <div className={styles.metricCard}>
                        <span className={styles.metricVal}>100%</span>
                        <span className={styles.metricLabel}>Verified Employer Offers</span>
                    </div>
                </motion.div>

                {/* Filters & Search Control Bar */}
                <div className={styles.controlBar}>
                    {/* Batch Selection Tabs */}
                    <div className={styles.batchTabs}>
                        <button
                            type="button"
                            className={`${styles.tabBtn} ${selectedBatch === 'all' ? styles.activeTab : ''}`}
                            onClick={() => setSelectedBatch('all')}
                        >
                            <span>All Batches ({allPlacementRecords.length})</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.tabBtn} ${selectedBatch === '2025-2026' ? styles.activeTab : ''}`}
                            onClick={() => setSelectedBatch('2025-2026')}
                        >
                            <span>B.Pharm 2025–26 ({count2026})</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.tabBtn} ${selectedBatch === '2024-2025' ? styles.activeTab : ''}`}
                            onClick={() => setSelectedBatch('2024-2025')}
                        >
                            <span>B.Pharm 2024–25 ({count2025})</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.tabBtn} ${selectedBatch === 'Pharm.D' ? styles.activeTab : ''}`}
                            onClick={() => setSelectedBatch('Pharm.D')}
                        >
                            <span>Pharm.D Placements ({countPharmD})</span>
                        </button>
                    </div>

                    {/* Search Field */}
                    <div className={styles.searchBox}>
                        <Search size={16} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search by student, company, or role..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                {/* Placement Records Table */}
                <motion.div
                    className={styles.tableCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <div className={styles.tableResponsiveWrap}>
                        <table className={styles.recordsTable}>
                            <thead>
                                <tr>
                                    <th className={styles.thSno}>#</th>
                                    <th>Candidate Name</th>
                                    <th>Program / Batch</th>
                                    <th>Recruiting Organization</th>
                                    <th>Designation / Role</th>
                                    <th>Compensation / CTC</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRecords.length > 0 ? (
                                    filteredRecords.map((rec, idx) => {
                                        const isHighPackage =
                                            rec.salary.includes('8.4') ||
                                            rec.salary.includes('70,000') ||
                                            rec.salary.includes('6,00,000') ||
                                            rec.salary.includes('4,50,000');

                                        return (
                                            <tr key={`${rec.sNo}-${rec.name}`}>
                                                <td className={styles.tdSno}>{idx + 1}</td>
                                                <td className={styles.tdName}>
                                                    <strong>{rec.name}</strong>
                                                </td>
                                                <td className={styles.tdBatch}>
                                                    <span
                                                        className={`${styles.programBadge} ${
                                                            rec.program === 'Pharm.D' ? styles.badgePharmD : styles.badgeBPharm
                                                        }`}
                                                    >
                                                        {rec.batchLabel}
                                                    </span>
                                                </td>
                                                <td className={styles.tdCompany}>
                                                    <div className={styles.companyCell}>
                                                        <Building2 size={13} className={styles.companyIcon} />
                                                        <span>{rec.company}</span>
                                                    </div>
                                                </td>
                                                <td className={styles.tdRole}>
                                                    <span className={styles.positionText}>{rec.position}</span>
                                                </td>
                                                <td className={styles.tdSalary}>
                                                    <span
                                                        className={`${styles.salaryBadge} ${
                                                            isHighPackage
                                                                ? styles.salaryTopTier
                                                                : rec.salaryType === 'higher_studies'
                                                                ? styles.salaryHigherEd
                                                                : styles.salaryStandard
                                                        }`}
                                                    >
                                                        {rec.salary}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={6} className={styles.noResultsCell}>
                                            No placement records match &ldquo;{searchTerm}&rdquo;. Try another search term.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer Note */}
                    <div className={styles.tableFooterNote}>
                        <CheckCircle2 size={14} className={styles.noteIcon} />
                        <span>
                            Records are reproduced directly from the official institutional placement notification files.
                            Salary packages are verified by the Training &amp; Placement Cell (T&amp;P), JIPS.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
