'use client';

import * as React from 'react';
import { 
  Search, RefreshCw, Filter, Calendar, User, 
  Mail, MessageSquare, Save, Trash2, Clock 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAppDispatch, useAppSelector } from '@/src/hook/hooks';
import { fetchLeadsThunk, updateLeadThunk, deleteLeadThunk } from '@/src/hook/leads/leadThunk';
import type { LeadRecord, LeadStatus } from '@/src/hook/leads/leadType';
import { Button } from '../ui/Button';
import { toast } from 'sonner';

export default function LeadsInbox() {
  const dispatch = useAppDispatch();
  const { allLead, isFetchedLead, isLoading } = useAppSelector((state) => state.leads);
  const [selectedLeadId, setSelectedLeadId] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<LeadStatus | 'All'>('All');

  // Load data
  React.useEffect(() => {
    if (!isFetchedLead) {
      dispatch(fetchLeadsThunk());
    }
  }, [dispatch, isFetchedLead]);

  const selectedLead = allLead.find((l) => l._id === selectedLeadId) || allLead[0];

  React.useEffect(() => {
    if (!selectedLeadId && allLead.length > 0) {
      setSelectedLeadId(allLead[0]._id!);
    }
  }, [allLead, selectedLeadId]);

  const filteredLeads = allLead.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateLead = (updates: Partial<LeadRecord>) => {
    if (!selectedLead) return;
    dispatch(updateLeadThunk({ ...selectedLead, ...updates } as any));
    toast.success('Lead Updated Successfully');
  };

  return (
    <div className="min-h-screen space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex items-center justify-between rounded-[2rem] border border-border-light bg-white p-8 shadow-sh-md">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-navy">Leads Inbox</h1>
          <p className="mt-1 text-sm font-semibold text-text-muted">Review website submissions from Demo and Ask forms.</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border-light bg-bg-soft px-6 py-3 shadow-sh-xs">
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-subtle">Total</p>
          <p className="text-xl font-black text-navy">{allLead.length}</p>
        </div>
      </div>

      {/* Toolbar Section */}
      <div className="flex items-center justify-end gap-3 rounded-[1.5rem] border border-border-light bg-white/50 p-4 backdrop-blur-md">
        <div className="flex items-center gap-2 rounded-xl border border-border-light bg-white px-3 py-1.5 shadow-sh-xs">
          <Filter size={16} className="text-text-subtle" />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="bg-transparent text-sm font-bold text-navy outline-none"
          >
            <option value="All">All statuses</option>
            <option value="New">New</option>
            <option value="Open">Open</option>
            <option value="Replied">Replied</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div className="relative flex-1 max-w-md">
          <input 
            type="text"
            placeholder="Search name/email/message"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border-light bg-white py-2 pl-4 pr-4 text-sm font-medium outline-none ring-primary/10 focus:border-primary focus:ring-4 transition-all"
          />
        </div>

        <Button variant="outline" size="sm" className="bg-white font-bold h-10 px-6">
          Search
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white font-bold h-10 gap-2"
          onClick={() => dispatch(fetchLeadsThunk())}
        >
          <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
          Refresh
        </Button>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-12 gap-8">
        {/* Table View (Left) */}
        <div className="col-span-8 overflow-hidden rounded-[2rem] border border-border-light bg-white shadow-sh-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border-light bg-bg-soft/50">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-subtle">Type</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-subtle">Name</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-subtle">Email</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-subtle">Status</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-subtle">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light/50">
              {filteredLeads.map((lead) => (
                <tr 
                  key={lead._id}
                  onClick={() => setSelectedLeadId(lead._id!)}
                  className={cn(
                    "cursor-pointer transition-colors hover:bg-bg-soft/50",
                    selectedLeadId === lead._id ? "bg-primary/5" : ""
                  )}
                >
                  <td className="px-6 py-4">
                    <span className="text-[11px] font-black uppercase tracking-widest text-navy">{lead.subject.split(' ')[0] || 'DEMO'}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-navy truncate max-w-[140px]">{lead.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-text-muted">{lead.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-[11px] font-bold text-navy lowercase">{lead.status.toLowerCase()}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-text-subtle">
                    {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() + ', ' + new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) : 'N/A'}
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-20 text-center text-sm font-bold text-text-muted">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex items-center justify-between border-t border-border-light bg-bg-soft/30 px-6 py-4">
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Page 1 of 1</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled className="bg-white">Prev</Button>
              <Button variant="outline" size="sm" disabled className="bg-white">Next</Button>
            </div>
          </div>
        </div>

        {/* Detail Panel (Right) */}
        <div className="col-span-4 space-y-6">
          <div className="rounded-[2rem] border border-border-light bg-white p-8 shadow-sh-md">
            {selectedLead ? (
              <div className="space-y-8">
                {/* Lead Summary Block */}
                <div className="rounded-3xl border border-border-light bg-bg-soft/40 p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-subtle mb-3">Lead Summary</p>
                  <h3 className="text-xl font-black text-navy">{selectedLead.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    <p className="text-sm font-semibold text-text-muted">{selectedLead.email}</p>
                    {selectedLead.phoneNumber && (
                      <p className="text-sm font-semibold text-primary">{selectedLead.phoneNumber}</p>
                    )}
                  </div>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-navy bg-gold/10 inline-block px-2 py-0.5 rounded-lg">
                    {selectedLead.institution || 'Individual'} • {selectedLead.subject.split(' ')[0] || 'DEMO'} • {selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleString() : ''}
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Status</label>
                    <div className="mt-1.5 relative">
                      <select 
                        value={selectedLead.status}
                        onChange={(e) => handleUpdateLead({ status: e.target.value as any })}
                        className="w-full appearance-none rounded-2xl border-2 border-border-light bg-white px-5 py-3 text-sm font-bold text-navy outline-none ring-primary/5 focus:border-primary focus:ring-8 transition-all"
                      >
                        <option value="New">new</option>
                        <option value="Open">open</option>
                        <option value="Replied">replied</option>
                        <option value="Closed">closed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Institution</label>
                    <input 
                      type="text"
                      value={selectedLead.institution || ''}
                      readOnly
                      className="mt-1.5 w-full rounded-2xl border-2 border-border-light bg-bg-soft/30 px-5 py-3 text-sm font-bold text-navy outline-none cursor-default"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Phone Number</label>
                    <input 
                      type="text"
                      value={selectedLead.phoneNumber || ''}
                      readOnly
                      className="mt-1.5 w-full rounded-2xl border-2 border-border-light bg-bg-soft/30 px-5 py-3 text-sm font-bold text-navy outline-none cursor-default"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Enquiry Type (Type)</label>
                    <input 
                      type="text"
                      value={selectedLead.subject || ''}
                      readOnly
                      className="mt-1.5 w-full rounded-2xl border-2 border-border-light bg-bg-soft/30 px-5 py-3 text-sm font-bold text-navy outline-none cursor-default"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Assignee ID</label>
                    <input 
                      type="text"
                      placeholder="Mongo user id"
                      className="mt-1.5 w-full rounded-2xl border-2 border-border-light bg-white px-5 py-3 text-sm font-bold text-navy outline-none ring-primary/5 focus:border-primary focus:ring-8 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Follow-up At</label>
                    <div className="mt-1.5 relative">
                      <input 
                        type="datetime-local"
                        className="w-full rounded-2xl border-2 border-border-light bg-white px-5 py-3 text-sm font-bold text-navy outline-none ring-primary/5 focus:border-primary focus:ring-8 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-text-subtle ml-1">Note (Timeline)</label>
                    <textarea 
                      rows={4}
                      placeholder="Internal communication history..."
                      defaultValue={selectedLead.note || ''}
                      onBlur={(e) => handleUpdateLead({ note: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border-2 border-border-light bg-white px-5 py-4 text-sm font-medium text-navy outline-none ring-primary/5 focus:border-primary focus:ring-8 transition-all"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full h-14 rounded-2xl bg-primary text-white font-black uppercase tracking-widest gap-3 shadow-sh-md hover:shadow-sh-lg transition-all"
                      onClick={() => handleUpdateLead({})}
                    >
                        <Save size={18} />
                        Save Lead
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full h-12 rounded-2xl border-crimson/20 text-crimson font-bold hover:bg-crimson/5 hover:border-crimson transition-all"
                      onClick={() => {
                        if(confirm('Delete this lead forever?')) {
                            dispatch(deleteLeadThunk(selectedLead._id!));
                            toast.success('Lead deleted');
                        }
                      }}
                    >
                        <Trash2 size={16} className="mr-2" />
                        Delete Forever
                    </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-96 flex-col items-center justify-center text-center">
                <div className="h-20 w-20 rounded-full bg-bg-soft flex items-center justify-center text-text-subtle mb-4">
                    <MessageSquare size={40} />
                </div>
                <p className="text-sm font-bold text-text-muted uppercase tracking-widest">Select a lead to manage</p>
              </div>
            )}
          </div>

          {/* Additional Info Card */}
          <div className="rounded-[2rem] bg-linear-to-br from-navy to-primary-dark p-8 text-white shadow-sh-xl ring-1 ring-white/10">
            <h4 className="text-lg font-black uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                <Clock size={20} />
                Retention
            </h4>
            <p className="text-sm font-medium text-white/70 leading-relaxed mb-6">
                Leads are stored securely in the cloud. Remember to follow up within 24 hours for a 3x higher conversion rate.
            </p>
            <Button 
                variant="gold" 
                className="w-full bg-white text-navy font-black border-none hover:bg-gold-lt"
                onClick={() => window.location.href = `mailto:${selectedLead?.email}`}
            >
                Quick Mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
