import React from 'react';
import { Link } from '../../router/Router.tsx';

interface MasterLogoProps {
  className?: string;
  glyphSize?: number;
  wordmarkSize?: string;
}

/**
 * MASTER LOGO: VALNORA
 * 
 * Reusable, isolated vector component rendering the geometric crossed-line glyph
 * and the tracked uppercase "VALNORA" wordmark.
 * 
 * Designed for easy future replacement if an official proprietary SVG/PNG asset
 * file is provided by the creative director.
 */
export const MasterLogo: React.FC<MasterLogoProps> = ({
  className = '',
  glyphSize = 48,
  wordmarkSize = "text-[19px]",
}) => {
  return (
    <Link
      to="/"
      id="master-logo-link"
      className={`inline-flex items-center gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] rounded-sm transition-opacity hover:opacity-95 ${className}`}
      aria-label="Valnora Home"
    >
      {/* 
        Official supplied PNG X logo mark asset.
        Preserves original geometry, stroke shapes, angles, crossing points, and proportions.
      */}
      <span
        id="master-logo-glyph-wrap"
        className="relative flex items-center justify-center shrink-0"
        style={{ width: glyphSize, height: glyphSize }}
      >
        <img
          src="/valnora-mark.png"
          alt="Valnora mark"
          className="w-full h-full object-contain select-none"
          referrerPolicy="no-referrer"
          aria-hidden="true"
        />
      </span>

      {/* Tracked uppercase geometric wordmark with refined spacing matching reference */}
      <span
        id="master-logo-wordmark"
        className={`font-semibold tracking-[0.28em] text-white select-none ${wordmarkSize}`}
        style={{ letterSpacing: '0.28em' }}
      >
        VALNORA
      </span>
    </Link>
  );
};
