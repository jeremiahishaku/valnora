import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../router/Router.tsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * PRIMARY SOLID ORANGE BUTTON
 * Dimensions: ~110px x 38px, ~8px radius, solid #FA5A00, white text.
 */
export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  id,
  type = 'button',
  to,
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold text-[13px] text-white bg-[#FA5A00] hover:bg-[#e65000] active:bg-[#d44800] rounded-[8px] transition-colors duration-150 px-4 py-2 select-none shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] disabled:opacity-50 disabled:cursor-not-allowed';

  if (to) {
    return (
      <Link
        id={id}
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

/**
 * SECONDARY / GHOST BUTTON
 * Plain text/transparent background, white/light-gray text, no unnecessary borders.
 */
export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  id,
  type = 'button',
  to,
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium text-[13px] text-[#E5E7EB] hover:text-white bg-transparent hover:bg-white/5 active:bg-white/10 rounded-[8px] transition-colors duration-150 px-3.5 py-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] disabled:opacity-50 disabled:cursor-not-allowed';

  if (to) {
    return (
      <Link
        id={id}
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

interface InlineArrowLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * INLINE ARROW LINK
 * Solid orange text with FontAwesome arrow icon.
 */
export const InlineArrowLink: React.FC<InlineArrowLinkProps> = ({
  children,
  to,
  className = '',
  id,
  onClick,
}) => {
  return (
    <Link
      id={id}
      to={to}
      onClick={onClick}
      className={`inline-flex items-center gap-2 font-medium text-[14px] text-[#FF6500] hover:text-[#ff781f] transition-colors duration-150 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6500] ${className}`}
    >
      <span>{children}</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
};
