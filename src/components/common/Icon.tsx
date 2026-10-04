import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  className?: string;
  title?: string;
  size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x';
  ariaLabel?: string;
}

/**
 * Standard FontAwesome Icon component wrapper.
 * Strictly adheres to project rule: Font Awesome icons only.
 */
export const Icon: React.FC<IconProps> = ({
  icon,
  className = '',
  title,
  size,
  ariaLabel,
}) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      title={title}
      size={size}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
};
