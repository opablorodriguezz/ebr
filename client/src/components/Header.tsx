import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'header.home', href: '#home' },
    { key: 'header.portfolio', href: '#portfolio' },
    { key: 'header.services', href: '#services' },
    { key: 'header.about', href: '#about' },
    { key: 'header.contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm flex items-center justify-center">
            <span className="text-white font-serif text-lg font-bold">EBR</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-serif font-bold text-gray-900">EBR</h1>
            <p className="text-xs text-gray-500">Obres i Reformes</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex gap-2 border-l border-gray-200 pl-4">
            <button
              onClick={() => setLanguage('ca')}
              className={`text-xs font-medium px-2 py-1 transition-colors duration-300 ${
                language === 'ca'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              CA
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`text-xs font-medium px-2 py-1 transition-colors duration-300 ${
                language === 'es'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ES
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-sm transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
