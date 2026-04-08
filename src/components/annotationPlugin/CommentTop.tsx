"use client"
import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/hook/store'
import { CommentToggleButton } from './CommentToggleButton'
import { CommentSettingsButton } from './CommentSettingsButton'
import { dashboardNavItems } from '../dashboard/dashboardModules'
import { ChevronDown } from 'lucide-react'

const CommentTop = () => {
  const [mounted, setMounted] = React.useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const isAdmin = user?.role?.toLowerCase() === 'admin';

  const [isListingOpen, setIsListingOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsListingOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted || !user || user.role?.toLowerCase() !== 'admin') {
    return null;
  }
    
  return (
    <div data-annotator-ui="true" className="relative z-[10001] bg-primary-dark py-1.5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11.5px] font-bold text-white uppercase tracking-wider">
            <a href="/dashboard" className="hover:text-gold transition-colors flex items-center gap-2">
              Admin Dashboard
            </a>
          </div>
          <div className="w-px h-3 bg-white/20" />
          
          {/* Listing Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsListingOpen(!isListingOpen)}
              className="flex items-center gap-1.5 text-[10.5px] font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors"
            >
              Listing
              <ChevronDown size={12} className={isListingOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>

            {isListingOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-primary-dark/95 backdrop-blur-xl shadow-2xl z-[10002] p-2 animate-in fade-in zoom-in-95 duration-200">
                <div className="grid gap-1">
                  {dashboardNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all group"
                      onClick={() => setIsListingOpen(false)}
                    >
                      <item.icon size={16} className="text-gold group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-px h-3 bg-white/20" />
          <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full border border-gold/50 text-white uppercase tracking-wider">
            Admin Comments Mode
          </span>
        </div>
        <div className="flex items-center gap-4">
           {isAdmin && <CommentToggleButton variant="compact" />}
           <CommentSettingsButton />
        </div>
      </div>
    </div>
  )
}

export default CommentTop
