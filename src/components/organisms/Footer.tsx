import React from 'react';
import cn from 'classnames';
import { ArrowUpButton } from '../atoms/UtilityButton';
import { Logo } from '../atoms/Logo/Logo';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-element">
      <div
        className={cn(
          'w-full',
          'px-4 md:px-6',
          'flex flex-col gap-8 py-8 lg:py-10',
          'md:flex-row md:items-center md:justify-between',
          'lg:max-w-[1200px] lg:mx-auto lg:px-8',
        )}
      >
        <a
          href="/"
          className={cn(
            'block',
            'self-start md:self-center',
          )}
        >
          <Logo />
        </a>

        <nav
          className={cn(
            'flex flex-col gap-4',
            'md:flex-row md:items-center',
            'md:gap-12',
            'lg:gap-24',
          )}
        >

          <a
            href="https://github.com/fs-aug25-Monolit-Digital/nice-gadgets-monolit"
            target="_blank"
            rel="noreferrer"
            className={cn(
              'font-bold',
              'text-[12px] leading-[11px]',
              'tracking-[0.04em]',
              'uppercase',
              'text-secondary hover:text-primary',
              'transition-colors duration-300',
            )}
          >
            Github
          </a>

          <a
            href="#/contacts"
            target="_blank"
            className={cn(
              'font-bold',
              'text-[12px] leading-[11px]',
              'tracking-[0.04em]',
              'uppercase',
              'text-secondary hover:text-primary',
              'transition-colors duration-300',
            )}
          >
            Contacts
          </a>

          <a
            href="#/rights"
            target="_blank"
            className={cn(
              'font-bold',
              'text-[12px] leading-[11px]',
              'tracking-[0.04em]',
              'uppercase',
              'text-secondary hover:text-primary',
              'transition-colors duration-300',
            )}
          >
            Rights
          </a>
        </nav>

        <button
          onClick={handleScrollToTop}
          className={cn(
            'flex items-center gap-4',
            'bg-transparent border-none cursor-pointer',
            'transition-transform duration-300 hover:scale-105',
            'self-center md:self-center',
            'group',
          )}
        >
          <span
            className={cn(
              'font-semibold',
              'text-[12px] leading-[15px]',
              'tracking-[0]',
              'text-secondary',
            )}
          >
            Back to top
          </span>

          <ArrowUpButton />
        </button>
      </div>
    </footer>
  );
};