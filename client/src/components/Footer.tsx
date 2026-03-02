import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">EBR</span>
              </div>
              <h3 className="font-serif text-lg font-bold">EBR</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistes en reformes de luxe per a clients de solvència econòmica. Qualitat, precisió i elegància en cada projecte.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contacte</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-amber-600">Email:</span>{' '}
                <a href="mailto:eduarbruno27@gmail.com" className="hover:text-white transition-colors">
                  eduarbruno27@gmail.com
                </a>
              </p>
              <p className="text-gray-500">Catalunha, Espanya</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Enllaços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portafoli
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Serveis
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contacte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t('footer.developed')}{' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-500 transition-colors">
                Pablo Eduardo
              </a>
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} EBR obres i reformes sl. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
