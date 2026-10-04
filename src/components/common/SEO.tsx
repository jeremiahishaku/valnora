import React, { useEffect } from 'react';
import { PageMetadata } from '../../types/index.ts';

interface SEOProps {
  meta?: PageMetadata;
}

const DEFAULT_TITLE = 'Razorbill by Valnora';
const DEFAULT_DESCRIPTION = 'Official responsive website for Razorbill by Valnora.';

export const SEO: React.FC<SEOProps> = ({ meta }) => {
  useEffect(() => {
    const title = meta?.title ? `${meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta?.description || DEFAULT_DESCRIPTION);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta?.description || DEFAULT_DESCRIPTION);
    }
  }, [meta]);

  return null;
};
