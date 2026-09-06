'use client';

import React, { useState } from 'react';
import { TelemetryBackdrop } from '@/components/TelemetryBackdrop';

type NavTabId = 'DASH' | 'LIVE' | 'TELEM' | 'LOGS' | 'SOP';

interface NavTabItem {
  id: NavTabId;
  label: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const NAV_TABS: NavTabItem[] = [
  {
    id: 'DASH',
    label: 'DASH',
    icon: ({ className = 'h-5 w-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 'LIVE',
    label: 'LIVE',
    icon: ({ className = 'h-5 w-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l5-4v12l-5-4v3a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v3z" />
      </svg>
    ),
  },
  {
    id: 'TELEM',
    label: 'TELEM',
    icon: ({ className = 'h-5 w-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2.5-6 4 13 2.5-7h5" />
      </svg>
    ),
  },
  {
    id: 'LOGS',
    label: 'LOGS',
    icon: ({ className = 'h-5 w-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 6 10 12 4 18" />
        <line x1="12" y1="18" x2="20" y2="18" />
      </svg>
    ),
  },
  {
    id: 'SOP',
    label: 'SOP',
    icon: ({ className = 'h-5 w-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" />
        <path d="M9 12l2 2 4-4" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTabId>('DASH');

  return (
    <main className="relative h-screen w-screen overflow-hidden p-3.5 lg:p-4 flex gap-3.5">
      {/* Ambient static cosmic particle backdrop */}
      <TelemetryBackdrop />

      {/* ==================================================================== */}
      {/* COLUMN 1: NARROW ICON NAVIGATION RAIL (FAR LEFT, FULL HEIGHT)         */}
      {/* Width: 64px (w-16), containing vertical stack of square tab buttons  */}
      {/* ==================================================================== */}
      <aside
        aria-label="Navigation Rail"
        className="w-16 shrink-0 h-full border border-white/[0.06] bg-slate-950/20 backdrop-blur-sm rounded-none p-1.5 flex flex-col gap-2 overflow-y-auto"
      >
        {NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`w-full aspect-square rounded-none flex flex-col items-center justify-center gap-1.5 transition-all duration-150 ${
                isActive
                  ? 'border border-white/20 bg-white/[0.08] text-slate-100'
                  : 'border border-slate-800/60 bg-slate-900/20 text-slate-400 hover:border-slate-700/80 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              {/* Centered Icon */}
              <Icon className="h-5 w-5" />

              {/* Compact Uppercase Monospace Label */}
              <span className="font-mono text-[9px] tracking-widest font-semibold uppercase leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </aside>

      {/* ==================================================================== */}
      {/* COLUMN 2: MAIN CENTER SECTION (HORIZONTAL UPPER / LOWER SPLIT)        */}
      {/* ==================================================================== */}
      <div className="flex-1 h-full min-w-0 flex flex-col gap-3.5 min-h-0">
        {/* Upper Primary Display Container (~65% height) */}
        <section
          aria-label="Primary Display"
          className="flex-[6.5] min-h-0 border border-white/[0.06] bg-slate-950/20 backdrop-blur-sm rounded-none"
        />

        {/* Lower Secondary Container (~35% height) */}
        <section
          aria-label="Secondary Container"
          className="flex-[3.5] min-h-0 border border-white/[0.06] bg-slate-950/20 backdrop-blur-sm rounded-none"
        />
      </div>

      {/* ==================================================================== */}
      {/* COLUMN 3: WIDE RIGHT-HAND UTILITY PANEL (FULL HEIGHT)                 */}
      {/* ==================================================================== */}
      <section
        aria-label="Utility Panel"
        className="w-72 lg:w-80 xl:w-96 shrink-0 h-full border border-white/[0.06] bg-slate-950/20 backdrop-blur-sm rounded-none"
      />
    </main>
  );
}
