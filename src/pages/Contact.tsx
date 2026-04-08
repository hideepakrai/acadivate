'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, ShieldCheck, CheckCircle2, MessageSquare, Users, FileText, Globe, ArrowRight, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

export const Contact = () => {
  return (
    <div className="bg-app-bg">
      <ContactHero />
      <ContactMain />
      <ContactActions />
      <ContactGlobal />
    </div>
  );
};

const ContactHero = () => (
  <section data-annotate-id="contact-hero-section" className="bg-linear-to-br from-primary-deep via-primary-dark to-primary relative overflow-hidden py-24 lg:py-28">
    {/* Decorative elements */}
    <div className="absolute -right-48 -bottom-48 w-[700px] h-[700px] rounded-full border border-white/10 pointer-events-none animate-pulse" />
    <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full border border-white/10 pointer-events-none" />
    <div className="absolute -left-24 -top-24 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-lt">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
            Connect With<br /><span className="shim">Acadivate</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-md mb-10">
            Reach out for academic collaboration, conferences, partnerships, awards, and global research initiatives.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="lg">
              Nominate Now <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Conferences
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactHeroCard icon={<Phone size={24} />} label="Call Us" value="+91-7218 330037" />
          <ContactHeroCard icon={<Mail size={24} />} label="Email Us" value="info@acadivate.com" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-1 sm:col-span-2 p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Headquarters</div>
                <div className="text-white font-bold">46, Guruvadan, Jawahar Nagar, Amravati 444604</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <nav className="flex items-center gap-2 mt-16 text-[13px] font-medium text-white/40">
        <a href="/" className="hover:text-gold transition-colors">HOME</a>
        <ChevronRight size={14} />
        <span className="text-gold font-semibold">CONTACT</span>
      </nav>
    </div>
  </section>
);

const ContactHeroCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-colors">
    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
      {icon}
    </div>
    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">{label}</div>
    <div className="text-lg font-bold text-white">{value}</div>
  </div>
);

const ContactMain = () => {
  const [charCount, setCharCount] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    institution: '',
    enquiryType: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === 'message') {
        setCharCount(value.length);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.enquiryType || !formData.message) {
      toast.error('Required Fields Missing', {
        description: 'Please fill in all mandatory fields (*) before submitting.',
      });
      return;
    }

    if (!formData.agree) {
      toast.error('Privacy Policy', {
        description: 'Please agree to our privacy policy to proceed.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          institution: formData.institution,
          subject: formData.enquiryType,
          note: formData.message,
          source: 'Contact Form',
          status: 'New',
        }),
      });

      if (!response.ok) throw new Error('Failed to submit enquiry');

      toast.success('Enquiry Submitted', {
        description: 'Thank you for reaching out! We will get back to you soon.',
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        institution: '',
        enquiryType: '',
        message: '',
        agree: false,
      });
      setCharCount(0);
    } catch (error) {
      toast.error('Submission Failed', {
        description: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section data-annotate-id="contact-details-section" className="py-24 bg-app-bg relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001F3F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4">
              Let's Collaborate
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-8">
              Connect With Acadivate<br />Foundation
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-12">
              Reach out to Acadivate Research and Innovation Foundation for academic collaboration, conferences, partnerships, awards, and global research initiatives.
            </p>

            <div className="space-y-6">
              <ContactInfoItem
                icon={<Phone size={24} />}
                label="Call Us"
                sub="Academic Coordination"
                value="+91-7218 330037"
                color="bg-navy/10 text-navy"
              />
              <ContactInfoItem
                icon={<Mail size={24} />}
                label="Email Us"
                sub="Official Communication"
                value="info@acadivate.com"
                color="bg-gold-pale text-gold"
              />
              <ContactInfoItem
                icon={<MapPin size={24} />}
                label="Office Address"
                sub="India | Global Academic Network"
                value="46, Guruvadan, Jawahar Nagar,  Amravati 444604"
                color="bg-teal-2 text-teal"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-app-bg rounded-[40px] p-8 md:p-12 border border-border-light shadow-sh-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none" />

            <div className="text-[10px] font-bold tracking-[2px] uppercase text-gold mb-4">
              Enquiry Form
            </div>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Send Us Your Enquiry</h2>
            <p className="text-text-muted mb-10">
              Submit your enquiry related to conferences, academic collaboration, research partnerships, or awards.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Full Name *</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Dr. / Prof. Full Name" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all shadow-sh-xs" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@institution.edu" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all shadow-sh-xs" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 00000 00000" 
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all shadow-sh-xs" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Institution</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input 
                      type="text" 
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="University Name" 
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all shadow-sh-xs" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Enquiry Type *</label>
                <select 
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all shadow-sh-xs appearance-none"
                >
                  <option value="">— Select an enquiry type —</option>
                  <option value="International Conference & Events">International Conference & Events</option>
                  <option value="Academic Collaboration">Academic Collaboration</option>
                  <option value="Research Partnership">Research Partnership</option>
                  <option value="Rankings & Evaluation">Rankings & Evaluation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-wider ml-1">Your Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-primary/40" size={18} />
                  <textarea
                    rows={5}
                    maxLength={600}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your enquiry in detail..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-app-bg focus:border-primary focus:ring-0 outline-none transition-all resize-none shadow-sh-xs"
                  />
                </div>
                <div className="text-right text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  {charCount} / 600
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-2xl bg-app-bg border border-border-light">
                <input 
                  type="checkbox" 
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-border-light text-primary focus:ring-primary" 
                />
                <label className="text-[13px] text-text-muted leading-relaxed">
                  I agree to Acadivate's <a href="#" className="font-bold text-navy hover:text-gold transition-colors underline underline-offset-4">Privacy Policy</a> and consent to being contacted.
                </label>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 text-lg"
              >
                {isSubmitting ? 'Submitting...' : <><Send size={20} /> Submit Enquiry</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, sub, value, color }: { icon: React.ReactNode; label: string; sub: string; value: string; color: string }) => (
  <div className="group flex items-center gap-6 p-6 rounded-[32px] border border-border-light bg-app-bg hover:bg-app-bg hover:shadow-sh-xl transition-all duration-500 cursor-pointer">
    <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6', color)}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-text-muted mb-1">{label}</div>
      <div className="text-sm text-text-muted mb-1">{sub}</div>
      <div className="text-lg font-bold text-navy group-hover:text-gold transition-colors">{value}</div>
    </div>
    <div className="w-10 h-10 rounded-full bg-app-bg flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 shadow-sh-sm">
      <ArrowRight size={20} />
    </div>
  </div>
);

const ContactActions = () => (
  <section data-annotate-id="contact-form-section" className="py-24 bg-app-bg relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #001F3F 25%, transparent 25%, transparent 50%, #001F3F 50%, #001F3F 75%, transparent 75%, transparent)', backgroundSize: '100px 100px' }} />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-gold mb-3">How Can We Help</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Ways to Work With Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ActionCard
          icon={<MessageSquare size={32} />}
          title="Academic Consultation"
          desc="Connect with Acadivate's academic coordination team to discuss conferences and research participation."
          color="bg-navy/10 text-navy"
        />
        <ActionCard
          icon={<Users size={32} />}
          title="Institutional Collaboration"
          desc="Partner with Acadivate as an Academic or Knowledge Partner to gain international exposure and recognition."
          color="bg-gold-pale text-gold"
        />
        <ActionCard
          icon={<FileText size={32} />}
          title="Academic Queries & Support"
          desc="Find answers related to conferences, publications, awards criteria, and participation processes."
          color="bg-teal-2 text-teal"
        />
      </div>
    </div>
  </section>
);

const ActionCard = ({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) => (
  <div className="group relative p-10 rounded-[40px] bg-app-bg border border-border-light overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-sh-xl">
    <div className="absolute inset-0 bg-linear-to-br from-primary-deep to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30 border border-transparent', color)}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-text-muted mb-8 group-hover:text-white/70 transition-colors leading-relaxed">{desc}</p>
      <div className="inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold-lt transition-colors">
        Start Discussion <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);

const ContactGlobal = () => (
  <section data-annotate-id="contact-cta-section" className="py-24 bg-navy relative overflow-hidden">
    {/* Decorative Globe Rings */}
    <div className="absolute -right-60 -top-60 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />
    <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
    <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-gold mb-3">Global Presence</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Acadivate International Reach</h2>
        </div>
        <p className="text-lg text-white/40 max-w-sm leading-relaxed">
          Acadivate operates across multiple countries, supporting international conferences and global research engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CountryCard flag="🇺🇸" name="United States" email="usa@acadivate.org" phone="+1 202 555 0110" />
        <CountryCard flag="🇦🇺" name="Australia" email="australia@acadivate.org" phone="+61 2345 67890" />
        <CountryCard flag="🇬🇧" name="United Kingdom" email="uk@acadivate.org" phone="+44 207 123 4567" />
        <CountryCard flag="🇮🇳" name="India" email="india@acadivate.org" phone="+91 98765 43210" isHQ />
      </div>
    </div>
  </section>
);

const CountryCard = ({ flag, name, email, phone, isHQ }: { flag: string; name: string; email: string; phone: string; isHQ?: boolean }) => (
  <div className={cn(
    'group p-8 rounded-[32px] border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-gold/30',
    isHQ ? 'bg-white/10 border-gold/30' : 'bg-white/5 border-white/10'
  )}>
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-5xl mb-8 transition-transform duration-500 group-hover:scale-110">
      {flag}
    </div>
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      {isHQ && <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-white">HQ</span>}
    </div>
    <p className="text-sm text-white/40 leading-relaxed mb-8">
      Academic coordination and international collaboration support for global research initiatives.
    </p>
    <div className="space-y-4">
      <a href={`tel:${phone}`} className="flex items-center gap-4 text-[13px] font-bold text-white/80 hover:text-gold transition-colors">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
          <Phone size={14} />
        </div>
        {phone}
      </a>
      <a href={`mailto:${email}`} className="flex items-center gap-4 text-[13px] font-bold text-white/80 hover:text-gold transition-colors">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-all">
          <Mail size={14} />
        </div>
        {email}
      </a>
    </div>
  </div>
);

export default Contact;
