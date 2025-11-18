type Props = {
  className: string
}

export const Navbar: React.FC<Props> = ({className}) => {
  return (
    <nav className={`hidden md:flex items-center text-xs uppercase font-extrabold text-secondary md:gap-8 lg:gap-16 ${className}`}>
      <a href="/" className="text-secondary">HOME</a>
      <a href="/phones" className="text-secondary">PHONES</a>
      <a href="/tablets" className="text-secondary">TABLETS</a>
      <a href="/accessories" className="text-secondary">ACCESSORIES</a>
    </nav>
  );
};