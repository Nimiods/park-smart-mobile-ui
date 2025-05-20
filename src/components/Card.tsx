
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, gradient = false }) => {
  return (
    <div className={cn(gradient ? 'info-card-gradient' : 'info-card', className)}>
      {children}
    </div>
  );
};

export default Card;
