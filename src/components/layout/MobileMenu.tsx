import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from '../../router/Router.tsx';
import { PrimaryButton, SecondaryButton } from '../common/Button.tsx';
import { getStoreLink } from '../../config/appLinks.ts';

interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
}

/**
 * MOBILE NAVIGATION MENU
 * 
 * Consistent responsive presentation of the same master navigation system.
 * Adheres strictly to the Obsidian Luxury Dark visual language:
 * deep black background, white text, muted secondary states, orange active state.
 * Includes interactive expandable dropdown for Our App (Google Play & App Store).
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  currentPath,
}) => {
  const [appExpanded, setAppExpanded] = useState<boolean>(true);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-overlay"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#070707] transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Mobile Menu Header Row */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E2227]">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9CA3AF]">
          Navigation
        </div>
        <button
          id="mobile-menu-close-button"
          type="button"
          onClick={onClose}
          className="p-2 text-[#9CA3AF] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
          aria-label="Close navigation menu"
        >
          <FontAwesomeIcon icon={faXmark} className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Nav List */}
      <nav id="mobile-nav-links" className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? currentPath === '/' || currentPath === ''
              : currentPath === item.href;

          if (item.hasDropdown) {
            return (
              <div key={item.id} className="py-1">
                <div className="flex items-center justify-between py-2">
                  <Link
                    id={`mobile-nav-${item.id}`}
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-2.5 text-[16px] font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#FF6500]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setAppExpanded((prev) => !prev)}
                    className="p-2 text-[#9CA3AF] hover:text-white focus:outline-none"
                    aria-label="Toggle Our App download options"
                    aria-expanded={appExpanded}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        appExpanded ? 'rotate-180 text-white' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Submenu for Downloads */}
                {appExpanded && (
                  <div
                    id="mobile-our-app-downloads"
                    className="pl-3 pr-1 py-2 my-1 bg-[#0E1012] border border-[#1E2227] rounded-xl flex flex-col gap-1.5"
                  >
                    <a
                      id="mobile-download-google-play"
                      href={getStoreLink('googlePlay')}
                      onClick={onClose}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#16191D] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-sm shrink-0">
                        <FontAwesomeIcon icon={faGooglePlay} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-white text-xs font-semibold leading-tight">
                          Google Play
                        </span>
                        <span className="text-[#9CA3AF] text-[10px] leading-tight">
                          Download for Android
                        </span>
                      </div>
                    </a>

                    <a
                      id="mobile-download-app-store"
                      href={getStoreLink('appStore')}
                      onClick={onClose}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#16191D] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-sm shrink-0">
                        <FontAwesomeIcon icon={faApple} className="text-base" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-white text-xs font-semibold leading-tight">
                          App Store
                        </span>
                        <span className="text-[#9CA3AF] text-[10px] leading-tight">
                          Download for iPhone
                        </span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={item.id} className="py-1">
              <Link
                id={`mobile-nav-${item.id}`}
                to={item.href}
                onClick={onClose}
                className={`flex items-center justify-between py-3 text-[16px] font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {item.label}
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#FF6500]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Mobile Actions Bottom Bar */}
      <div
        id="mobile-nav-actions"
        className="p-6 border-t border-[#1E2227] bg-[#0A0A0A] flex flex-col gap-3"
      >
        <SecondaryButton
          id="mobile-login-button"
          to="/login"
          onClick={onClose}
          className="w-full justify-center py-3 text-[14px]"
        >
          Log in
        </SecondaryButton>
        <PrimaryButton
          id="mobile-get-started-button"
          to="/get-started"
          onClick={onClose}
          className="w-full justify-center py-3 text-[14px]"
        >
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};
