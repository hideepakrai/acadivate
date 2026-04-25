"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/hook/store";
import { User, Mail, Shield, BadgeCheck, Camera } from "lucide-react";
import { cn } from "@/src/lib/utils";

const UserAccountPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <section className="space-y-6 max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between px-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-navy">My Account</h1>
          <p className="text-sm text-text-muted mt-1">Manage your personal profile and account settings.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        {/* Profile Card */}
        <div className="space-y-6">
          <article className="rounded-[2rem] border border-border-light bg-white p-8 shadow-sh-sm text-center">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="w-full h-full rounded-[2.5rem] bg-bg-soft border-4 border-white shadow-sh-md flex items-center justify-center text-primary overflow-hidden">
                <User size={64} strokeWidth={1.5} />
              </div>
              <button className="absolute bottom-0 right-0 p-2.5 bg-primary text-white rounded-2xl shadow-sh-lg hover:bg-primary-dark transition-colors border-2 border-white">
                <Camera size={18} />
              </button>
            </div>
            
            <h2 className="text-xl font-bold text-navy truncate">{user?.userName || "Admin User"}</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mt-1">{user?.role || "SUPERADMIN"}</p>
            
            <div className="mt-8 pt-6 border-t border-border-light">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage-2 px-4 py-1.5 text-xs font-bold text-sage">
                <BadgeCheck size={14} />
                Verified Account
              </div>
            </div>
          </article>
        </div>

        {/* Info Card */}
        <div className="space-y-6">
          <article className="rounded-[2rem] border border-border-light bg-white p-8 shadow-sh-sm">
            <h3 className="text-lg font-bold text-navy mb-6 text-left">Account Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-pale text-primary">
                  <User size={20} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-subtle">Full Name</p>
                  <p className="mt-1 text-base font-semibold text-navy truncate">{user?.userName || "Not specified"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-pale text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-subtle">Email Address</p>
                  <p className="mt-1 text-base font-semibold text-navy truncate">{user?.email || "admin@nestcraft.com"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-pale text-primary">
                  <Shield size={20} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-subtle">Access Role</p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-lg bg-navy px-3 py-1 text-xs font-bold text-white shadow-sh-xs capitalize">
                      {user?.role || "Admin"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border-light flex gap-3">
              <button className="flex-1 rounded-2xl bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark shadow-sh-sm">
                Edit Profile
              </button>
              <button className="flex-1 rounded-2xl border border-border-light bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-bg-soft">
                Change Password
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default UserAccountPage;