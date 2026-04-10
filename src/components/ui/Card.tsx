import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
