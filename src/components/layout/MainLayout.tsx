import React from 'react';
import { Header } from './Header.tsx';
import { SiteFooter } from './SiteFooter.tsx';
import { AuthFooter } from './AuthFooter.tsx';
import { useRouter } from '../../router/Router.tsx';

const AUTH_ROUTES = ['/login', '/get-started', '/signup/consumer', '/signup/business', '/signup/professional'];
const FULL_FOOTER_ROUTES = ['/blog', '/contact'];

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPath } = useRouter();

  // Scroll to top whenever the route changes
  React.useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-[#070707]">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">{children}</main>
      {AUTH_ROUTES.includes(currentPath) && <AuthFooter />}
      {FULL_FOOTER_ROUTES.includes(currentPath) && <SiteFooter />}
    </div>
  );
};
