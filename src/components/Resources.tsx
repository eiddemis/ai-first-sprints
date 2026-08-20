import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Eye, FolderOpen, FileText, Zap, FileSpreadsheet, FileCode } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourcesProps {
  onSelectResource: (resource: ResourceItem) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onSelectResource }) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const bundleResource: ResourceItem = {
    id: 'res-bundle-all',
    title: 'DSTA AI First Sprint — Course Resources Folder',
    format: 'OneDrive Folder',
    fileSize: 'TXT, CSV, PDF & Code',
    icon: 'Archive',
    description: 'Shared OneDrive repository containing all required workshop assets: Problem Framing worksheets, Vibe-Coding prompt cheat sheets, datasets (TXT & CSV), and sandbox starter templates.',
    filename: 'DSTA_AI_First_Sprint_Course_Resources',
    downloadUrl: 'https://1drv.ms/f/c/ea886db673c3396b/IgAUMysf799nT5Wv0KSC9aRpAdYJReomtXPSi4uh2v8ojgs?e=voZytQ',
    tags: ['Worksheets', 'Prompt Cheat Sheets', 'TXT & CSV Data', 'Code Templates'],
    downloadContent: `===================================================================
DSTA AI FIRST SPRINT - SHARED COURSE RESOURCES (ONEDRIVE)
===================================================================

DIRECT ONEDRIVE FOLDER LINK:
https://1drv.ms/f/c/ea886db673c3396b/IgAUMysf799nT5Wv0KSC9aRpAdYJReomtXPSi4uh2v8ojgs?e=voZytQ

FOLDER REPOSITORY CONTENTS & RELEVANT FILES:
-------------------------------------------------------------------
1. Problem Framing & Analysis
   - DSTA_5Whys_4Cs_Problem_Framing_Template.pdf
   - 5 Whys Root Cause Analysis Worksheet
   - Human-in-the-Loop Verification Guidelines

2. Prompting & Vibe-Coding Guides
   - DSTA_VibeCoding_Prompting_CheatSheet.pdf
   - System Prompt Formulas & Context Engineering Rules
   - Enterprise AI Safety & Data Classification Standards

3. Data Files & Text Assets (TXT / CSV)
   - Sample workplace workflow logs & mock procurement datasets (.csv)
   - Unstructured technical document samples for AI extraction (.txt)

4. Code Starter Kits & Sandboxes
   - Enterprise Sandbox Starter Scaffold (.zip / repo files)
   - React + Tailwind + Vite Starter Templates

-------------------------------------------------------------------
ACCESS INSTRUCTIONS FOR STUDENTS / PARTICIPANTS:
Click the link above or use the "Access Course Resources" button to
open the OneDrive directory in your browser, where you can view or
download individual files as needed for each sprint exercise.
===================================================================`
  };

  const handleDownloadBundle = () => {
    if (bundleResource.downloadUrl) {
      window.open(bundleResource.downloadUrl, '_blank', 'noopener,noreferrer');
    }
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <section id="resources" className="py-20 bg-[#0A192F] relative border-b border-[#112240]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-semibold mb-3">
            <FolderOpen className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Course Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF] tracking-tight mb-3">
            Access Course Resources & Files
          </h2>
          <p className="text-[#CCD6F6] text-sm sm:text-base">
            Access all workshop templates, prompt cheat sheets, datasets (TXT, CSV), and code files from the official OneDrive repository for this sprint.
          </p>
        </div>

        {/* Single All-in-One Resource Hero Card */}
        <div className="bg-[#112240] border border-[#64FFDA]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0A192F] pb-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#0A192F] border border-[#64FFDA]/30 text-[#64FFDA]">
                <FolderOpen className="w-8 h-8 text-[#64FFDA]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#64FFDA] bg-[#020C1B] px-2.5 py-1 rounded border border-[#64FFDA]/30 uppercase tracking-wider">
                  OneDrive Cloud Folder · {bundleResource.fileSize}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E6F1FF] mt-2">
                  DSTA AI First Sprint Course Resources
                </h3>
              </div>
            </div>
          </div>

          {/* Included Files Breakdown List */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#CCD6F6]">
              Files & Assets Available in OneDrive:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0A192F] border border-[#64FFDA]/15 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#64FFDA] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#E6F1FF]">Framing Worksheets</div>
                  <div className="text-[11px] text-[#8892B0]">5 Whys & 4Cs PDF guides</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A192F] border border-[#64FFDA]/15 flex items-start gap-2.5">
                <FileSpreadsheet className="w-4 h-4 text-[#64FFDA] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#E6F1FF]">Datasets & Text Files</div>
                  <div className="text-[11px] text-[#8892B0]">Sample TXT & CSV data</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A192F] border border-[#64FFDA]/15 flex items-start gap-2.5">
                <FileCode className="w-4 h-4 text-[#64FFDA] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#E6F1FF]">Prompt & Code Kits</div>
                  <div className="text-[11px] text-[#8892B0]">Prompt cheatsheets & code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={bundleResource.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setDownloaded(true);
                setTimeout(() => setDownloaded(false), 4000);
              }}
              className={`w-full sm:flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-black text-sm transition-all cursor-pointer shadow-lg ${
                downloaded
                  ? 'bg-[#64FFDA] text-[#0A192F]'
                  : 'bg-immersive-btn text-[#0A192F] shadow-[#64FFDA]/20 hover:shadow-[#64FFDA]/40 transform hover:-translate-y-0.5'
              }`}
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-[#0A192F]" />
                  <span>Opening Course Resources...</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-5 h-5" />
                  <span>Access Course Resources</span>
                </>
              )}
            </a>

            <button
              onClick={() => onSelectResource(bundleResource)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#CCD6F6] hover:text-[#64FFDA] border border-[#64FFDA]/30 transition-all text-xs font-semibold cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Resource Manifest</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

