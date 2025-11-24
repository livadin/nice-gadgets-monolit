import React, { useState, useEffect } from 'react';
import { SearchIcon } from '../../atoms/Icons/SearchIcon';

interface SearchProps {
  onSearch: (query: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchProps> = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');
  
  const [placeholder, setPlaceholder] = useState('');

  const phrases = [
    "iPhone 11", 
    "iPhone 14 Pro",
    "iPad Pro",
    "iPad Air",
    "iPad Mini",
    "Apple Watch"
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setPlaceholder(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        setPlaceholder(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timerId = setTimeout(type, 1000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full items-stretch shadow-sm rounded-md overflow-hidden ${className}`}
    >
      <div className="relative flex-1 bg-white min-w-0 transition-colors duration-300">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search for ${placeholder}|`}
          className="
            w-full h-12 pl-4 pr-12 
            text-primary placeholder-secondary
            border border-r-0 border-element
            rounded-l-md
            outline-none transition-all duration-200
            focus:border-primary focus:z-10 focus:ring-1 focus:ring-primary
            appearance-none
          "
        />
      </div>

      <button
        type="submit"
        className="
          flex items-center justify-center gap-2
          px-6 bg-primary-dark text-white font-medium
          rounded-r-md
          transition-all duration-300 ease-in-out hover:scale-105
          active:scale-95
          shrink-0
        "
      >
        <SearchIcon className='w-4 h-4 text-white-dark transition-colors duration-300'/>
      </button>
    </form>
  );
};