import React from 'react';
import cn from 'classnames';
import { ArrowUpButton } from '../atoms/UtilityButton';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-element">
      <div
        className={cn(
          'mx-auto w-full',
          // Внутрішні відступи: 16px (sm), 24px (md), 0px з max-w (lg)
          'px-4 md:px-6 lg:px-0',
          // Вертикальний та горизонтальний Flex-контейнер
          'flex flex-col gap-8 py-8 lg:py-10',
          // Tablet & Desktop → row, вирівнювання по центру, простір між трьома основними елементами
          'md:flex-row md:items-center md:justify-between',
          // Desktop фіксована ширина контенту 1200px
          'lg:max-w-[1200px]',
        )}
      >
        {/* LOGO */}
        <a
          href="/"
          className={cn(
            'block',
            'transition-transform duration-300 ease-in-out hover:scale-105',
            'self-start md:self-center',
          )}
        >
          <img
            src="src/assets/icons/logo/logoMonolit.svg"
            alt="Monolit"
            width={89}
          />
        </a>

        {/* NAVIGATION */}
        <nav
          className={cn(
            // Mobile: вертикальний стовпець, простір 16px
            'flex flex-col gap-4',
            // Tablet/Desktop: горизонтальний рядок
            'md:flex-row md:items-center',
            // !!! ЗБІЛЬШУЄМО ГОРИЗОНТАЛЬНИЙ ПРОСТІР між посиланнями до 48px (gap-12)
            'md:gap-12',
            'lg:gap-24',
          )}
        >
          {/* Typography group A */}
          <a
            href="https://github.com/fs-aug25-Monolit-Digital/nice-gadgets-monolit"
            target="_blank"
            rel="noreferrer"
            className={cn(
              // Mont Bold (700)
              'font-bold',
              // Font: 12px / Line height: 11px
              'text-[12px] leading-[11px]',
              // Letter spacing: 0.04em
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

        {/* BACK TO TOP */}
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
              // Typography group B: Mont SemiBold (600)
              'font-semibold',
              // Font: 12px / Line height: 15px
              'text-[12px] leading-[15px]',
              // Letter spacing: 0
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