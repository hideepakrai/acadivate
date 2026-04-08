import { UserCheck } from 'lucide-react';
import type { DashboardModuleConfig } from '../dashboard/dashboardTypes';
import { countByValue } from '../dashboard/dashboardTypes';

export const registrationsModule: DashboardModuleConfig = {
  id: 'registrations',
  title: 'Registrations',
  subtitle: 'Manage user account registrations and academic profiles.',
  intro: 'View and manage all user accounts registered through the portal.',
  route: '/dashboard/registrations',
  actionLabel: 'Add User',
  searchPlaceholder: 'Search by name, email, or role...',
  accent: 'primary',
  icon: UserCheck,
  fields: [
    {
      key: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
      span: 2,
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'john@example.com',
      required: true,
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      placeholder: '+91 00000 00000',
      required: true,
    },
    {
      key: 'role',
      label: 'Role / Category',
      type: 'select',
      options: ['Student', 'Researcher / Academician', 'Industry Professional', 'Others'],
      placeholder: 'Select role',
      required: true,
    },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      options: ['Pending', 'Verified', 'Active', 'Suspended'],
      placeholder: 'Select status',
      required: true,
    },
  ],
  columns: [
    { key: 'fullName', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ],
  tableTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 0.85fr)',
  initialRows: [],
  statusToneMap: {
    Pending: 'warning',
    Verified: 'neutral',
    Active: 'success',
    Suspended: 'danger',
  },
  buildSummary: (rows) => [
    { label: 'Total Users', value: String(rows.length), tone: 'neutral' },
    { label: 'Active', value: String(countByValue(rows, 'status', 'Active')), tone: 'success' },
    { label: 'Pending', value: String(countByValue(rows, 'status', 'Pending')), tone: 'warning' },
  ],
};
