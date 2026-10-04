/**
 * Core type definitions for Razorbill by Valnora.
 * Strictly decoupled from visual styling, to be populated and refined
 * as visual reference images and specifications are provided.
 */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavigationItem[];
}

export interface HeaderConfig {
  logoUrl?: string;
  logoAlt?: string;
  navigation: NavigationItem[];
}

export interface FooterConfig {
  copyrightText?: string;
  links?: NavigationItem[];
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export interface RouteDefinition {
  path: string;
  name: string;
  component: React.ComponentType;
  meta?: PageMetadata;
}
