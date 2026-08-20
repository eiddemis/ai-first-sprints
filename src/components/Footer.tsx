import React from 'react';
import { Shield, ExternalLink, Heart, Sparkles } from 'lucide-react';
import dstaBadge from '../assets/images/dsta_sprint_badge_1786084171476.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020C1B] text-[#8892B0] py-12 border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#112240]">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#64FFDA]/40 p-0.5 bg-[#0A192F]">
                <img
                  src={dstaBadge}
                  alt="DSTA AI Sprint Badge"
                  className="w-full h-full object-cover rounded"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold text-[#E6F1FF] tracking-tight">
                AI Sprint @ DSTA
              </span>
            </div>
            <p className="text-xs text-[#CCD6F6] leading-relaxed max-w-md">
              AI Sprint @ DSTA — Empowering the Defence Tech Workforce. Automating administrative tasks to liberate officers for strategic defence engineering and mission success.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#64FFDA] font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Defence Science and Technology Agency, Singapore</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#E6F1FF] uppercase tracking-wider">Course Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#agenda" className="hover:text-[#64FFDA] transition-colors">Programme Agenda</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#64FFDA] transition-colors">Resources & Workshop Files</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#E6F1FF] uppercase tracking-wider">Governance & Support</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1 hover:text-[#64FFDA] transition-colors cursor-pointer">
                <span>DSTA Enterprise AI Policy</span>
                <ExternalLink className="w-3 h-3 text-[#8892B0]" />
              </li>
              <li className="flex items-center gap-1 hover:text-[#64FFDA] transition-colors cursor-pointer">
                <span>Data Classification Guidelines</span>
                <ExternalLink className="w-3 h-3 text-[#8892B0]" />
              </li>
              <li className="flex items-center gap-1 hover:text-[#64FFDA] transition-colors cursor-pointer">
                <span>Cyber AI Tech Office Helpdesk</span>
                <ExternalLink className="w-3 h-3 text-[#8892B0]" />
              </li>
              <li className="flex items-center gap-1 hover:text-[#64FFDA] transition-colors cursor-pointer">
                <span>Sandbox Health & Status</span>
                <span className="w-2 h-2 rounded-full bg-[#64FFDA] inline-block ml-1"></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8892B0] gap-4">
          <p>© {new Date().getFullYear()} Defence Science and Technology Agency (DSTA). All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#CCD6F6]">
            <span>Built for Human-First Defence Productivity</span>
            <Sparkles className="w-3 h-3 text-[#64FFDA]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
