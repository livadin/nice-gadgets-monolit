import React from 'react';
import cn from 'classnames';

interface UtilityButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  variant?: 'square' | 'round';
  className?: string;
  width?: number;
  height?: number;
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  children,
  onClick,
  selected = false,
  disabled = false,
  variant = 'square',
  className = '',
  width = 32,
  height = 32,
}) => {
  const base = `inline-flex items-center justify-center border transition-colors duration-300`;

  const shape = variant === 'round' ? 'rounded-full' : 'rounded-none';

  const states = cn(
  disabled
    ? 'border-element text-icon cursor-not-allowed'
    : selected
    ? 'bg-primary border-primary text-white'
    : 'border-element text-primary hover:border-primary'
  );
  
  return (
    <button
      className={cn(base, shape, states, width, height, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};