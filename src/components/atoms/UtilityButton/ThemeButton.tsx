import { useState, useEffect } from 'react';

export const ThemeButton = () => {
  const [dark, setDark] = useState(false);

    useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';
  
    setDark(isDark);
    // eslint-disable-next-line react-hooks/immutability
    applyTheme(isDark);
    }, []);

const applyTheme = (isDark: boolean) => {
  const html = document.documentElement;
  
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  html.classList.toggle('dark', isDark);
};

const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const isChecked = event.target.checked;
  
  setDark(isChecked);
  applyTheme(isChecked);
  localStorage.setItem('theme', isChecked ? 'dark' : 'light');
};

  return (
    <label className="relative w-[47px] h-[47px] lg:w-[63px] lg:h-[63px] flex justify-center items-center border 
    border-element dark:border-element cursor-pointer hover:border-primary 
    dark:hover:border-primary transition-colors duration-300 rounded-none">
        <input 
            type="checkbox" 
            className="hidden" 
            checked={dark}
            onChange={handleThemeChange}
            aria-label='Toggle theme'
            />

  <svg
    className={`w-4 h-4 lg:w-5 lg:h-5 fill-current transition-all duration-300 ${
      dark ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <svg
    className={`absolute w-4 h-4 lg:w-5 lg:h-5 fill-current text-blue-100 transition-all duration-300 ${
      dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  );
}