import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ca' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ca: {
    // Header
    'header.home': 'Inici',
    'header.portfolio': 'Portafoli',
    'header.services': 'Serveis',
    'header.about': 'Sobre Nosaltres',
    'header.contact': 'Contacte',
    'header.language': 'Idioma',

    // Hero
    'hero.title': 'EBR obres i reformes',
    'hero.subtitle': 'Qualitat, precisió i perfecció en cada projecte',
    'hero.cta': 'Descobreix els nostres projectes',

    // About
    'about.title': 'Sobre EBR obres i reformes sl',
    'about.description': 'Amb més de 20 anys d\'experiència, especialitzem-nos en reformes i construcció per a clients que valoren la qualitat i la perfecció. Cada projecte és una obra mestra d\'arquitectura i disseny, executada amb la màxima precisió i atenció als detalls. No fem concessions: qualitat, materials premium i artesania impecable en cada obra.',
    'about.projects': 'Projectes completats',
    'about.clients': 'Clients satisfets',
    'about.years': 'Anys d\'experiència',

    // Services
    'services.title': 'Els nostres Serveis',
    'services.kitchens': 'Reformas Integrales',
    'services.kitchens_desc': 'Transformació completa dels vostres espais amb els més alts estàndards de qualitat i disseny.',
    'services.bathrooms': 'Obra Nova',
    'services.bathrooms_desc': 'Des dels fonaments fins als acabats finals, construïm amb precisió i atenció al detall.',
    'services.living': 'Cuines',
    'services.living_desc': 'Disseny i instal·lació de cuines amb els millors materials i tecnologia.',
    'services.bedrooms': 'Banys',
    'services.bedrooms_desc': 'Creació de banys amb acabats exquisits i funcionalitat superior.',
    'services.painting': 'Pintura i acabats',
    'services.painting_desc': 'Treballs de pintura, revestiments i acabats de qualitat superior.',
    'services.flooring': 'Paviments i sòls',
    'services.flooring_desc': 'Instal·lació de paviments, sòls de fusta i revestiments de qualitat.',

    // Portfolio
    'portfolio.title': 'Portafoli de Projectes',
    'portfolio.view': 'Veure projecte',

    // Contact
    'contact.title': 'Contacte',
    'contact.description': 'Poseu-vos en contacte amb nosaltres per a una consulta sense compromís.',
    'contact.name': 'Nom complet',
    'contact.email': 'Correu electrònic',
    'contact.phone': 'Telèfon',
    'contact.message': 'Missatge',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviant...',
    'contact.success': 'Missatge enviat correctament',
    'contact.error': 'Error en enviar el missatge',

    // Suppliers
    'suppliers.title': 'Els nostres Proveïdors',
    'suppliers.description': 'Treballem amb les millors marques de materials i subministraments del mercat',

    // Location
    'location.title': 'Ubicació i Àrea de Cobertura',
    'location.description': 'Ubicats a Vic, Barcelona, atenim tota la regió de Torello, Vic, Barcelona i rodalies',

    // Testimonials
    'testimonials.title': 'Què Diuen els Nostres Clients',
    'testimonials.description': 'Descobreix les experiències dels nostres clients satisfets amb els projectes d\'EBR',

    // Footer
    'footer.developed': 'Desenvolupat per',
    'footer.rights': 'Tots els drets reservats',
    'gall.mas': 'Veure més',
    'gall.tods': 'Veure tots els projectes',
  },
  es: {
    // Header
    'header.home': 'Inicio',
    'header.portfolio': 'Portafolio',
    'header.services': 'Servicios',
    'header.about': 'Sobre Nosotros',
    'header.contact': 'Contacto',
    'header.language': 'Idioma',

    // Hero
    'hero.title': 'EBR obres i reformes',
    'hero.subtitle': 'Calidad, precisión y perfección en cada proyecto',
    'hero.cta': 'Descubre nuestros proyectos',

    // About
    'about.title': 'Sobre EBR obres i reformes sl',
    'about.description': 'Con más de 20 años de experiencia, nos especializamos en reformas y construcción para clientes que valoran la calidad y la perfección. Cada proyecto es una obra maestra de arquitectura y diseño, ejecutada con máxima precisión y atención al detalle. No hacemos concesiones: calidad, materiales premium y artesanía impecable en cada obra.',
    'about.projects': 'Proyectos completados',
    'about.clients': 'Clientes satisfechos',
    'about.years': 'Años de experiencia',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.kitchens': 'Reformas Integrales',
    'services.kitchens_desc': 'Transformación completa de tus espacios con los más altos estándares de calidad y diseño.',
    'services.bathrooms': 'Obra Nueva',
    'services.bathrooms_desc': 'Desde los cimientos hasta los acabados finales, construimos con precisión y atención al detalle.',
    'services.living': 'Cocinas',
    'services.living_desc': 'Diseño e instalación de cocinas con los mejores materiales y tecnología.',
    'services.bedrooms': 'Baños',
    'services.bedrooms_desc': 'Creación de baños con acabados exquisitos y funcionalidad superior.',
    'services.painting': 'Pintura y acabados',
    'services.painting_desc': 'Trabajos de pintura, revestimientos y acabados de calidad superior.',
    'services.flooring': 'Pavimentos y suelos',
    'services.flooring_desc': 'Instalación de pavimentos, suelos de madera y revestimientos de calidad.',

    // Portfolio
    'portfolio.title': 'Portafolio de Proyectos',
    'portfolio.view': 'Ver proyecto',

    // Contact
    'contact.title': 'Contacto',
    'contact.description': 'Póngase en contacto con nosotros para una consulta sin compromiso.',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensaje enviado correctamente',
    'contact.error': 'Error al enviar el mensaje',

    // Suppliers
    'suppliers.title': 'Nuestros Proveedores',
    'suppliers.description': 'Trabajamos con las mejores marcas de materiales y suministros del mercado',

    // Location
    'location.title': 'Ubicación y Área de Cobertura',
    'location.description': 'Ubicados en Vic, Barcelona, atendemos toda la región de Torello, Vic, Barcelona y alrededores',

    // Testimonials
    'testimonials.title': 'Qué Dicen Nuestros Clientes',
    'testimonials.description': 'Descubre las experiencias de nuestros clientes satisfechos con los proyectos de EBR',

    // Footer
    'footer.developed': 'Desarrollado por',
    'footer.rights': 'Todos los derechos reservados',
    'gall.mas': 'Ver más',
    'gall.tods': 'Ver todos los proyectos',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ca');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
