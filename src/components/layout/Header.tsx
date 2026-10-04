import React from 'react';
import { MasterHeader } from './MasterHeader.tsx';

/**
 * Re-export MasterHeader through Header.tsx to maintain full compatibility
 * with existing layout imports while honoring the MasterHeader naming standard.
 */
export const Header: React.FC = () => {
  return <MasterHeader />;
};
