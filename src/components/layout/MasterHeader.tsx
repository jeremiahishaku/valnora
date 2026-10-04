import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { useRouter, Link } from '../../router/Router.tsx';
import { MasterLogo } from '../common/MasterLogo.tsx';
import { PrimaryButton, SecondaryButton } from '../common/Button.tsx';
import { MobileMenu } from './MobileMenu.tsx';
import { getStoreLink } from '../../config/appLinks.ts';

/**
 * MASTER NAVIGATION DEFINITION
 * Approved exact order:
 * 1. Home
 * 2. About Us
 * 3. Our App ⌵
 * 4. For Businesses
 * 5. For Professionals
 * 6. Blog
 * 7. Contact
 */
const MASTER_NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'our-app', label: 'Our App', href: '/our-app', hasDropdown: true },
  { id: 'for-businesses', label: 'For Businesses', href: '/for-businesses' },
  { id: 'for-professionals', label: 'For Professionals', href: '/for-professionals' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

/**
 * MASTER GLOBAL HEADER
 * 
 * Height: ~76px (within 72-80px range)
 * Horizontal padding: ~48-64px desktop
 * Obsidian Luxury Dark aesthetic with active orange indicator
 * Includes interactive Our App dropdown
 */
export const MasterHeader: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const appNavFading = false;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  // Hover handlers for smooth desktop dropdown presentation
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 220);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dropdownOpen) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dropdownOpen]);

  return (
    <>
      <header
        id="master-header"
        className="w-full bg-[#070707] border-b border-[#1E2227]/40 sticky top-0 z-40"
      >
        <div className="max-w-[1440px] mx-auto pl-6 pr-6 sm:pl-10 sm:pr-10 lg:pl-10 lg:pr-14 h-[88px] flex items-center justify-between">
          {/* ZONE 1 (LEFT): Master Logo */}
          <div className="shrink-0 flex items-center">
            <MasterLogo />
          </div>

          {/* ZONE 2 (CENTER): Desktop Navigation Menu */}
          <nav
            id="master-desktop-nav"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {MASTER_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? currentPath === '/' || currentPath === ''
                  : currentPath === item.href;

              if (item.hasDropdown) {
                const currentAnimatedTitle = 'Our App';

                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative py-2 flex flex-col items-center"
                  >
                    <div
                      id={`nav-link-${item.id}-wrapper`}
                      className={`inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors duration-150 select-none px-3 py-1.5 rounded-lg border ${
                        isActive
                          ? 'text-white border-[#FF6500]'
                          : dropdownOpen ? 'text-white border-transparent' : 'text-[#9CA3AF] hover:text-white border-transparent'
                      }`}
                    >
                      {/* Clicking the text navigates directly to the Our App page */}
                      <button
                        id={`nav-link-${item.id}-text`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(item.href);
                          setDropdownOpen(false);
                        }}
                        className="cursor-pointer focus:outline-none focus-visible:underline hover:text-white transition-all text-left flex items-center h-6 min-w-[70px]"
                        title="Go to Our App page"
                      >
                        <span
                          className={`inline-block transition-all duration-300 transform ${
                            appNavFading
                              ? 'opacity-0 -translate-y-1.5 scale-95'
                              : 'opacity-100 translate-y-0 scale-100'
                          }`}
                        >
                          {currentAnimatedTitle}
                        </span>
                      </button>

                      {/* Caret icon button toggles dropdown on click, plus hover works automatically */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDropdownOpen((prev) => !prev);
                        }}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        aria-label="Toggle Our App download options"
                        className="p-1 text-[#9CA3AF] hover:text-white focus:outline-none transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className={`w-2.5 h-2.5 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180 text-white' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {/* Compact Dropdown Menu */}
                    {dropdownOpen && (
                      <div
                        id="our-app-dropdown-menu"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0E1012] border border-[#1E2227] rounded-xl shadow-2xl p-2 z-50 flex flex-col gap-1 transition-all animate-in fade-in zoom-in-95 duration-150"
                        role="menu"
                        aria-label="Our App Downloads"
                      >
                        {/* Option 1: Google Play */}
                        <a
                          id="dropdown-download-google-play"
                          href={getStoreLink('googlePlay')}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#16191D] border border-transparent hover:border-[#1E2227] transition-all group select-none"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-base group-hover:text-white group-hover:border-[#FF6500]/50 transition-colors shrink-0">
                            <FontAwesomeIcon icon={faGooglePlay} />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-white text-xs font-semibold leading-tight group-hover:text-[#FF6500] transition-colors">
                              Google Play
                            </span>
                            <span className="text-[#9CA3AF] text-[11px] leading-tight mt-0.5">
                              Download for Android
                            </span>
                          </div>
                        </a>

                        {/* Option 2: Apple App Store */}
                        <a
                          id="dropdown-download-app-store"
                          href={getStoreLink('appStore')}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#16191D] border border-transparent hover:border-[#1E2227] transition-all group select-none"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-base group-hover:text-white group-hover:border-[#FF6500]/50 transition-colors shrink-0">
                            <FontAwesomeIcon icon={faApple} className="text-lg" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-white text-xs font-semibold leading-tight group-hover:text-[#FF6500] transition-colors">
                              App Store
                            </span>
                            <span className="text-[#9CA3AF] text-[11px] leading-tight mt-0.5">
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
                <div key={item.id} className="relative py-2 flex flex-col items-center">
                  <Link
                    id={`nav-link-${item.id}`}
                    to={item.href}
                    className={`inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors duration-150 select-none px-3 py-1.5 rounded-lg border focus:outline-none ${
                      isActive
                        ? 'text-white border-[#FF6500]'
                        : 'text-[#9CA3AF] hover:text-white border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* ZONE 3 (RIGHT): Actions (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                id="header-login-link"
                to="/login"
                className={`inline-flex items-center justify-center h-10 w-[80px] rounded-lg bg-[#0E1012] border text-white text-[13px] font-semibold transition-colors ${
                  currentPath === '/login' ? 'border-[#FF6500]' : 'border-[#2A2F36] hover:border-[#FF6500]/60'
                }`}
              >
                Log in
              </Link>
              <PrimaryButton id="header-get-started-button" to="/get-started" className="h-10 w-[112px]">
                Get Started
              </PrimaryButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#9CA3AF] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Responsive Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={MASTER_NAV_ITEMS}
        currentPath={currentPath}
      />
    </>
  );
};
