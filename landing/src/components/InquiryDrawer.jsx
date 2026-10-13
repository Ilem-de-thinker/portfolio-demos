import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config.js';

export default function InquiryDrawer({ isOpen, onClose, selectedDesign, allDesigns = [] }) {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [designId, setDesignId] = useState(selectedDesign?.id || 'noir');
  const [themeMode, setThemeMode] = useState('both');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Keep design in sync when selectedDesign changes
  React.useEffect(() => {
    if (selectedDesign) {
      setDesignId(selectedDesign.id);
    }
  }, [selectedDesign]);

  if (!isOpen) return null;

  const currentDesign = allDesigns.find((d) => d.id === designId) || selectedDesign;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const chosenName = currentDesign ? currentDesign.name : 'Custom';
    const message = `Hello, I'm ${name.trim()}, a ${profession.trim() || 'Creator'}. I'd like the *${chosenName}* portfolio design (${themeMode} mode). Notes: ${notes.trim() || 'None'}. Please let me know the next steps.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setIsSent(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[99990] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-lg h-full bg-stone-900 border-l border-stone-800 text-stone-100 p-6 md:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
                Studio Commission
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Configure Your Build
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="p-2 rounded-full border border-stone-800 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Target Design */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">
                Selected Portfolio Design
              </label>
              <select
                value={designId}
                onChange={(e) => setDesignId(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-sm text-stone-200 focus:outline-none focus:border-amber-400"
              >
                {allDesigns.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} — ({d.persona})
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Profession */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">
                Your Discipline / Profession
              </label>
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="e.g. Architectural Photographer, Sound Engineer"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Theme Preference */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">
                Theme Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['light', 'dark', 'both'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setThemeMode(mode)}
                    className={`py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                      themeMode === mode
                        ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                        : 'border-stone-800 hover:border-stone-700 text-stone-400 bg-stone-950'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">
                Custom Notes / Timeline (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific project highlights or deadline?"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 px-4 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            {/* Direct WhatsApp Action Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              {isSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4" />
                  <span>Proceed to WhatsApp Chat</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-stone-800 text-center">
          <p className="text-xs text-stone-500">
            Direct dispatch to studio lead engineer via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
