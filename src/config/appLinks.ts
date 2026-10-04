/**
 * CENTRALIZED APP STORE DOWNLOAD LINKS CONFIGURATION
 * 
 * In strict compliance with Mission 07 instructions:
 * DO NOT invent Google Play or Apple App Store URLs.
 * Keep destinations clearly identifiable without sending users to unrelated websites
 * or claiming the app is already published.
 * 
 * When official production store listings are available, update the URLs below.
 */
export interface AppDownloadLinks {
  googlePlay: string;
  appStore: string;
}

export const APP_DOWNLOAD_LINKS: AppDownloadLinks = {
  googlePlay: '',
  appStore: '',
};

/**
 * Returns safe destination URL or fallback anchor if not yet published.
 */
export const getStoreLink = (platform: 'googlePlay' | 'appStore'): string => {
  const url = APP_DOWNLOAD_LINKS[platform];
  if (url && url.trim().length > 0) {
    return url;
  }
  // Fallback to in-page anchor without leaving the site or inventing fake links
  return '#download';
};
