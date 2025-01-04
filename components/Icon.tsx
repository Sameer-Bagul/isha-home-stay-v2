'use client';

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = '' }: IconProps) {
  // Using useEffect to ensure ion-icon is only accessed after component mount
  return (
    <span className={className}>
      <i data-icon={name} className="icon" />
    </span>
  );
}