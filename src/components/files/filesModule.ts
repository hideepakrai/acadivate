import { FileText } from 'lucide-react';
import type { DashboardModuleConfig } from '../dashboard/dashboardTypes';

export const filesModule: DashboardModuleConfig = {
  id: 'files',
  title: 'Files & Attachments',
  subtitle: 'Access and download all nomination attachments.',
  intro: 'A central repository for all files uploaded during the nomination process.',
  route: '/dashboard/files',
  actionLabel: 'Refresh Files',
  searchPlaceholder: 'Search files, categories, or nominations...',
  accent: 'blue',
  icon: FileText,
  fields: [], // Not used for direct CRUD in this view
  columns: [
    { key: 'nominationName', label: 'Nomination' },
    { key: 'name', label: 'File Name' },
    { key: 'category', label: 'Category' },
  ],
  tableTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 0.5fr)',
  initialRows: [],
  statusToneMap: {},
  buildSummary: (rows) => [
    { label: 'Total Files', value: String(rows.length), tone: 'neutral' },
  ],
};
