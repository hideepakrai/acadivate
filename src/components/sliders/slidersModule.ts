import { LayoutPanelTop } from 'lucide-react';
import type { DashboardModuleConfig } from '../dashboard/dashboardTypes';

export const slidersModule: DashboardModuleConfig = {
  id: 'sliders' as any,
  title: 'Sliders',
  subtitle: 'Manage homepage banners and promotional sliders.',
  intro: 'Update the visual storytelling of the website by managing the principal carousel.',
  route: '/dashboard/sliders' as any,
  actionLabel: 'Add Slider',
  searchPlaceholder: 'Search by title or description...',
  accent: 'gold',
  icon: LayoutPanelTop,
  fields: [
    {
      key: 'title',
      label: 'Main Title',
      type: 'text',
      placeholder: 'Innovation at Acadivate',
      required: true,
      span: 2,
    },
    {
      key: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      placeholder: 'Research and Innovation Foundation',
      required: false,
    },
    {
      key: 'imageUrl',
      label: 'Banner Image URL',
      type: 'text',
      placeholder: 'https://example.com/slide.jpg',
      required: true,
    },
    {
        key: 'linkUrl',
        label: 'Button Link URL',
        type: 'text',
        placeholder: '/about',
        required: false,
    },
    {
      key: 'order',
      label: 'Display Order',
      type: 'number',
      placeholder: '0',
      required: true,
    },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      options: ['Active', 'Inactive'],
      placeholder: 'Select status',
      required: true,
    },
    {
      key: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Explain the purpose of this banner...',
      span: 2,
    },
  ],
  columns: [
    { key: 'title', label: 'Title' },
    { key: 'order', label: 'Order' },
    { key: 'status', label: 'Status' },
  ],
  tableTemplateColumns: 'minmax(0, 2fr) minmax(0, 0.8fr) minmax(0, 1fr)',
  initialRows: [],
  statusToneMap: {
    Active: 'success',
    Inactive: 'neutral',
  },
  buildSummary: (rows) => [
    { label: 'Total Slides', value: String(rows.length), tone: 'neutral' },
    { label: 'Active', value: String(rows.filter(r => r.values.status === 'Active').length), tone: 'success' },
  ],
};
