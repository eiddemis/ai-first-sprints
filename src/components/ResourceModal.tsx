import React from 'react';
import { ResourceItem } from '../types';
import { X, Download, ExternalLink, FileText, CheckCircle2, Copy, Check } from 'lucide-react';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!resource) return null;

  const content = resource.downloadContent || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    if (resource.downloadUrl) {
      window.open(resource.downloadUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = resource.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020C1B]/80 backdrop-blur-md">
      <div className="bg-[#112240] border border-[#64FFDA]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#0A192F] text-[#8892B0] hover:text-[#E6F1FF] hover:bg-[#1d3557] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-[#0A192F] pb-4 pr-8">
          <span className="text-xs font-bold text-[#64FFDA] bg-[#020C1B] px-2.5 py-1 rounded border border-[#64FFDA]/30">
            {resource.format} · {resource.fileSize}
          </span>
          <h3 className="text-xl font-bold text-[#E6F1FF] mt-2">{resource.title}</h3>
          <p className="text-xs text-[#CCD6F6]">{resource.description}</p>
        </div>

        {/* Content Viewer Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#CCD6F6]">
            <span>DOCUMENT PREVIEW / CONTENTS ({resource.filename})</span>
            <button
              onClick={handleCopy}
              className="text-[#64FFDA] hover:text-[#2DD4BF] flex items-center gap-1 font-semibold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#64FFDA]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Content' : 'Copy Text'}</span>
            </button>
          </div>

          <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80">
            {content}
          </pre>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#0A192F]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#E6F1FF] border border-[#64FFDA]/30 font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Preview
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-immersive-btn text-[#0A192F] font-bold text-xs shadow-md shadow-[#64FFDA]/20 cursor-pointer"
          >
            {resource.downloadUrl ? (
              <>
                <ExternalLink className="w-4 h-4" />
                <span>Access Course Resources</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download {resource.filename}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
