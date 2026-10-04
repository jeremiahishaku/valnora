import React from 'react';
import { RouterProvider, useRouter } from './router/Router.tsx';
import { MainLayout } from './components/layout/MainLayout.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { OurAppPage } from './pages/OurAppPage.tsx';
import { ForBusinessesPage } from './pages/ForBusinessesPage.tsx';
import { ForProfessionalsPage } from './pages/ForProfessionalsPage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { GetStartedPage } from './pages/GetStartedPage.tsx';
import { SignUpPage } from './pages/SignUpPage.tsx';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderRoute = () => {
    switch (currentPath) {
      case '/our-app':
        return <OurAppPage />;
      case '/for-businesses':
        return <ForBusinessesPage />;
      case '/for-professionals':
        return <ForProfessionalsPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact':
        return <ContactPage />;
      case '/login':
        return <LoginPage />;
      case '/get-started':
        return <GetStartedPage />;
      case '/signup/consumer':
        return <SignUpPage type="consumer" />;
      case '/signup/business':
        return <SignUpPage type="business" />;
      case '/signup/professional':
        return <SignUpPage type="professional" />;
      case '/about':
        return <AboutPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return <MainLayout>{renderRoute()}</MainLayout>;
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
