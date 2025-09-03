
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', titleClassName = '' }) => {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 ${className}`}>
      {title && <h3 className={`text-xl font-bold text-white mb-4 ${titleClassName}`}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
