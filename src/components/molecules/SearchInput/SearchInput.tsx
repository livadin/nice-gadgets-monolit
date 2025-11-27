import React, { useState, useEffect, useCallback } from 'react';
import { SearchIcon } from '../../atoms/Icons/SearchIcon';
import { SearchInputCard } from './SearchInputCard';
import { getProducts } from '../../../utilities/fetchApi';
import type { SimpleProduct } from '../../../types/CategoryProduct';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProduct';
import _ from 'lodash';
import { useSearchProducts } from '../../../stores/useSearchProducts';

interface SearchProps {
  className?: string;
}

function getFilteredProducts(
  products: SimpleProduct[],
  { query }: { query: string },
) {
  let filteredProducts = [...products];

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();
    const words = normalizedQuery.split(' ');

    if (words.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        words.every((word) => product.name.toLowerCase().includes(word)),
      );
    } else {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery),
      );
    }
  }

  return filteredProducts;
}

export const SearchInput: React.FC<SearchProps> = ({ className = '' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [inputValue, setInputValue] = useState(query);
  const [products, setProducts] = useState<SimpleProduct[]>([]);
  const [placeholder, setPlaceholder] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { data: productsFromServer } = useProducts(getProducts);
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchProducts, setResultInfo, clearProducts } = useSearchProducts();

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }

    if (!isFocused) {
      setShowResult(false);
      setIsFocused(false);
    }
  }, [query, isFocused]);

  useEffect(() => {
    setProducts(getFilteredProducts(productsFromServer, { query }));
  }, [query, productsFromServer]);

  const phrases = [
    'iPhone 11',
    'iPhone 14 Pro',
    'iPad Pro',
    'iPad Air',
    'iPad Mini',
    'Apple Watch',
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
  }, []);

  const updateQueryInUrl = useCallback(
    _.debounce((value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set('query', value);
      } else {
        params.delete('query');
      }
      setSearchParams(params, { replace: true });
    }, 500),
    [searchParams, setSearchParams],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    updateQueryInUrl(event.target.value);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fixedQuery = inputValue.trim();
    if (fixedQuery.length === 0) return;

    if (products.length > 0) {
      setSearchProducts(products);
    } else {
      clearProducts()
    }
    setResultInfo(fixedQuery);

    if (location.pathname === '/searchResults') {
      const params = new URLSearchParams(searchParams);
      params.set('query', fixedQuery);
      setSearchParams(params, { replace: true });
      return;
    }

    navigate(`/searchResults?query=${encodeURIComponent(fixedQuery)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex w-full items-stretch shadow-sm rounded-md ${className}`}
    >
      <div className="relative flex-1 bg-white min-w-0 transition-colors duration-300">
        <input
          type="text"
          value={inputValue.trimStart()}
          onChange={handleQueryChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={`Search for ${placeholder}|`}
          className="
            w-full h-12 pl-4 pr-12 
            text-primary placeholder-secondary
            border border-r-0 border-element
            rounded-l-md
            outline-none transition-all duration-200
            focus:border-primary focus:z-10 focus:ring-primary
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
        onClick={handleSubmit}
      >
        <SearchIcon className="w-4 h-4 text-white-dark transition-colors duration-300" />
      </button>
      <SearchInputCard
        isShown={showResult}
        products={products}
      />
    </form>
  );
};
