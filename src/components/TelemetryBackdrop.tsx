'use client';

import React from 'react';
import Image from 'next/image';
import backdropImage from '../../public/cosmic-backdrop-clean.png';

export interface TelemetryBackdropProps {
  /** Optional custom CSS classes applied to the outer container */
  className?: string;
  /** Opacity of the cosmic backdrop (0.0 to 1.0, default: 1.0) */
  opacity?: number;
  /** Optional nested children rendered within or above the backdrop */
  children?: React.ReactNode;
}

/**
 * TelemetryBackdrop
 * 
 * A clean, static, ultra-subtle cosmic telemetry backdrop for Next.js (App Router, Tailwind CSS).
 * Renders the exact blurred space backdrop with soft out-of-focus bokeh nodes,
 * ethereal smoke nebulae, and deep obsidian-teal atmosphere.
 * 
 * - Completely static (zero CPU/GPU animation overhead)
 * - Fixed fullscreen coverage (-z-10, pointer-events-none, overflow-hidden)
 * - Content-hashed asset import to bust all browser caches
 * - Zero watermarks or diamond symbols
 * - Zero layout shifts (CLS = 0) with seamless radial edge vignette
 */
export function TelemetryBackdrop({
  className = '',
  opacity = 1.0,
  children,
}: TelemetryBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-[#05080d] ${className}`}
      style={{
        contain: 'strict',
        opacity,
      }}
    >
      {/* High-fidelity static cosmic backdrop (content-hashed import) */}
      <Image
        src={backdropImage}
        alt="Cosmic Telemetry Backdrop"
        fill
        priority
        quality={100}
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center pointer-events-none select-none"
      />

      {/* Seamless radial vignette edge blend for ultrawide and varied viewport scaling */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 60%, #05080d 100%)',
        }}
      />

      {/* Deep space corner shroud in the bottom-right ensuring pristine dark void */}
      <div
        className="absolute bottom-0 right-0 w-52 h-52 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 100% 100%, rgba(5, 8, 13, 0.85) 0%, transparent 75%)',
        }}
      />

      {/* Optional nested content */}
      {children}
    </div>
  );
}

export default TelemetryBackdrop;
