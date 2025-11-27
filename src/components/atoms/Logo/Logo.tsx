import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to={'/'}>
      <span className={`flex items-center text-lg text-primary transition-colors duration-300 ${className}`}>
        <span className="uppercase">m</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 11"
          className="h-[1em] w-[1em] min-w-[1em] -translate-y-0.5"
        >
          <line x1="3" y1="2" x2="1.5" y2="0.5" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
          <line x1="7" y1="2" x2="8.5" y2="0.5" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>

          <circle cx="5" cy="6" r="4.5" fill="currentColor"/>

          <rect 
            x="2.1" y="4" width="5.8" height="3.8" rx="1.9" 
            className="fill-white transition-colors duration-300" 
          />

          <circle cx="3.6" cy="5.8" r="0.5" fill="currentColor"/>
          <circle cx="6.4" cy="5.8" r="0.5" fill="currentColor"/>
        </svg>

        <span className="uppercase font-semibold">nolit</span>
      </span>
    </Link>
  );
};